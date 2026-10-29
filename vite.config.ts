import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'dodo-api-dev-middleware',
        configureServer(server) {
          server.middlewares.use('/api/retrieve-license', async (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

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

                const apiKey = env.DODO_PAYMENTS_API_KEY;
                const dodoMode = env.DODO_MODE || 'test';
                const dodoApiBase =
                  dodoMode === 'test'
                    ? 'https://test.dodopayments.com'
                    : 'https://api.dodopayments.com';

                if (!apiKey) {
                  if (
                    cleanEmail.includes('customer') ||
                    cleanEmail.includes('test') ||
                    cleanEmail.includes('demo')
                  ) {
                    res.statusCode = 200;
                    res.end(
                      JSON.stringify({
                        ok: true,
                        licenses: ['FILSY-DEMO-7842-WK91-LIVE'],
                        count: 1,
                      })
                    );
                    return;
                  }
                  res.statusCode = 200;
                  res.end(JSON.stringify({ ok: true, licenses: [], count: 0 }));
                  return;
                }

                const keys: string[] = [];

                // 1. Look up customers matching this email
                const custResponse = await fetch(
                  `${dodoApiBase}/customers?email=${encodeURIComponent(cleanEmail)}`,
                  {
                    headers: {
                      Authorization: `Bearer ${apiKey}`,
                    },
                  }
                );

                if (custResponse.ok) {
                  const custData = (await custResponse.json()) as { items?: Array<{ customer_id: string }> };
                  const customers = custData.items || [];

                  for (const c of customers) {
                    const licRes = await fetch(
                      `${dodoApiBase}/license_keys?customer_id=${encodeURIComponent(c.customer_id)}`,
                      {
                        headers: {
                          Authorization: `Bearer ${apiKey}`,
                        },
                      }
                    );

                    if (licRes.ok) {
                      const licData = (await licRes.json()) as { items?: Array<{ key: string }> };
                      for (const item of licData.items || []) {
                        if (item.key && !keys.includes(item.key)) {
                          keys.push(item.key);
                        }
                      }
                    }
                  }
                }

                // 2. Fallback check: look through payments in case customer wasn't indexed by email filter
                if (keys.length === 0) {
                  const payRes = await fetch(`${dodoApiBase}/payments`, {
                    headers: { Authorization: `Bearer ${apiKey}` },
                  });
                  if (payRes.ok) {
                    const payData = (await payRes.json()) as {
                      items?: Array<{
                        status?: string;
                        has_license_key?: boolean;
                        customer?: { email?: string; customer_id?: string };
                      }>;
                    };
                    const matches = (payData.items || []).filter(
                      (p) =>
                        p.customer?.email?.toLowerCase() === cleanEmail &&
                        (p.status === 'succeeded' || p.has_license_key)
                    );
                    for (const m of matches) {
                      if (m.customer?.customer_id) {
                        const lRes = await fetch(
                          `${dodoApiBase}/license_keys?customer_id=${encodeURIComponent(
                            m.customer.customer_id
                          )}`,
                          { headers: { Authorization: `Bearer ${apiKey}` } }
                        );
                        if (lRes.ok) {
                          const lData = (await lRes.json()) as { items?: Array<{ key: string }> };
                          for (const it of lData.items || []) {
                            if (it.key && !keys.includes(it.key)) {
                              keys.push(it.key);
                            }
                          }
                        }
                      }
                    }
                  }
                }

                // Demo fallback if no key exists yet for test/demo email
                if (
                  keys.length === 0 &&
                  (cleanEmail.includes('customer') ||
                    cleanEmail.includes('test') ||
                    cleanEmail.includes('demo'))
                ) {
                  keys.push('FILSY-DEMO-7842-WK91-LIVE');
                }

                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    ok: true,
                    licenses: keys,
                    count: keys.length,
                  })
                );
              } catch (err: any) {
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    ok: false,
                    error: err?.message || 'Error retrieving licenses',
                  })
                );
              }
            });
          });
        },
      },
    ],
  };
});
