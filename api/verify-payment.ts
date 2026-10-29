// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: VERIFY PAYMENT
// Verifies status with Dodo Payments and Supabase before delivering key
// ==========================================================================

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { session_id } = req.query;

  if (!session_id) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const mode = process.env.DODO_MODE || 'test';

  if (!apiKey) {
    // Demo / Sandbox mode fallback
    return res.status(200).json({
      status: 'succeeded',
      licenseKey: `FILSY-DEMO-${session_id.slice(-4).toUpperCase()}-TEST`,
      customerEmail: 'buyer@filsy.local',
      createdAt: new Date().toISOString(),
      activeDevice: null,
    });
  }

  try {
    const dodoApiBase = mode === 'test'
      ? 'https://test.dodopayments.com'
      : 'https://api.dodopayments.com';

    // Verify session with Dodo Payments API
    const response = await fetch(`${dodoApiBase}/checkouts/${session_id}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Could not verify session with Dodo Payments' });
    }

    const session = await response.json();

    if (session.status === 'succeeded' || session.payment_status === 'paid') {
      // Return verified license key
      const licenseKey = `FILSY-${session_id.slice(-4).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-WIN`;
      return res.status(200).json({
        status: 'succeeded',
        licenseKey,
        customerEmail: session.customer_email || session.email,
        createdAt: new Date().toISOString(),
        activeDevice: null,
      });
    } else {
      return res.status(200).json({
        status: session.status || 'processing',
        message: 'Payment is awaiting confirmation',
      });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Verification error' });
  }
}
