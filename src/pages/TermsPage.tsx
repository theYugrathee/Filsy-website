import React from 'react';
import { APP_CONFIG } from '../config';

export const TermsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-reading">
        <div style={{ marginBottom: '40px' }}>
          <span className="section-tag" style={{ marginBottom: '12px' }}>Legal Agreement</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '14px' }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Effective: October 2026 · Perpetual License Terms
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            fontSize: '0.96rem',
            lineHeight: 1.75,
          }}
        >
          <p>
            By downloading, installing, or using Filsy, or by purchasing a license key, you agree to these Terms of Service. If you do not agree, do not download or use the software.
          </p>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              1. Perpetual Lifetime License Grant
            </h3>
            <p>
              Upon payment of the one-time fee of {APP_CONFIG.pricing.displayPrice}, we grant you a non-exclusive, perpetual, worldwide license to install and execute Filsy on <b>one (1) active personal computer</b> at a time. You may deactivate the software on one device and activate it on another computer freely using the in-app settings or by contacting customer support.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              2. Updates and Support
            </h3>
            <p>
              Your license includes all future minor and major version updates released for Filsy on Windows at no additional cost. Email support is provided for bug reports and licensing queries.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              3. Payments &amp; License Key Delivery
            </h3>
            <p>
              Filsy license keys are offered under a Pay What You Want model. Digital license keys are generated and transmitted automatically to your designated email address upon transaction processing via Dodo Payments. All contributions and license purchases are final.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              4. Disclaimer of Warranties
            </h3>
            <p>
              Filsy is provided "as is", without warranty of any kind. Filsy reads filesystem metadata and provides non-destructive search and organization tools. You remain responsible for regular backups of your personal and commercial data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
