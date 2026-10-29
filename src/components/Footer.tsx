import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-nav-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/app-icon.png" alt="Filsy" style={{ width: '24px', height: '24px', borderRadius: '6px', objectFit: 'contain' }} />
            <div>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{APP_CONFIG.productName}</span>
              <span style={{ color: 'var(--muted)', marginLeft: '8px' }}>— Made for Windows users with too many files.</span>
            </div>
          </div>

          <div className="footer-links-list">
            <a href="/#features">Features</a>
            <a href="/#compare">vs Explorer</a>
            <Link to="/pricing">Pricing ({APP_CONFIG.pricing.displayPrice})</Link>
            <Link to="/find-key">Find My Key</Link>
            <Link to="/manage-license">Manage License</Link>
            <Link to="/changelog">Changelog</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href={`mailto:${APP_CONFIG.supportEmail}`}>{APP_CONFIG.supportEmail}</a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--subtle)' }}>
          <div>© {APP_CONFIG.releaseDate} {APP_CONFIG.productName}. 100% offline local indexing.</div>
          <div>Payments secured by Dodo Payments · Instant digital license delivery</div>
        </div>
      </div>
    </footer>
  );
};
