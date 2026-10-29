import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const LicenseHelpPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>How to Activate &amp; Manage Your License</h2>
          <p>Everything you need to know about activating, moving, and restoring your Filsy license.</p>
        </div>

        <div style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '16px' }}>Activating in 5 Steps</h3>
          <div className="steps-clean-list">
            {[
              { num: '1', title: 'Install Filsy', desc: 'Install Filsy on your Windows PC (via Microsoft Store).' },
              { num: '2', title: 'Open Settings', desc: 'Launch Filsy and click the Settings icon or press Ctrl + ,.' },
              { num: '3', title: 'Enter License Key', desc: 'Paste your key in the format: FILSY-XXXX-XXXX-XXXX.' },
              { num: '4', title: 'Click Activate', desc: 'Filsy binds your perpetual license to your PC.' },
              { num: '5', title: 'Permanent Access', desc: 'Your license is now active indefinitely offline.' },
            ].map((s) => (
              <div key={s.num} className="step-clean-item" style={{ padding: '12px 16px' }}>
                <div className="step-badge-num">{s.num}</div>
                <div>
                  <strong style={{ fontSize: '0.92rem' }}>{s.title}</strong>
                  <p style={{ fontSize: '0.86rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Moving Filsy to a new PC</h3>
          <p style={{ fontSize: '0.92rem', marginBottom: '14px' }}>
            A single license covers 1 active PC at a time. When upgrading computers:
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '16px' }}>
            <li>Open Filsy → Settings → License, click <strong>“Deactivate this PC”</strong>.</li>
            <li>On your new PC, install Filsy and paste your existing license key.</li>
            <li>You can also deactivate remotely anytime on our <Link to="/manage-license" style={{ color: 'var(--ink)', fontWeight: 600 }}>Manage License page</Link>.</li>
          </ol>
          <Link to="/manage-license" className="btn btn-secondary btn-sm">Manage Active Devices</Link>
        </div>
      </div>
    </div>
  );
};
