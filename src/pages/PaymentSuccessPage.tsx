import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { verifyPayment, type PaymentVerification } from '../services/paymentService';
import { Copy, Check, RefreshCw, AlertCircle, Sparkles, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Extract all possible payment identifiers passed by Dodo redirect
  const paymentId = searchParams.get('payment_id') || '';
  const sessionId = searchParams.get('session_id') || searchParams.get('checkout_session_id') || searchParams.get('checkout_id') || '';
  const emailParam = searchParams.get('email') || searchParams.get('customer_email') || '';

  const [isLoading, setIsLoading] = useState(true);
  const [verification, setVerification] = useState<PaymentVerification | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const checkStatus = useCallback(async () => {
    // Development / visual preview overrides
    const previewStatus = searchParams.get('status') || searchParams.get('state');
    if (previewStatus === 'failed') {
      setIsLoading(false);
      setVerification({
        status: 'failed',
        error: searchParams.get('error') || 'Your payment was declined or interrupted by your banking provider.',
      });
      return;
    }

    if (previewStatus === 'loading') {
      setIsLoading(true);
      return;
    }

    setIsLoading(true);

    try {
      const result = await verifyPayment({
        paymentId: paymentId || undefined,
        sessionId: sessionId || undefined,
        email: emailParam || undefined,
      });

      setVerification(result);
    } catch (err: any) {
      setVerification({
        status: 'failed',
        error: err?.message || 'Could not verify payment status with server.',
      });
    } finally {
      setIsLoading(false);
    }
  }, [paymentId, sessionId, emailParam, searchParams]);

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  const handleCopy = () => {
    if (verification?.licenseKey) {
      navigator.clipboard.writeText(verification.licenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  // 1. Loading State
  if (isLoading) {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '540px' }}>
          <div className="card" style={{ padding: '48px 36px' }}>
            <div style={{ animation: 'spin 1.5s linear infinite', display: 'inline-block', marginBottom: '16px', color: 'var(--documents)' }}>
              <RefreshCw size={32} />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Verifying payment confirmation...</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              Checking your transaction status directly with Dodo Payments to retrieve your official license key.
            </p>
          </div>
        </div>
        <style>{`
          @keyframes spin { 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  // 2. Processing State (Payment succeeded, key provisioning in progress)
  if (verification?.status === 'processing') {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '560px' }}>
          <div className="card" style={{ padding: '44px 32px' }}>
            <div style={{ animation: 'spin 2s linear infinite', display: 'inline-block', marginBottom: '16px', color: 'var(--documents)' }}>
              <RefreshCw size={32} />
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Payment Confirmed!</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.94rem', marginBottom: '24px', lineHeight: 1.6 }}>
              {verification.error || 'Your payment has succeeded. Dodo Payments is finalizing your digital license key. Please wait a moment.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => checkStatus()} className="btn btn-primary" style={{ gap: '6px' }}>
                <RefreshCw size={15} />
                <span>Refresh License Status</span>
              </button>
              <Link to="/find-key" className="btn btn-secondary" style={{ gap: '6px' }}>
                <Mail size={15} />
                <span>Find Key via Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Payment Failed / Not Confirmed State
  if (verification?.status === 'failed' || !verification?.licenseKey) {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '560px' }}>
          <div className="card" style={{ padding: '48px 36px' }}>
            <AlertCircle size={36} color="var(--images)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Payment Verification Required</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {verification?.error || 'No confirmed transaction found for this session. If your account was charged, use our License Recovery tool to instantly look up your key by email.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/find-key" className="btn btn-primary" style={{ gap: '6px' }}>
                <Mail size={16} />
                <span>Find License Key by Email</span>
              </Link>
              <Link to="/pricing" className="btn btn-secondary">
                View Pricing
              </Link>
              <Link to="/support" className="btn btn-ghost">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Success State — REAL verified user key
  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '720px' }}>
        {/* Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--music)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
            <Sparkles size={16} />
            <span>PAYMENT VERIFIED &amp; CONFIRMED</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', lineHeight: 1.15, marginBottom: '10px' }}>
            Thank you for purchasing Filsy!
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Your lifetime license key has been generated and confirmed with Dodo Payments.
          </p>
        </div>

        {/* Real License Key Card */}
        <div
          className="card"
          style={{
            padding: '36px',
            marginBottom: '32px',
            border: '2px solid var(--documents)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--documents) 0%, var(--videos) 50%, var(--images) 100%)',
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              YOUR OFFICIAL LIFETIME LICENSE KEY
            </div>
            {verification.customerEmail && (
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                Registered to: <strong style={{ color: 'var(--ink)' }}>{verification.customerEmail}</strong>
              </div>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px 20px',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '0.04em',
                wordBreak: 'break-all',
              }}
            >
              {verification.licenseKey}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-primary btn-sm"
              style={{ gap: '6px', flexShrink: 0 }}
            >
              {copiedKey ? (
                <>
                  <Check size={15} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy Key</span>
                </>
              )}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--subtle)', fontSize: '0.84rem' }}>
            <ShieldCheck size={16} color="var(--music)" />
            <span>This key is valid forever for all future v1.x and v2.x updates. Keep it safe.</span>
          </div>
        </div>

        {/* Steps to activate in app */}
        <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '18px', color: 'var(--ink)' }}>
            Next steps: How to activate your key
          </h3>
          <div className="steps-clean-list">
            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">1</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Copy your key above</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Save or copy your license key. A confirmation receipt has also been dispatched to your email.
                </p>
              </div>
            </div>

            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">2</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Get Filsy on Microsoft Store</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Filsy is currently launching on the Microsoft Store for Windows 10 &amp; 11.
                </p>
              </div>
            </div>

            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">3</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Paste &amp; Activate</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Open Filsy Settings (or press <span className="mono">Ctrl + ,</span>), go to License, paste your key and click Activate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-primary btn-lg"
            style={{ gap: '8px' }}
          >
            <Copy size={18} />
            <span>{copiedKey ? 'Copied to Clipboard!' : 'Copy License Key'}</span>
          </button>

          <Link
            to="/license"
            className="btn btn-secondary btn-lg"
            style={{ gap: '8px' }}
          >
            <span>Detailed Guide</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
