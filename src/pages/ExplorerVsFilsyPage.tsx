import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { ExplorerComparison } from '../components/ExplorerComparison';

export const ExplorerVsFilsyPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '880px' }}>
        <div className="section-head center">
          <h2>Everything Explorer forgot</h2>
          <p>Same trustworthy folders underneath — a completely different experience on top.</p>
        </div>

        <ExplorerComparison />

        <div className="card" style={{ marginTop: '48px', padding: '32px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Why we didn't replace Windows Explorer</h3>
          <p style={{ fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '14px' }}>
            Windows Explorer is deeply integrated into Windows. It manages your taskbar, file associations, desktop shortcuts, and shell context menus. Trying to replace it usually leads to system instability and broken context menus.
          </p>
          <p style={{ fontSize: '0.94rem', lineHeight: 1.7 }}>
            Instead, Filsy is designed as a companion utility: you open Filsy when you need to search naturally, find an image by OCR text, spot duplicate files, or clean up large forgotten files. When you find what you need, one click brings you straight to the exact folder inside Windows Explorer.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn btn-primary">Get License Key — {APP_CONFIG.pricing.displayPrice}</Link>
          <Link to="/#pricing" className="btn btn-secondary">Retrieve License Key</Link>
        </div>
      </div>
    </div>
  );
};
