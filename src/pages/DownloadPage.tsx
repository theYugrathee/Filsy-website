import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { Sparkles, KeyRound, HardDrive, Shield } from 'lucide-react';

export const DownloadPage: React.FC = () => {
  const handleBuy = async () => {
    await initiateCheckout('USD');
  };

  return (
    <div className="page-wrapper">
      <div className="wrap">
        <div className="section-head center">
          <span className="section-label">MICROSOFT STORE RELEASE</span>
          <h2>Coming Soon to Microsoft Store</h2>
          <p>Filsy will be available directly on the Microsoft Store for Windows 10 &amp; Windows 11.</p>
        </div>

        {/* Store Coming Soon Box */}
        <div
          className="card"
          style={{
            maxWidth: '720px',
            margin: '0 auto 36px',
            padding: '40px 32px',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(124, 92, 252, 0.1)', color: 'var(--documents)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px' }}>
            <HardDrive size={16} />
            <span>Official Store Publication in Progress</span>
          </div>

          <h3 style={{ fontSize: '1.45rem', marginBottom: '12px' }}>Get Your License Key in Advance</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            The app will be distributed securely via the Microsoft Store. You can get your lifetime license key right now with Pay What You Want pricing, and activate immediately upon launch.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleBuy}
              className="btn btn-primary btn-lg"
              style={{ gap: '8px' }}
            >
              <Sparkles size={18} />
              <span>Get License Key (Pay What You Want)</span>
            </button>

            <Link
              to="/#pricing"
              className="btn btn-secondary btn-lg"
              style={{ gap: '8px' }}
            >
              <KeyRound size={18} />
              <span>Retrieve Existing Key</span>
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid var(--line)',
              fontSize: '0.84rem',
              color: 'var(--subtle)',
              flexWrap: 'wrap',
            }}
          >
            <div><strong>Platform:</strong> Microsoft Store</div>
            <div><strong>OS:</strong> Windows 10 &amp; 11 (64-bit)</div>
            <div><strong>Pricing:</strong> Pay What You Want</div>
          </div>
        </div>

        {/* 3 Steps Guide */}
        <div className="card" style={{ maxWidth: '720px', margin: '0 auto', padding: '28px' }}>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '16px' }}>How it works</h4>
          <div className="steps-clean-list">
            <div className="step-clean-item" style={{ padding: '12px 16px' }}>
              <div className="step-badge-num">1</div>
              <div>
                <strong style={{ fontSize: '0.9rem' }}>Get your key today</strong>
                <p style={{ fontSize: '0.84rem' }}>Pay what you want and receive your lifetime license key immediately by email.</p>
              </div>
            </div>
            <div className="step-clean-item" style={{ padding: '12px 16px' }}>
              <div className="step-badge-num">2</div>
              <div>
                <strong style={{ fontSize: '0.9rem' }}>Install from Microsoft Store</strong>
                <p style={{ fontSize: '0.84rem' }}>Once live, install Filsy safely from the Microsoft Store with one click.</p>
              </div>
            </div>
            <div className="step-clean-item" style={{ padding: '12px 16px' }}>
              <div className="step-badge-num">3</div>
              <div>
                <strong style={{ fontSize: '0.9rem' }}>Paste key &amp; search</strong>
                <p style={{ fontSize: '0.84rem' }}>Paste your key in Filsy Settings to unlock full features permanently offline.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px', fontSize: '0.86rem', color: 'var(--muted)' }}>
          Need to find an existing key? Use our <Link to="/find-key" style={{ color: 'var(--ink)', fontWeight: 600 }}>Find License Key</Link> tool or contact <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>Support</a>.
        </div>
      </div>
    </div>
  );
};
