// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: RETRIEVE LICENSE KEYS BY EMAIL
// Queries Dodo Payments to find all license keys owned by customer email
// ==========================================================================

export default async function handler(req: any, res: any) {
  // Allow CORS for local dev / cross-origin if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-filsy-app-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let email = '';
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    email = body?.email || '';
  } else {
    email = req.query?.email || '';
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!cleanEmail) {
    return res.status(400).json({ ok: false, error: 'Email address is required' });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const mode = process.env.DODO_MODE || 'test';

  if (!apiKey) {
    // If running in development without credentials, provide demo fallback
    if (cleanEmail.includes('demo') || cleanEmail.includes('test') || cleanEmail.includes('customer')) {
      return res.status(200).json({
        ok: true,
        licenses: ['FILSY-DEMO-7842-WK91-LIVE'],
        count: 1,
      });
    }
    return res.status(200).json({ ok: true, licenses: [], count: 0 });
  }

  try {
    const dodoApiBase = mode === 'test'
      ? 'https://test.dodopayments.com'
      : 'https://api.dodopayments.com';

    // 1. Look up customer(s) matching this email
    const customerRes = await fetch(
      `${dodoApiBase}/customers?email=${encodeURIComponent(cleanEmail)}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!customerRes.ok) {
      const errText = await customerRes.text();
      console.error('Dodo Customers lookup error:', errText);
      return res.status(502).json({ ok: false, error: 'Failed to query customer database' });
    }

    const customerData = await customerRes.json();
    const customers = customerData.items || [];

    if (customers.length === 0) {
      // Also check payments directly in case customer email is stored on a payment
      const paymentsRes = await fetch(
        `${dodoApiBase}/payments`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (paymentsRes.ok) {
        const paymentData = await paymentsRes.json();
        const payments = paymentData.items || [];
        const matchedPayments = payments.filter((p: any) =>
          p.customer?.email?.toLowerCase() === cleanEmail &&
          (p.status === 'succeeded' || p.has_license_key)
        );

        if (matchedPayments.length > 0) {
          const keys: string[] = [];
          for (const p of matchedPayments) {
            if (p.customer?.customer_id) {
              const licRes = await fetch(
                `${dodoApiBase}/license_keys?customer_id=${encodeURIComponent(p.customer.customer_id)}`,
                {
                  headers: { 'Authorization': `Bearer ${apiKey}` },
                }
              );
              if (licRes.ok) {
                const licData = await licRes.json();
                for (const lic of licData.items || []) {
                  if (lic.key && !keys.includes(lic.key)) {
                    keys.push(lic.key);
                  }
                }
              }
            }
          }

          if (keys.length > 0) {
            return res.status(200).json({
              ok: true,
              licenses: keys,
              count: keys.length,
            });
          }
        }
      }

      return res.status(200).json({ ok: true, licenses: [], count: 0 });
    }

    // 2. Query license keys for each customer ID found
    const allKeys: string[] = [];
    for (const customer of customers) {
      const licRes = await fetch(
        `${dodoApiBase}/license_keys?customer_id=${encodeURIComponent(customer.customer_id)}`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (licRes.ok) {
        const licData = await licRes.json();
        const items = licData.items || [];
        for (const item of items) {
          if (item.key && !allKeys.includes(item.key)) {
            allKeys.push(item.key);
          }
        }
      }
    }

    return res.status(200).json({
      ok: true,
      licenses: allKeys,
      count: allKeys.length,
    });
  } catch (error: any) {
    console.error('Retrieve license handler error:', error);
    return res.status(500).json({ ok: false, error: error.message || 'Internal server error' });
  }
}
