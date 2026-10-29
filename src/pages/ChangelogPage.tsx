import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

interface Release {
  version: string;
  date: string;
  tagline: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
}

const RELEASES: Release[] = [
  {
    version: '1.0.0',
    date: 'October 2026',
    tagline: 'Initial Public Release for Windows 10 & 11',
    added: [
      'Fast local file indexer supporting internal and external Windows NTFS/exFAT drives.',
      'Natural search query parser supporting type:, size:, and modified: filters.',
      'Local OCR engine for images and screenshots using native Windows vision APIs.',
      'Document text extraction for PDF, DOCX, TXT, and Markdown files.',
      'Unified Categories view: Images, Documents, Downloads, Videos, Music, and Applications.',
      'Exact duplicate detection using SHA-256 binary hashing with safe comparison review.',
      'Storage cleanup module for identifying forgotten files >100 MB and stale downloads.',
      'Native Windows Explorer integration (Open in Explorer, Show in Folder, Shift+C path copy).',
      'Self-service license key activation and device binding architecture.',
    ],
    improved: [
      'Sub-second query response time even with over 300,000 indexed files.',
      'Low memory footprint: Background indexing utilizes throttled I/O to prevent system lag.',
      'High-resolution thumbnail caching directly utilizing Windows Shell interfaces.',
    ],
    fixed: [
      'Initial release stability validation across Windows 10 (1809+) and Windows 11.',
    ],
  },
];

export const ChangelogPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>Changelog</h2>
          <p>All notable changes, fixes, and improvements to Filsy for Windows.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {RELEASES.map((release) => (
            <div key={release.version} className="card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>v{release.version}</span>
                  <span className="pill pill-early">Latest</span>
                </div>
                <span style={{ fontSize: '0.82rem', color: 'var(--subtle)' }}>{release.date}</span>
              </div>

              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '18px' }}>
                {release.tagline}
              </p>

              {release.added && (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--documents)', marginBottom: '8px' }}>Added</div>
                  <ul style={{ listStyle: 'disc', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    {release.added.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {release.improved && (
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--videos)', marginBottom: '8px' }}>Improved</div>
                  <ul style={{ listStyle: 'disc', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    {release.improved.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn btn-primary">Get License Key — {APP_CONFIG.pricing.displayPrice}</Link>
          <Link to="/#pricing" className="btn btn-secondary">Retrieve License Key</Link>
        </div>
      </div>
    </div>
  );
};
