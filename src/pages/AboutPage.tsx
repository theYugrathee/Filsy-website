import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const AboutPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-reading">
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '14px' }}>
            Finding a file shouldn’t require a scavenger hunt.
          </h1>
          <p className="lead">
            Why we built an independent, private file manager for Windows.
          </p>
        </div>

        <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.98rem', lineHeight: 1.75 }}>
          <p>
            Filsy started with a simple frustration: finding a file on Windows shouldn't require remembering which deeply nested directory you saved it in five months ago.
          </p>

          <p>
            Over years of using a PC, everyone accumulates thousands of screenshots, downloaded PDFs, phone imports, video clips, and work files. Standard folders were designed for physical filing cabinets decades ago, but they don't match how human memory works.
          </p>

          <p style={{ color: 'var(--ink)', fontWeight: 600 }}>
            When you need something, you rarely remember the exact filesystem path. You remember:
          </p>

          <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--muted)' }}>
            <li>“That video from my phone in August”</li>
            <li>“The screenshot with the Wi-Fi password”</li>
            <li>“The invoice I downloaded from Slack last Tuesday”</li>
          </ul>

          <p>
            Filsy was built to solve that problem quietly and reliably. It indexes your local files, allows you to search based on what you actually remember, extracts text from screenshots using local Windows OCR, detects duplicate files by content hash, and lets you clean up wasted storage safely.
          </p>

          <p>
            Filsy is an independent product. It's not venture-funded, it doesn't upload your files to any cloud server, and it doesn't force a monthly subscription for software running on your own PC.
          </p>

          <div style={{ display: 'flex', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--line)', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn-primary">Get License Key — {APP_CONFIG.pricing.displayPrice}</Link>
            <Link to="/#pricing" className="btn btn-secondary">Retrieve License Key</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
