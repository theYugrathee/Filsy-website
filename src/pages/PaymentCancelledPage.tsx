import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';

export const PaymentCancelledPage: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: '560px' }}>
        <div
          className="card"
          style={{
            padding: '48px 36px',
          }}
        >
          <span className="section-tag" style={{ marginBottom: '16px' }}>Checkout Cancelled</span>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '14px' }}>
            Payment cancelled.
          </h1>

          <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            No worries! Your card or account was not charged. Whenever you are ready, you can get your lifetime license key with Pay What You Want pricing.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-secondary" style={{ gap: '8px' }}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <Link to="/pricing" className="btn btn-primary" style={{ gap: '8px' }}>
              <Sparkles size={16} />
              <span>Get License Key</span>
            </Link>
          </div>

          <div style={{ marginTop: '28px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Encountered an issue during checkout? <Link to="/support" style={{ color: 'var(--accent-primary)' }}>Contact developer support</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
