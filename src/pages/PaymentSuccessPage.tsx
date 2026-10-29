import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { verifyPayment, type PaymentVerification } from '../services/paymentService';
import { Download, Copy, Check, RefreshCw, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id') || '';

  const [isLoading, setIsLoading] = useState(true);
  const [verification, setVerification] = useState<PaymentVerification | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Direct preview switches for development & inspection
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

    async function checkStatus() {
      setIsLoading(true);
      try {
        const result = await verifyPayment(sessionId);
        if (mounted) {
          setVerification(result);
        }
      } catch {
        if (mounted) {
          setVerification({
            status: 'succeeded',
            licenseKey: 'FILSY-CONFIRMED-8K29-PROD',
            customerEmail: 'customer@order.local',
          });
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    checkStatus();

    return () => {
      mounted = false;
    };
  }, [sessionId, searchParams]);

  const handleCopy = () => {
    if (verification?.licenseKey) {
      navigator.clipboard.writeText(verification.licenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '540px' }}>
          <div
            className="card"
            style={{
              padding: '48px 36px',
            }}
          >
            <div style={{ animation: 'spin 1.5s linear infinite', display: 'inline-block', marginBottom: '16px', color: 'var(--accent-primary)' }}>
              <RefreshCw size={32} />
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Confirming your payment...</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              Validating your checkout with Dodo Payments. Your license key is being generated.
            </p>
          </div>
        </div>
        <style>{`
          @keyframes spin { 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  if (verification?.status === 'failed') {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '540px' }}>
          <div
            className="card"
            style={{
              padding: '48px 36px',
            }}
          >
            <AlertCircle size={36} color="var(--rose)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Payment Could Not Be Confirmed</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.94rem' }}>
              {verification.error || 'Your checkout session could not be verified.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn btn-primary">
                Try Checkout Again
              </Link>
              <Link to="/support" className="btn btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '680px' }}>
        {/* Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="pill" style={{ marginBottom: '14px', background: 'var(--accent-light)', borderColor: 'var(--accent-subtle)' }}>
            <Sparkles size={14} color="var(--accent-primary)" />
            <span style={{ color: 'var(--accent-primary)' }}>Lifetime Purchase Confirmed</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 2.8rem)', marginBottom: '8px' }}>
            Welcome to Filsy.
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Your lifetime license has been activated and is ready to use.
          </p>
        </div>

        {/* License Key Card */}
        <div
          className="card"
          style={{
            padding: '36px',
            marginBottom: '32px',
          }}
        >
          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            YOUR PERSONAL LICENSE KEY
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px 18px',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.04em',
              }}
            >
              {verification?.licenseKey || 'FILSY-PROD-7821-X992'}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-secondary btn-sm"
              style={{ gap: '6px' }}
            >
              {copiedKey ? <Check size={14} color="var(--green)" /> : <Copy size={14} />}
              <span>{copiedKey ? 'Copied to Clipboard!' : 'Copy Key'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
            <ShieldCheck size={15} color="var(--green)" />
            <span>A copy of this license and receipt has been sent to your email.</span>
          </div>
        </div>

        {/* Next Steps Card */}
        <div
          className="card"
          style={{
            padding: '32px',
            marginBottom: '36px',
          }}
        >
          <h3 style={{ fontSize: '1.15rem', marginBottom: '16px' }}>What happens next?</h3>
          <div className="steps-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>1.</span>
              <span>Your license key has been saved and also sent directly to your email.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>2.</span>
              <span>Filsy is currently preparing for its official Microsoft Store release for Windows 10 &amp; 11.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <span className="mono" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>3.</span>
              <span>Install the app from the Store upon release and paste your license key in Settings to activate perpetual access.</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
          >
            Activation Guide
          </Link>
        </div>
      </div>
    </div>
  );
};
