import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { ArrowLeft, Sparkles, RefreshCw } from 'lucide-react';

export const PaymentCancelledPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const handleRetry = async () => {
    await initiateCheckout('USD');
  };

  return (
    <div className="page-wrapper" style={{ textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: '560px' }}>
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
              background: 'linear-gradient(90deg, #f59e0b 0%, #3b82f6 100%)',
            }}
          />

          <span className="pill" style={{ marginBottom: '16px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--archives)' }}>
            Checkout Cancelled
          </span>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '14px', lineHeight: 1.2 }}>
            Payment cancelled.
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.6 }}>
            No worries! Your card or account was not charged. Whenever you are ready, you can lock in your lifetime license key for only $9 before price increases at launch.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleRetry}
              className="btn btn-primary"
              style={{ gap: '8px' }}
            >
              <Sparkles size={16} />
              <span>Buy Filsy ($9)</span>
            </button>
            <Link to="/pricing" className="btn btn-secondary">
              View Pricing
            </Link>
            <Link to="/" className="btn btn-ghost" style={{ gap: '6px' }}>
              <ArrowLeft size={16} />
              <span>Back Home</span>
            </Link>
          </div>

          <div style={{ marginTop: '28px', borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
            <p style={{ fontSize: '0.86rem', color: 'var(--subtle)' }}>
              Encountered an issue during checkout? <Link to="/support" style={{ color: 'var(--documents)', fontWeight: 600 }}>Contact support</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
