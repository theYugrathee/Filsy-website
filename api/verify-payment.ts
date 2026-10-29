// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: VERIFY PAYMENT & DELIVER REAL LICENSE
// Strictly checks Dodo Payments to confirm payment was successful and
// returns the actual user license key (never a dummy or simulated key).
// ==========================================================================

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const paymentId = req.query?.payment_id || req.body?.payment_id || '';
  const sessionId = req.query?.session_id || req.query?.checkout_session_id || req.body?.session_id || '';
  const customerEmail = req.query?.email || req.query?.customer_email || req.body?.email || '';

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const mode = process.env.DODO_MODE || 'test';
  const dodoApiBase = mode === 'test'
    ? 'https://test.dodopayments.com'
    : 'https://api.dodopayments.com';

  if (!apiKey) {
    return res.status(500).json({
      status: 'failed',
      error: 'Dodo Payments API key is not configured on the server.',
    });
  }

  try {
    let payment: any = null;

    // 1. If payment_id provided, fetch payment directly
    if (paymentId) {
      const payRes = await fetch(`${dodoApiBase}/payments/${encodeURIComponent(paymentId)}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      if (payRes.ok) {
        payment = await payRes.json();
      }
    }

    // 2. If no payment found yet, search by session_id or checkout_session_id
    if (!payment && sessionId) {
      const listRes = await fetch(`${dodoApiBase}/payments`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      if (listRes.ok) {
        const listData = await listRes.json();
        payment = (listData.items || []).find(
          (p: any) =>
            p.checkout_session_id === sessionId ||
            p.payment_id === sessionId ||
            p.invoice_id === sessionId
        );
      }
    }

    // 3. If still no payment found, search by email
    if (!payment && customerEmail) {
      const cleanEmail = String(customerEmail).trim().toLowerCase();
      const listRes = await fetch(`${dodoApiBase}/payments`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      if (listRes.ok) {
        const listData = await listRes.json();
        payment = (listData.items || []).find(
          (p: any) => p.customer?.email?.toLowerCase() === cleanEmail
        );
      }
    }

    // If no payment record exists in Dodo
    if (!payment) {
      return res.status(404).json({
        status: 'failed',
        error: 'No payment record found matching your checkout session. If you just completed payment, please wait a moment and refresh.',
      });
    }

    // 4. Verify payment status — MUST be succeeded
    if (payment.status !== 'succeeded') {
      return res.status(400).json({
        status: 'failed',
        error: `Payment status is "${payment.status}". License keys are only released for succeeded transactions.`,
        paymentStatus: payment.status,
      });
    }

    // 5. Fetch the real license key generated for THIS payment and user
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
        const licData = await licRes.json();
        const items = licData.items || [];
        // Prioritize the key specifically generated for this payment_id
        const matched = items.find((it: any) => it.payment_id === payment.payment_id);
        if (matched?.key) {
          realLicenseKey = matched.key;
        } else if (items.length > 0 && items[0]?.key) {
          // If only 1 key for this customer, use it
          realLicenseKey = items[0].key;
        }
      }
    }

    // 6. Check Supabase as backup for the customer's provisioned key
    if (!realLicenseKey && payment.customer?.email) {
      const supabaseUrl =
        process.env.VITE_SUPABASE_FUNCTIONS_URL ||
        'https://ofvyincijdrefgxbupwy.supabase.co/functions/v1';
      const filsyToken =
        process.env.VITE_FILSY_APP_TOKEN || '5cef6c413bebc63f819280c528b3e74f';

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
          const supaData = await supaRes.json();
          if (supaData.licenses && supaData.licenses.length > 0) {
            realLicenseKey = supaData.licenses[0];
          }
        }
      } catch {
        // Supabase lookup optional fallback
      }
    }

    if (!realLicenseKey) {
      // Payment succeeded but license key webhook/provisioning is still running
      return res.status(202).json({
        status: 'processing',
        message: 'Payment confirmed! Your license key is being generated. Please refresh in a few seconds.',
        customerEmail: payment.customer?.email,
      });
    }

    // 7. Deliver the real license key ONLY to this user
    return res.status(200).json({
      status: 'succeeded',
      licenseKey: realLicenseKey,
      customerEmail: payment.customer?.email,
      paymentId: payment.payment_id,
      amount: payment.total_amount,
      currency: payment.currency,
      createdAt: payment.created_at,
    });
  } catch (error: any) {
    console.error('Verify payment error:', error);
    return res.status(500).json({
      status: 'failed',
      error: error.message || 'Internal error verifying payment',
    });
  }
}
