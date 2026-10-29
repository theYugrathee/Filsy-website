import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>From purchase to powered-up in five minutes</h2>
          <p>Zero cloud uploads. Zero background daemons. Just fast, deterministic local indexing.</p>
        </div>

        <div className="steps-clean-list" style={{ marginTop: '32px' }}>
          <div className="step-clean-item">
            <div className="step-badge-num">1</div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Buy once — own it forever ({APP_CONFIG.pricing.displayPrice})</h4>
              <p style={{ fontSize: '0.9rem' }}>Checkout is handled securely by Dodo Payments. No subscription, ever.</p>
            </div>
          </div>

          <div className="step-clean-item">
            <div className="step-badge-num">2</div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Get your license key</h4>
              <p style={{ fontSize: '0.9rem' }}>Your key (<span className="mono">FILSY-XXXX-XXXX-XXXX</span>) is delivered with your receipt, and you can always retrieve it with your email.</p>
            </div>
          </div>

          <div className="step-clean-item">
            <div className="step-badge-num">3</div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Install from Microsoft Store (Coming Soon)</h4>
              <p style={{ fontSize: '0.9rem' }}>Filsy will be available on the Microsoft Store for secure one-click installation and seamless background updates.</p>
            </div>
          </div>

          <div className="step-clean-item">
            <div className="step-badge-num">4</div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Activate on your PC</h4>
              <p style={{ fontSize: '0.9rem' }}>Paste your key once. One license covers 1 active PC, and you can move it to a new PC anytime in 1 click.</p>
            </div>
          </div>

          <div className="step-clean-item">
            <div className="step-badge-num">5</div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Enjoy instant 0.02s queries</h4>
              <p style={{ fontSize: '0.9rem' }}>Filsy indexes your files and quietly keeps your index current. All future updates are free.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn btn-primary">Get License Key — {APP_CONFIG.pricing.displayPrice}</Link>
          <Link to="/find-key" className="btn btn-secondary">Find My License Key</Link>
        </div>
      </div>
    </div>
  );
};
