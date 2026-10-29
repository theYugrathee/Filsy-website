import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'dodo-and-supabase-dev-middleware',
        configureServer(server) {
          // 1. License recovery: fetches exclusively from Supabase
          server.middlewares.use('/api/retrieve-license', async (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-filsy-app-token');

            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                let email = '';
                if (req.method === 'POST' && body) {
                  try {
                    const parsed = JSON.parse(body);
                    email = parsed.email || '';
                  } catch {
                    // Ignore JSON parse error
                  }
                } else if (req.url) {
                  const url = new URL(req.url, 'http://localhost');
                  email = url.searchParams.get('email') || '';
                }

                const cleanEmail = email.trim().toLowerCase();
                if (!cleanEmail) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ ok: false, error: 'Email is required' }));
                  return;
                }

                const supabaseUrl =
                  env.VITE_SUPABASE_FUNCTIONS_URL ||
                  'https://ofvyincijdrefgxbupwy.supabase.co/functions/v1';
                const filsyToken =
                  env.VITE_FILSY_APP_TOKEN || '5cef6c413bebc63f819280c528b3e74f';

                const supabaseRes = await fetch(`${supabaseUrl}/retrieve-license`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-filsy-app-token': filsyToken,
                  },
                  body: JSON.stringify({ email: cleanEmail }),
                });

                if (supabaseRes.status === 404) {
                  res.statusCode = 200;
                  res.end(JSON.stringify({ ok: true, licenses: [], count: 0 }));
                  return;
                }

                if (!supabaseRes.ok) {
                  const errText = await supabaseRes.text();
                  console.error('Supabase dev error:', supabaseRes.status, errText);
                  res.statusCode = supabaseRes.status;
                  res.end(JSON.stringify({ ok: false, error: 'Database query error' }));
                  return;
                }

                const data = (await supabaseRes.json()) as { ok?: boolean; licenses?: string[] };

                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    ok: true,
                    licenses: data.licenses || [],
                    count: (data.licenses || []).length,
                  })
                );
              } catch (err: any) {
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    ok: false,
                    error: err?.message || 'Error retrieving licenses from Supabase',
                  })
                );
              }
            });
          });

          // 2. Payment verification: strictly checks Dodo payment status and delivers real key
          server.middlewares.use('/api/verify-payment', async (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            try {
              const url = new URL(req.url || '', 'http://localhost');
              const paymentId = url.searchParams.get('payment_id') || '';
              const sessionId = url.searchParams.get('session_id') || url.searchParams.get('checkout_session_id') || '';
              const customerEmail = url.searchParams.get('email') || url.searchParams.get('customer_email') || '';

              const apiKey = env.DODO_PAYMENTS_API_KEY;
              const mode = env.DODO_MODE || 'test';
              const dodoApiBase = mode === 'test'
                ? 'https://test.dodopayments.com'
                : 'https://api.dodopayments.com';

              if (!apiKey) {
                res.statusCode = 500;
                res.end(JSON.stringify({ status: 'failed', error: 'Dodo Payments API key not configured' }));
                return;
              }

              let payment: any = null;

              // If payment_id provided, fetch directly
              if (paymentId) {
                const pRes = await fetch(`${dodoApiBase}/payments/${encodeURIComponent(paymentId)}`, {
                  headers: { Authorization: `Bearer ${apiKey}` },
                });
                if (pRes.ok) {
                  payment = await pRes.json();
                }
              }

              // Else find by session_id
              if (!payment && sessionId) {
                const listRes = await fetch(`${dodoApiBase}/payments`, {
                  headers: { Authorization: `Bearer ${apiKey}` },
                });
                if (listRes.ok) {
                  const listData = (await listRes.json()) as { items?: any[] };
                  payment = (listData.items || []).find(
                    (p) =>
                      p.checkout_session_id === sessionId ||
                      p.payment_id === sessionId ||
                      p.invoice_id === sessionId
                  );
                }
              }

              // Else find by email
              if (!payment && customerEmail) {
                const listRes = await fetch(`${dodoApiBase}/payments`, {
                  headers: { Authorization: `Bearer ${apiKey}` },
                });
                if (listRes.ok) {
                  const listData = (await listRes.json()) as { items?: any[] };
                  payment = (listData.items || []).find(
                    (p) => p.customer?.email?.toLowerCase() === customerEmail.trim().toLowerCase()
                  );
                }
              }

              if (!payment) {
                res.statusCode = 404;
                res.end(
                  JSON.stringify({
                    status: 'failed',
                    error: 'No payment record found for this checkout. Please refresh or contact support.',
                  })
                );
                return;
              }

              // Verify payment status must be succeeded
              if (payment.status !== 'succeeded') {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    status: 'failed',
                    error: `Payment status is ${payment.status}. License key cannot be released.`,
                  })
                );
                return;
              }

              // Fetch the real license key generated for THIS payment
              let realLicenseKey: string | null = null;
              const customerId = payment.customer?.customer_id;

              if (customerId) {
                const licRes = await fetch(
                  `${dodoApiBase}/license_keys?customer_id=${encodeURIComponent(customerId)}`,
                  {
                    headers: { Authorization: `Bearer ${apiKey}` },
                  }
                );

                if (licRes.ok) {
                  const licData = (await licRes.json()) as { items?: any[] };
                  const items = licData.items || [];
                  const matched = items.find((it) => it.payment_id === payment.payment_id);
                  if (matched?.key) {
                    realLicenseKey = matched.key;
                  } else if (items.length > 0 && items[0]?.key) {
                    realLicenseKey = items[0].key;
                  }
                }
              }

              // Check Supabase if needed
              if (!realLicenseKey && payment.customer?.email) {
                const supabaseUrl =
                  env.VITE_SUPABASE_FUNCTIONS_URL ||
                  'https://ofvyincijdrefgxbupwy.supabase.co/functions/v1';
                const filsyToken =
                  env.VITE_FILSY_APP_TOKEN || '5cef6c413bebc63f819280c528b3e74f';

                try {
                  const supaRes = await fetch(`${supabaseUrl}/retrieve-license`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-filsy-app-token': filsyToken,
                    },
                    body: JSON.stringify({ email: payment.customer.email.toLowerCase() }),
                  });
                  if (supaRes.ok) {
                    const supaData = (await supaRes.json()) as { licenses?: string[] };
                    if (supaData.licenses && supaData.licenses.length > 0) {
                      realLicenseKey = supaData.licenses[0];
                    }
                  }
                } catch {
                  // Optional fallback
                }
              }

              if (!realLicenseKey) {
                res.statusCode = 202;
                res.end(
                  JSON.stringify({
                    status: 'processing',
                    message: 'Payment confirmed! Your key is being generated. Please refresh in a moment.',
                    customerEmail: payment.customer?.email,
                  })
                );
                return;
              }

              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  status: 'succeeded',
                  licenseKey: realLicenseKey,
                  customerEmail: payment.customer?.email,
                  paymentId: payment.payment_id,
                  amount: payment.total_amount,
                  currency: payment.currency,
                  createdAt: payment.created_at,
                })
              );
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ status: 'failed', error: err?.message || 'Server error' }));
            }
          });
        },
      },
    ],
  };
});
