import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Windows Search Privacy: What Gets Sent to Microsoft and How to Stop It",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const WindowsSearchPrivacyPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "Windows Search Privacy: Does Microsoft Track Your Local Files?",
      description: "Understand what Windows Search shares with Microsoft servers and learn how to disable Bing integration, cloud telemetry, and search tracking.",
      canonical: 'https://filsy.space/blog/windows-search-privacy',
      ogType: 'article',
      keywords: ["windows search privacy","does windows search track files","disable bing in windows search","windows search telemetry privacy"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">GUIDE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            Windows Search Privacy: What Gets Sent to Microsoft and How to Stop It
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            When you type a search term into the Windows 11 Start menu, does Microsoft see your private filenames? Here is an objective breakdown of Windows search telemetry and how to protect your privacy.
          </p>
        </header>

        <h2>What Windows Search Does by Default</h2>
        <p>Windows Search combines two distinct search mechanisms:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><strong>Local Indexing:</strong> Catalogs filenames and local contents into an internal database (<code>Windows.edb</code>) stored strictly on your PC. Local file contents are not uploaded to Microsoft cloud servers.</li>
          <li><strong>Bing Cloud Integration:</strong> Whenever you type in the Start menu or Windows search bar, Windows simultaneously sends your query string to Bing to fetch web suggestions, trending news, and advertisements.</li>
        </ul>

        <h2>The Privacy Risk: Unintended Query Leakage</h2>
        <p>Even though your files stay on your hard drive, if you type sensitive customer names, project codes, or personal file names into the Start menu, those exact words may be sent over HTTPS to Microsoft's Bing search endpoints as auto-complete queries.</p>

        <h2>How to Disable Bing Search Telemetry in Windows</h2>
        <p>You can turn off cloud search queries using the Windows Registry:</p>
        <ol style={{ lineHeight: 2 }}>
          <li>Press <kbd>Win + R</kbd>, type <code>regedit</code>, and hit Enter.</li>
          <li>Navigate to: <code>HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Explorer</code>.</li>
          <li>Create a new DWORD (32-bit) named <code>DisableSearchBoxSuggestions</code> and set its value to <code>1</code>.</li>
          <li>Restart Windows Explorer from Task Manager.</li>
        </ol>

        <h2>True 100% Offline Search with Filsy</h2>
        <p>If you want complete peace of mind, use dedicated offline tools like <strong>Filsy</strong>. Filsy runs 100% locally on your computer with zero telemetry, zero analytics, no cloud APIs, and no network connections. Your document queries and file contents never leave your machine.</p>

        <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Experience Instant File Search on Windows</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>Filsy indexes your documents, spreadsheets, PDFs, and images locally. Sub-second results, 100% offline, zero cloud tracking.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Filsy — Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">See Pricing</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
