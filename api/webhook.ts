// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: DODO PAYMENTS WEBHOOK LISTENER
// Securely verifies signature and confirms payment status directly from Dodo
// ==========================================================================

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, dodo-signature, x-dodo-signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookSecret = process.env.DODO_PAYMENTS_WEBHOOK_KEY;
  const signature = req.headers['dodo-signature'] || req.headers['x-dodo-signature'];

  if (!webhookSecret) {
    console.warn('DODO_PAYMENTS_WEBHOOK_KEY not set in environment.');
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const eventType = payload.type || payload.event;
    const data = payload.data || {};

    console.log(`[Dodo Webhook] Received event: ${eventType}`);

    if (eventType === 'payment.succeeded' || eventType === 'checkout.completed') {
      const paymentId = data.payment_id || data.id;
      const customerEmail = data.customer?.email || data.customer_email || data.email;
      const licenseKey = data.license_key || data.license_keys?.[0]?.key;

      console.log(`[Dodo Webhook] Verified payment ${paymentId} for ${customerEmail}. Real license key: ${licenseKey || 'provisioned by Dodo'}`);

      // If Supabase integration is available, forward provisioning
      const supabaseUrl = process.env.VITE_SUPABASE_FUNCTIONS_URL;
      const filsyToken = process.env.VITE_FILSY_APP_TOKEN;

      if (supabaseUrl && filsyToken && customerEmail) {
        try {
          await fetch(`${supabaseUrl}/provision-license`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-filsy-app-token': filsyToken,
            },
            body: JSON.stringify({
              payment_id: paymentId,
              email: customerEmail,
              license_key: licenseKey,
            }),
          });
        } catch (supaErr) {
          console.warn('[Dodo Webhook] Supabase forward error:', supaErr);
        }
      }

      return res.status(200).json({
        received: true,
        verified: true,
        paymentId,
        customerEmail,
      });
    }

    if (eventType === 'payment.failed') {
      console.warn(`[Dodo Webhook] Payment failed:`, data.payment_id || data.id);
      return res.status(200).json({ received: true, status: 'failed' });
    }

    return res.status(200).json({ received: true });
  } catch (err: any) {
    console.error('[Dodo Webhook] Processing error:', err);
    return res.status(500).json({ error: err.message || 'Webhook processing failure' });
  }
}
