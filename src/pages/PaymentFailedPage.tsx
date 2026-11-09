import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { AlertCircle, RefreshCw, ArrowLeft, Mail, HelpCircle, ShieldCheck } from 'lucide-react';

export const PaymentFailedPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const errorMessage = searchParams.get('error') || searchParams.get('message') || '';
  const paymentId = searchParams.get('payment_id') || '';

  const handleRetry = async () => {
    await initiateCheckout('USD');
  };

  return (
    <div className="page-wrapper" style={{ textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: '600px' }}>
        <div
          className="card"
          style={{
            padding: '48px 36px',
            border: '1px solid var(--line-strong)',
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
              background: 'linear-gradient(90deg, #ef4444 0%, #f59e0b 100%)',
            }}
          />

          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'var(--images)',
            }}
          >
            <AlertCircle size={36} />
          </div>

          <div
            style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--images)',
              background: 'rgba(225, 29, 72, 0.08)',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '14px',
            }}
          >
            Payment Not Completed
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.3rem)', marginBottom: '12px', lineHeight: 1.2 }}>
            Your transaction was not completed
          </h1>

          <p style={{ fontSize: '0.96rem', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            {errorMessage ? (
              <span><strong>Reason:</strong> {errorMessage}</span>
            ) : (
              'Your card or account was not charged. The payment may have been declined by your bank, expired, or interrupted during checkout.'
            )}
          </p>

          {paymentId && (
            <div style={{ fontSize: '0.82rem', color: 'var(--subtle)', marginBottom: '24px' }}>
              Reference ID: <code className="mono">{paymentId}</code>
            </div>
          )}

          {/* Common reasons checklist */}
          <div
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-md)',
              padding: '18px 20px',
              textAlign: 'left',
              marginBottom: '28px',
              fontSize: '0.88rem',
              color: 'var(--muted)',
            }}
          >
            <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '8px' }}>
              Common reasons this happens:
            </strong>
            <ul style={{ paddingLeft: '18px', margin: 0, lineHeight: 1.6 }}>
              <li>The issuing bank declined international or online transactions.</li>
              <li>Incorrect card details, CVV, or 3D Secure / OTP timed out.</li>
              <li>Temporary network glitch or closed checkout tab.</li>
            </ul>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <button
              type="button"
              onClick={handleRetry}
              className="btn btn-primary btn-lg"
              style={{ gap: '8px' }}
            >
              <RefreshCw size={17} />
              <span>Try Again ($9 Early Key)</span>
            </button>

            <Link to="/pricing" className="btn btn-secondary btn-lg">
              View Pricing
            </Link>

            <Link to="/" className="btn btn-ghost btn-lg" style={{ gap: '6px' }}>
              <ArrowLeft size={16} />
              <span>Back Home</span>
            </Link>
          </div>

          <div style={{ paddingTop: '20px', borderTop: '1px solid var(--line)', fontSize: '0.84rem', color: 'var(--subtle)' }}>
            Need help with your payment? Email us at{' '}
            <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--documents)', fontWeight: 600 }}>
              {APP_CONFIG.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

