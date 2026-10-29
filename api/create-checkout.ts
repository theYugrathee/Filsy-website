// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: CREATE CHECKOUT SESSION
// Handles secure Dodo Payments API communication without exposing secrets
// ==========================================================================

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const productId = process.env.DODO_PRODUCT_ID;
  const mode = process.env.DODO_MODE || 'test';

  if (!apiKey || !productId) {
    // If running in development without credentials, provide sandbox instruction
    return res.status(200).json({
      mode: 'sandbox_simulated',
      message: 'Dodo credentials not configured in environment. Using demo checkout simulation.',
    });
  }

  try {
    const { returnUrl, cancelUrl, currency = 'USD' } = req.body;
    const dodoApiBase = mode === 'test' 
      ? 'https://test.dodopayments.com' 
      : 'https://api.dodopayments.com';

    // Call Dodo Payments API to generate secure checkout session
    const response = await fetch(`${dodoApiBase}/checkouts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        payment_link: true,
        return_url: returnUrl,
        cancel_url: cancelUrl,
        billing_currency: currency,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `Dodo API Error: ${errorText}` });
    }

    const data = await response.json();
    return res.status(200).json({
      checkoutUrl: data.checkout_url || data.payment_link,
      sessionId: data.id || data.session_id,
      mode,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal server error creating checkout' });
  }
}
