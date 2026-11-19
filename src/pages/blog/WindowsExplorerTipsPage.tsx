import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Windows Explorer Tips and Tricks You Probably Don\'t Know', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const WindowsExplorerTipsPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'Windows File Explorer Tips and Tricks You Probably Don\'t Know — Filsy', description: '25 Windows File Explorer tips and shortcuts most users never discover: navigation, search, tabs, keyboard shortcuts, and hidden features.', canonical: 'https://filsy.space/blog/windows-explorer-tips', ogType: 'article', keywords: ['windows file explorer tips', 'windows explorer tricks', 'file explorer hidden features', 'windows explorer keyboard shortcuts'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TIPS &amp; TRICKS</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>Windows File Explorer Tips &amp; Tricks You Probably Don't Know</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>File Explorer is more capable than it looks. Here are 25 features and shortcuts that most Windows users never discover.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Navigation Shortcuts</h2>
        <div className="card" style={{ padding: '20px', marginBottom: '24px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead><tr style={{ borderBottom: '2px solid var(--line)' }}>{['Shortcut', 'What it does'].map(h => <th key={h} style={{ padding: '8px 12px', textAlign: 'left' }}>{h}</th>)}</tr></thead>
            <tbody>{[
              ['Alt + ←', 'Go back (like browser)'],
              ['Alt + →', 'Go forward'],
              ['Alt + ↑', 'Go up one folder level'],
              ['Ctrl + L', 'Focus the address bar — type any path and press Enter'],
              ['Ctrl + E or F3', 'Jump to search box'],
              ['Ctrl + N', 'Open a new Explorer window'],
              ['Ctrl + T', 'Open a new tab (Windows 11)'],
              ['Ctrl + W', 'Close current tab (Windows 11)'],
              ['Ctrl + Shift + N', 'Create a new folder'],
              ['F2', 'Rename selected file/folder'],
              ['F5', 'Refresh the current folder'],
            ].map(r => (
              <tr key={r[0]} style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 600 }}>{r[0]}</td>
                <td style={{ padding: '8px 12px', color: 'var(--muted)', fontSize: '0.88rem' }}>{r[1]}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>File Selection Tricks</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>Ctrl + A</strong> — select all files in the current folder</li>
          <li><strong>Shift + Click</strong> — select a range of files</li>
          <li><strong>Ctrl + Click</strong> — add/remove individual files from selection</li>
          <li><strong>Alt + P</strong> — toggle the Preview Pane</li>
          <li><strong>Right-click + Shift</strong> — reveals extra context menu options (like "Open as administrator", "Copy as path")</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Hidden Features Most Users Miss</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>Type a path in the address bar</strong> — click the breadcrumb, it becomes an editable text box. Type <code>%appdata%</code> or any path and press Enter</li>
          <li><strong>Drag to address bar</strong> — drag a file to the address bar breadcrumb to move it to that folder</li>
          <li><strong>Pin to Quick Access</strong> — right-click any folder → "Pin to Quick access" for instant sidebar access</li>
          <li><strong>Compact view</strong> — View → Compact view reduces row height for more files visible at once</li>
          <li><strong>Group by</strong> — Right-click blank space → Sort by → Type (or Size, Date) to group files automatically</li>
          <li><strong>Show file extensions</strong> — View → Show → File name extensions (crucial for security awareness)</li>
          <li><strong>Show hidden files</strong> — View → Show → Hidden items</li>
          <li><strong>Checkboxes</strong> — View → Show → Item check boxes (easier multi-select without Ctrl)</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Search Tips in Explorer</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Click the search box → a Search tab appears in the ribbon with filter options</li>
          <li>Use <code>*.pdf</code> to find all files of a type in the current folder</li>
          <li>Use <code>datemodified:this week</code> to filter by date</li>
          <li>Use <code>size:&gt;100MB</code> to filter by size</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>When Explorer Search Isn't Enough</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>Explorer's search is functional but slow and can't search inside images. For fast content search across your whole drive — including inside PDFs, Word docs, and screenshots — <a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> picks up where Explorer leaves off.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>When Explorer Falls Short, Filsy Steps In</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Instant file search + content indexing + OCR for screenshots — all offline, all private.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
