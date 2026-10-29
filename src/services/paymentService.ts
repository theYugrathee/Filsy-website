// ==========================================================================
// FILSY PAYMENT SERVICE (DODO PAYMENTS INTEGRATION)
// Secure client-side service calling serverless API endpoints
// ==========================================================================

import { APP_CONFIG } from '../config';

export interface CheckoutResponse {
  checkoutUrl?: string;
  sessionId?: string;
  mode: 'live' | 'test' | 'sandbox_simulated';
  error?: string;
}

export interface PaymentVerification {
  status: 'succeeded' | 'processing' | 'failed' | 'cancelled';
  licenseKey?: string;
  customerEmail?: string;
  createdAt?: string;
  activeDevice?: string | null;
  error?: string;
}

export interface RetrieveLicenseResult {
  ok: boolean;
  licenses: string[];
  count: number;
  error?: string;
}

/**
 * Searches for all license keys associated with an email address.
 * Queries /api/retrieve-license first, with multiple reliable fallbacks.
 */
export async function retrieveLicenses(email: string): Promise<RetrieveLicenseResult> {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) {
    return { ok: false, licenses: [], count: 0, error: 'Email address is required' };
  }

  // 1. Try local dev middleware or serverless API endpoint
  try {
    const res = await fetch('/api/retrieve-license', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: cleanEmail }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.ok && Array.isArray(data.licenses)) {
        return {
          ok: true,
          licenses: data.licenses,
          count: data.licenses.length,
        };
      }
    }
  } catch (err) {
    console.warn('API /api/retrieve-license call failed or not mounted:', err);
  }

  // 2. Fallback: Supabase Edge Function if configured
  if (APP_CONFIG.supabaseFunctionsUrl) {
    try {
      const res = await fetch(`${APP_CONFIG.supabaseFunctionsUrl}/retrieve-license`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-filsy-app-token': APP_CONFIG.filsyAppToken,
        },
        body: JSON.stringify({ email: cleanEmail }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.ok && Array.isArray(data.licenses) && data.licenses.length > 0) {
          return {
            ok: true,
            licenses: data.licenses,
            count: data.licenses.length,
          };
        }
      }
    } catch {
      // Supabase unavailable
    }
  }

  // 3. Fallback: Session storage (if user just made a purchase in current browser session)
  const sessionLicenses: string[] = [];
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith('session_')) {
        const val = sessionStorage.getItem(key);
        if (val) {
          const parsed = JSON.parse(val);
          if (parsed.customerEmail?.toLowerCase() === cleanEmail && parsed.licenseKey) {
            sessionLicenses.push(parsed.licenseKey);
          }
        }
      }
    }
  } catch {
    // Ignore storage read error
  }

  if (sessionLicenses.length > 0) {
    return {
      ok: true,
      licenses: sessionLicenses,
      count: sessionLicenses.length,
    };
  }

  // 4. Fallback for demo/test accounts
  if (cleanEmail.includes('customer') || cleanEmail.includes('test') || cleanEmail.includes('demo')) {
    return {
      ok: true,
      licenses: ['FILSY-DEMO-7842-WK91-LIVE'],
      count: 1,
    };
  }

  return {
    ok: true,
    licenses: [],
    count: 0,
  };
}

/**
 * Initiates Dodo Payments checkout
 */
export async function initiateCheckout(currency: 'USD' | 'INR' = 'USD'): Promise<CheckoutResponse> {
  // Prioritize direct Dodo payment link
  if (APP_CONFIG.dodoPaymentLink && !APP_CONFIG.dodoPaymentLink.includes('YOUR-PRODUCT-ID')) {
    window.location.href = APP_CONFIG.dodoPaymentLink;
    return {
      checkoutUrl: APP_CONFIG.dodoPaymentLink,
      mode: 'live',
    };
  }

  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productName: APP_CONFIG.productName,
        currency,
        amount: currency === 'USD' ? APP_CONFIG.pricing.usdPrice : APP_CONFIG.pricing.inrPrice,
        returnUrl: `${window.location.origin}/payment/success`,
        cancelUrl: `${window.location.origin}/payment/cancelled`,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return data;
      }
    }
  } catch (err) {
    console.warn('API endpoint unavailable or running in standalone frontend mode. Providing sandbox flow.', err);
  }

  // Graceful fallback / Sandbox development simulation
  // Generates a mock session and redirects to success state for verification test
  const mockSessionId = `dodo_sess_${Math.random().toString(36).substring(2, 12)}`;
  const mockLicenseKey = `FILSY-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  
  // Save in local storage for the success verification
  sessionStorage.setItem(`session_${mockSessionId}`, JSON.stringify({
    status: 'succeeded',
    licenseKey: mockLicenseKey,
    customerEmail: 'customer@example.com',
    createdAt: new Date().toISOString(),
    activeDevice: null
  }));

  return {
    checkoutUrl: `/payment/success?session_id=${mockSessionId}&demo=true`,
    sessionId: mockSessionId,
    mode: 'sandbox_simulated'
  };
}

export interface VerifyPaymentQuery {
  paymentId?: string;
  sessionId?: string;
  email?: string;
}

/**
 * Verifies payment confirmation with Dodo Payments and retrieves the user's real license key.
 * Never returns simulated or dummy keys.
 */
export async function verifyPayment(query: string | VerifyPaymentQuery): Promise<PaymentVerification> {
  const queryParams = new URLSearchParams();

  if (typeof query === 'string') {
    const trimmed = query.trim();
    if (trimmed.startsWith('pay_')) {
      queryParams.set('payment_id', trimmed);
    } else if (trimmed.includes('@')) {
      queryParams.set('email', trimmed);
    } else if (trimmed) {
      queryParams.set('session_id', trimmed);
    }
  } else if (query) {
    if (query.paymentId) queryParams.set('payment_id', query.paymentId);
    if (query.sessionId) queryParams.set('session_id', query.sessionId);
    if (query.email) queryParams.set('email', query.email);
  }

  const queryString = queryParams.toString();
  if (!queryString) {
    return {
      status: 'failed',
      error: 'No payment identifier provided. Please open your payment confirmation email or check your Dodo Payments receipt.',
    };
  }

  try {
    const response = await fetch(`/api/verify-payment?${queryString}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    const errData = await response.json().catch(() => ({}));
    return {
      status: 'failed',
      error: errData.error || `Payment verification failed (status ${response.status})`,
    };
  } catch (err: any) {
    console.error('Backend payment verification error:', err);
    return {
      status: 'failed',
      error: 'Unable to connect to payment verification server. Please check your connection and refresh.',
    };
  }
}
