import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Every Windows File Search Keyboard Shortcut You Need to Know",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const FileSearchShortcutsPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "Essential Windows File Search Keyboard Shortcuts You Should Know",
      description: "Learn the most useful keyboard shortcuts for searching files, navigating File Explorer, and filtering results fast on Windows 10 and 11.",
      canonical: 'https://filsy.space/blog/windows-file-search-keyboard-shortcuts',
      ogType: 'article',
      keywords: ["windows file search keyboard shortcuts","file explorer search shortcut","windows search keys","keyboard shortcuts windows 11"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TUTORIAL</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            Every Windows File Search Keyboard Shortcut You Need to Know
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Navigating File Explorer with the mouse slows you down. Learning these key shortcuts will help you jump directly to search boxes, filter results, and open folders in seconds.
          </p>
        </header>

        <h2>Core Windows Search Shortcuts</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--line)' }}>
                <th style={{ textAlign: 'left', padding: '8px 12px' }}>Shortcut</th>
                <th style={{ textAlign: 'left', padding: '8px 12px' }}>Function</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Win + S', 'Opens the primary Windows Search bar from anywhere'],
                ['Ctrl + F (in Explorer)', 'Focuses the search box in the current folder'],
                ['F3 (in Explorer)', 'Alternative shortcut to focus the search box immediately'],
                ['Alt + D or Ctrl + L', 'Focuses the address/path bar in File Explorer'],
                ['Ctrl + E', 'Focuses the File Explorer search box directly'],
                ['Shift + F10', 'Opens the classic full context menu for selected item'],
                ['Alt + Enter', 'Opens file Properties dialog for selected item'],
                ['Alt + P', 'Toggles the File Explorer preview pane on/off'],
              ].map(([key, desc], i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--line)', background: i % 2 === 0 ? 'var(--surface)' : 'transparent' }}>
                  <td style={{ padding: '8px 12px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{key}</td>
                  <td style={{ padding: '8px 12px' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Search Syntax Filter Shortcuts</h2>
        <p>When typing in the File Explorer search box, you can combine keywords with built-in filter operators:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><code>type:pdf</code> — filters results strictly to PDF files</li>
          <li><code>size:&gt;500MB</code> — finds files larger than 500 megabytes</li>
          <li><code>date:this month</code> — finds files modified during the current month</li>
          <li><code>name:~="invoice"</code> — finds files whose filename contains "invoice"</li>
        </ul>

        <h2>Instant Search with Filsy</h2>
        <p>If remembering complex Explorer query parameters feels tedious, dedicated tools like <strong>Filsy</strong> let you search naturally across filenames and content (PDFs, DOCX, XLSX, and images) with instant sub-second results and built-in file previews.</p>

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
