import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-soft)', paddingTop: '48px', paddingBottom: '32px' }}>
      <div className="wrap" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img
                src="/app-icon.png"
                alt="Filsy App Icon"
                width={28}
                height={28}
                style={{ borderRadius: '6px', objectFit: 'contain' }}
              />
              <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)' }}>
                {APP_CONFIG.productName}
              </span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              High-performance, private, local-first file search, Spacebar quick look previews, on-device OCR, and duplicate cleaning for Windows 10 &amp; 11.
            </p>
            <div style={{ fontSize: '0.82rem', color: 'var(--subtle)' }}>
              Support:{' '}
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                style={{ color: 'var(--documents)', textDecoration: 'underline' }}
              >
                {APP_CONFIG.supportEmail}
              </a>
            </div>
          </div>

          {/* Features Col */}
          <div>
            <h4 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)', fontWeight: 700, marginBottom: '12px' }}>
              Features
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li>
                <Link to="/features" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  All Features Overview
                </Link>
              </li>
              <li>
                <Link to="/features/file-search" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Windows File Search
                </Link>
              </li>
              <li>
                <Link to="/features/file-preview" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Spacebar Quick Look
                </Link>
              </li>
              <li>
                <Link to="/features/ocr-search" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  OCR Screenshot Search
                </Link>
              </li>
              <li>
                <Link to="/features/file-organization" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Duplicate &amp; Storage Cleaner
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Comparisons Col */}
          <div>
            <h4 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)', fontWeight: 700, marginBottom: '12px' }}>
              Resources &amp; Guides
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li>
                <Link to="/explorer-vs-filsy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Explorer vs. Filsy
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/download" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Download for Windows
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/changelog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Release Changelog
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  About Filsy
                </Link>
              </li>
            </ul>
          </div>

          {/* Licensing & Legal Col */}
          <div>
            <h4 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)', fontWeight: 700, marginBottom: '12px' }}>
              Licensing &amp; Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li>
                <Link to="/pricing" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Pricing ({APP_CONFIG.pricing.displayPrice} Lifetime)
                </Link>
              </li>
              <li>
                <Link to="/free-license" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Free Creator License
                </Link>
              </li>
              <li>
                <Link to="/find-key" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Find My License Key
                </Link>
              </li>
              <li>
                <Link to="/license" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  License Guide &amp; Migration
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                  Terms &amp; Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--subtle)' }}>
          <div>
            © {APP_CONFIG.releaseDate} {APP_CONFIG.productName}. 100% offline local indexing. All rights reserved.
          </div>
          <div>
            Payments secured by Dodo Payments · Instant digital key delivery
          </div>
        </div>
      </div>
    </footer>
  );
};
