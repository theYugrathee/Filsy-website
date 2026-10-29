import React from 'react';
import { APP_CONFIG } from '../config';
import { ShieldCheck, HardDrive, Lock, EyeOff, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-reading">
        <div style={{ marginBottom: '40px' }}>
          <span className="section-tag" style={{ marginBottom: '12px' }}>Zero-Knowledge Philosophy</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '14px' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Effective: October 2026 · Built local-first for Windows
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
            This Privacy Policy explains how Filsy handles your data. We believe in complete transparency and building software that respects the absolute boundary between your local computer and the public internet.
          </p>

          {/* Primary Commitment Box */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-subtle)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '8px' }}>
              <ShieldCheck size={22} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Our Core Privacy Guarantee</h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Filsy never uploads your files, filenames, folder directories, search queries, or OCR extracted text to any remote server or cloud service. All indexing, duplicate detection, and search operations execute 100% locally on your computer.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              1. Local File Processing on Your Windows PC
            </h3>
            <p>
              When you launch Filsy on your Windows PC:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>The local file catalog is stored strictly on your local disk in a local SQLite file inside your user profile.</li>
              <li>File identity hashes for duplicate detection (SHA-256) are computed exclusively on your local CPU.</li>
              <li>OCR text extraction for images uses the on-device Windows.Media.Ocr library with zero network calls.</li>
              <li>Document text extraction (PDFs, Office files) runs entirely in local userland memory.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              2. Payment &amp; License Processing
            </h3>
            <p>
              When you purchase a Filsy lifetime license (Pay What You Want), your payment is processed directly by <b>Dodo Payments</b>. We never receive or store your credit card, debit card, or UPI credentials. Dodo Payments provides us with:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Your customer email address (used for license delivery and receipt).</li>
              <li>The issued license key and transaction status.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              3. License Activation Handshake
            </h3>
            <p>
              When you paste your license key into Filsy, a single cryptographic activation handshake is made with our licensing backend to confirm validity and register an anonymous device identifier (e.g. "DESKTOP-WIN11"). No personal files or directory paths are transmitted during activation.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              4. Contacting Support
            </h3>
            <p>
              If you have any questions about this policy or wish to exercise data rights regarding your license purchase, email us directly at{' '}
              <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{APP_CONFIG.supportEmail}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
