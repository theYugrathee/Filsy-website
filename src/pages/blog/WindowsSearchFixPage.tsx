import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Windows Search Not Working? Here\'s How to Fix It (2025)', description: 'Fix Windows Search not working with these step-by-step solutions. Covers rebuilding the index, restarting services, registry fixes, and permanent alternatives.', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };

export const WindowsSearchFixPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'Windows Search Not Working? Here\'s How to Fix It (2025) — Filsy', description: 'Windows Search not working or returning no results? Step-by-step fixes: rebuild the index, restart the Windows Search service, registry edits, and alternatives.', canonical: 'https://filsy.space/blog/windows-search-not-working-fix', ogType: 'article', keywords: ['windows search not working', 'windows search not finding files', 'fix windows search indexer', 'windows 11 search broken'], schema }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TROUBLESHOOTING</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>Windows Search Not Working? Here's How to Fix It (2025)</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Windows Search stops returning results, shows a blank screen, or finds nothing despite files being right there. Here are the most effective fixes, in order of ease.</p>
        </header>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fix 1: Restart the Windows Search Service</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>The Windows Search service (WSearch) sometimes crashes silently. To restart it:</p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Press <strong>Win + R</strong>, type <code>services.msc</code>, press Enter</li>
          <li>Scroll to <strong>Windows Search</strong></li>
          <li>Right-click → <strong>Restart</strong></li>
          <li>Wait 30 seconds and test your search</li>
        </ol>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fix 2: Run the Search and Indexing Troubleshooter</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Windows includes a built-in troubleshooter that catches common issues:</p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Open <strong>Settings</strong> → <strong>System</strong> → <strong>Troubleshoot</strong></li>
          <li>Click <strong>Other troubleshooters</strong></li>
          <li>Find <strong>Search and Indexing</strong> and click <strong>Run</strong></li>
          <li>Follow the prompts — this often catches stuck services or corrupted catalog files</li>
        </ol>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fix 3: Rebuild the Search Index</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>A corrupted index is a common cause of broken search. Rebuilding it fixes missing results, but takes time (hours for large drives):</p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Open <strong>Control Panel</strong> → <strong>Indexing Options</strong></li>
          <li>Click <strong>Advanced</strong></li>
          <li>Under Troubleshooting, click <strong>Rebuild</strong></li>
          <li>Click OK and let it run — your PC may feel slower during indexing</li>
        </ol>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fix 4: Check That Your Folders Are Indexed</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>If search works but misses specific folders, those folders may not be in the index. Open <strong>Indexing Options</strong> → <strong>Modify</strong> and make sure your Documents, Desktop, and Downloads folders are listed and checked.</p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Fix 5: Registry Fix for Search Bar Blank (Windows 11)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>If the Start menu search bar shows a blank box and nothing types, a registry value may be corrupt:</p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Press <strong>Win + R</strong>, type <code>regedit</code></li>
          <li>Navigate to: <code>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Search</code></li>
          <li>Find <strong>BingSearchEnabled</strong> — set to <code>0</code> if Bing web results are interfering</li>
          <li>Restart Explorer (Ctrl+Shift+Esc → Find Windows Explorer → Restart)</li>
        </ol>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>If Nothing Works — Use an Alternative</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Windows Search is fragile. If you've rebuilt the index twice and it's still broken, you may be better served by a dedicated file search tool that maintains its own index independently of Windows:</p>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>Everything</strong> (voidtools) — instant filename search, free, completely bypasses Windows Search</li>
          <li><strong>AnyTXT</strong> — free full-text content search</li>
          <li><strong>Filsy</strong> — combines filename + content + OCR search with file preview, $9 lifetime license</li>
        </ul>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>All three build their own indexes and are completely unaffected by Windows Search being broken.</p>

        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Stop Fighting Windows Search</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy maintains its own private index — always fast, always accurate, completely independent of the Windows Search service.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
