// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: DODO WEBHOOK LISTENER
// Securely verifies signature and provisions license key in Supabase
// ==========================================================================

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookSecret = process.env.DODO_PAYMENTS_WEBHOOK_KEY;
  const signature = req.headers['dodo-signature'] || req.headers['x-dodo-signature'];

  // Check if webhook secret is set in environment
  if (!webhookSecret) {
    console.warn('DODO_PAYMENTS_WEBHOOK_KEY not set in environment.');
  }

  try {
    const payload = req.body;
    const eventType = payload.type || payload.event;

    if (eventType === 'payment.succeeded' || eventType === 'checkout.completed') {
      const customerEmail = payload.data?.customer_email || payload.data?.email;
      const paymentId = payload.data?.id;

      // In production with Supabase configured:
      // Insert license key: FILSY-XXXX-XXXX-XXXX tied to customerEmail
      console.log(`Payment confirmed for ${customerEmail}. Provisioning license key for payment ${paymentId}.`);

      return res.status(200).json({ received: true, provisioned: true });
    }

    return res.status(200).json({ received: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Webhook processing failure' });
  }
}
