import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Windows Search Operators: Advanced Search Syntax Guide', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const WindowsSearchOperatorsPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'Windows Search Operators: Advanced Search Syntax Guide — Filsy', description: 'Complete guide to Windows File Explorer search operators: date filters, size filters, file type, Boolean operators, and natural language query syntax.', canonical: 'https://filsy.space/blog/windows-search-operators', ogType: 'article', keywords: ['windows search operators', 'windows file explorer search syntax', 'advanced windows search', 'windows search filter commands'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">REFERENCE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>Windows Search Operators: Advanced Search Syntax Guide</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Windows File Explorer's search box accepts a powerful syntax that most users never discover. Here's the complete reference — with examples.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>File Property Operators</h2>
        <section className="card" style={{ padding: '20px', marginBottom: '24px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead><tr style={{ borderBottom: '2px solid var(--line)' }}>{['Operator', 'Example', 'What it does'].map(h => <th key={h} style={{ padding: '8px 12px', textAlign: 'left' }}>{h}</th>)}</tr></thead>
            <tbody>{[
              ['name:', 'name:report', 'Search filenames only'],
              ['ext: / type:', 'ext:pdf', 'Filter by file extension'],
              ['size:', 'size:>10MB', 'Filter by file size (KB, MB, GB)'],
              ['datemodified:', 'datemodified:this week', 'Filter by last modified date'],
              ['datecreated:', 'datecreated:2024-01-01', 'Filter by creation date'],
              ['dateaccessed:', 'dateaccessed:today', 'Filter by last accessed date'],
              ['content:', 'content:invoice', 'Search inside file contents'],
              ['author:', 'author:"John Smith"', 'Search by document author metadata'],
              ['title:', 'title:budget', 'Search by document title metadata'],
              ['folder:', 'folder:Downloads', 'Restrict to a specific folder'],
            ].map(r => (
              <tr key={r[0]} style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '8px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 600 }}>{r[0]}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--muted)' }}>{r[1]}</td>
                <td style={{ padding: '8px 12px', color: 'var(--muted)', fontSize: '0.88rem' }}>{r[2]}</td>
              </tr>
            ))}</tbody>
          </table>
        </section>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Boolean Operators</h2>
        <section className="card" style={{ padding: '20px', marginBottom: '24px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '10px' }}><code>report AND budget</code> <span style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}> — files containing both words (must be uppercase)</span></div>
          <div style={{ marginBottom: '10px' }}><code>report OR budget</code> <span style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}> — files containing either word</span></div>
          <div style={{ marginBottom: '10px' }}><code>report NOT draft</code> <span style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}> — files with "report" but not "draft"</span></div>
          <div><code>"quarterly report"</code> <span style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}> — exact phrase match</span></div>
        </section>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Practical Examples</h2>
        <section className="card" style={{ padding: '20px', marginBottom: '24px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '10px' }}><code>ext:pdf datemodified:this month</code></div>
          <div style={{ marginBottom: '10px' }}><code>size:{'>'}100MB ext:mp4</code></div>
          <div style={{ marginBottom: '10px' }}><code>name:invoice ext:xlsx datecreated:{'>'}2024-01-01</code></div>
          <div><code>content:"quarterly results" ext:docx</code></div>
        </section>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Limitations of Windows Search Syntax</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Content search requires the Windows Search index to have indexed those folders</li>
          <li>PDF content requires the Adobe iFilter to be installed</li>
          <li>Queries can still be slow (5–30 seconds) even with proper indexing</li>
          <li>OCR search inside images is not supported at all</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Alternative: Natural Language in Filsy</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}><a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> supports similar filter syntax (<code>ext:pdf</code>, <code>size:&gt;100mb</code>, <code>modified:last-week</code>) but adds content search and OCR with no indexer configuration needed — it just works out of the box.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Powerful Filters. Instant Results.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy supports size, date, type, and content filters — all returning results in milliseconds without iFilter setup.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
