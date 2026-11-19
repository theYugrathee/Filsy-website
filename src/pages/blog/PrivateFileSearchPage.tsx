import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Private File Search for Windows — No Cloud, No Telemetry', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const PrivateFileSearchPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'Private File Search for Windows — No Cloud, No Telemetry — Filsy', description: 'The best private, offline file search tools for Windows that never upload your files or search queries to the cloud. Comparison of privacy-first options.', canonical: 'https://filsy.space/blog/private-file-search-windows', ogType: 'article', keywords: ['private file search windows', 'offline file search windows', 'file search no cloud windows', 'windows search privacy alternative'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">PRIVACY</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>Private File Search for Windows — No Cloud, No Telemetry</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Windows Search sends your queries to Bing by default. Cortana has had access to file contents. If you work with sensitive documents and want file search that stays strictly on your machine, here are your options.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>What Windows Search Actually Sends</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>By default, Windows 11 Start menu search sends every query to Bing for web results — including queries that look like filenames or document terms. The indexer itself (SearchIndexer.exe) processes files locally, but the query pipeline often includes cloud components.</p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>You can disable Bing integration (Settings → Privacy &amp; Security → Search Permissions → off), but Microsoft's privacy practices are complex and can change with updates.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fully Offline Alternatives</h2>
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {[
            { name: 'Everything (voidtools)', detail: 'Reads the NTFS journal directly, no cloud, no telemetry, completely free. Filename-only search. The gold standard for private fast filename search.', privacy: '✓ 100% local' },
            { name: 'AnyTXT Searcher', detail: 'Full-text content search across documents. Locally indexed. Free. No OCR. No cloud component.', privacy: '✓ 100% local' },
            { name: 'Agent Ransack', detail: 'Grep-style content search without indexing. Entirely local. Free for personal use.', privacy: '✓ 100% local' },
            { name: 'Filsy', detail: 'Filename + document content + OCR search. All processing on-device using Windows\' built-in OCR engine. Zero telemetry, no account, no network calls. $9 lifetime.', privacy: '✓ 100% local' },
          ].map(t => (
            <div key={t.name} className="card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, background: 'rgba(16,185,129,0.1)', color: 'var(--music)', fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', whiteSpace: 'nowrap', marginTop: '2px' }}>{t.privacy}</div>
              <div>
                <strong style={{ fontSize: '1rem', display: 'block', marginBottom: '6px' }}>{t.name}</strong>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Tools to Avoid for Sensitive Files</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '32px' }}>
          <li><strong>Google Drive desktop app</strong> — syncs and indexes files to Google's servers</li>
          <li><strong>OneDrive with "Files On-Demand"</strong> — Microsoft has access to synced files</li>
          <li><strong>Cortana</strong> — has had persistent access to file content and search queries</li>
          <li><strong>Cloud-based OCR tools</strong> — Google Lens, Adobe Scan, etc. send your documents to their servers</li>
        </ul>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>File Search That Stays on Your Machine</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy never makes network requests during search. Your filenames, document contents, and queries never leave your PC.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
