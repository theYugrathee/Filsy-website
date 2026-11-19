import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const schema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How to Search Inside Files on Windows (5 Methods)',
  description: 'Five ways to search text inside files on Windows — from built-in tools to dedicated apps.',
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01', dateModified: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const SearchInsideFilesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: 'How to Search Inside Files on Windows (5 Methods) — Filsy',
      description: 'Five proven ways to search text inside files on Windows 10 and 11: Windows Search, PowerShell, Everything, AnyTXT, and Filsy. Step-by-step with screenshots.',
      canonical: 'https://filsy.space/blog/how-to-search-inside-files-windows',
      ogType: 'article',
      keywords: ['search inside files windows', 'search file contents windows 10', 'full text search windows', 'find text in files windows'],
      schema,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">HOW-TO</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Search Inside Files on Windows (5 Methods)
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Searching by filename is easy. Searching the <em>contents</em> of thousands of documents, spreadsheets, and images is a different problem. Here are five methods, from built-in Windows tools to dedicated apps, with honest trade-offs for each.
          </p>
        </header>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 1: Windows Search with Content Indexing</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          Windows has built-in content indexing, but it's turned off for most folders by default. To enable it:
        </p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '12px' }}>
          <li>Open <strong>Indexing Options</strong> from the Start menu</li>
          <li>Click <strong>Modify</strong> → add your Documents, Downloads, and Desktop folders</li>
          <li>Click <strong>Advanced</strong> → check <strong>Index Properties and File Contents</strong></li>
          <li>Wait for indexing to complete (can take hours for a full drive)</li>
          <li>In File Explorer, type your query and check <strong>Search</strong> ribbon → <strong>Content</strong></li>
        </ol>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
          <strong>Pros:</strong> Built-in, free. <strong>Cons:</strong> Slow index rebuild, misses many file types (no PDF content without iFilter), queries can still take 10–30 seconds, and results aren't always reliable.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 2: PowerShell's Select-String</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          For plain text files (.txt, .log, .csv, .py, .js, .md), PowerShell's <code>Select-String</code> is fast and powerful:
        </p>
        <div className="card" style={{ padding: '16px 20px', marginBottom: '16px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', overflowX: 'auto' }}>
          <code>Get-ChildItem -Path C:\Users\You\Documents -Recurse -Include *.txt,*.md | Select-String "invoice"</code>
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
          <strong>Pros:</strong> No install needed, great for developers who work in Terminal. <strong>Cons:</strong> Only works on plain text. Won't read inside PDFs, .docx, .xlsx, or images.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 3: Everything + Everything Toolbar</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          <strong>Everything</strong> by voidtools is lightning-fast for filename search, but it doesn't search file <em>contents</em> by default. You can enable content search in Settings → Indexes → Index file content, but it's slow and limited compared to dedicated tools.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
          Best use: filename search. Not the right tool if you need to search inside documents.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 4: AnyTXT Searcher (Free)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          AnyTXT is a free, dedicated full-text search app for Windows. It builds its own index and searches PDFs, Word, Excel, plain text, and many other formats quickly. It's genuinely good for the price (free).
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
          <strong>Weakness:</strong> No image/OCR search, no file preview, basic UI, no duplicate detection.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 5: Filsy — Content Search + OCR + Preview</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          <a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> builds a local index that covers filenames, document content (PDFs, .docx, .xlsx), and uses Windows' on-device OCR engine to index text inside screenshots and scanned images. Queries return in ~0.02 seconds.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>
          Unlike AnyTXT or Windows Search, Filsy also lets you preview the file without opening it — click a result and see the document or image immediately. All processing happens on your machine; nothing is sent to a server.
        </p>

        <section className="card" style={{ padding: '28px', marginBottom: '40px', overflowX: 'auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Comparison: Content Search Methods</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--line)' }}>
                {['Method', 'PDFs', 'Word/Excel', 'Images (OCR)', 'Speed', 'Cost'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Windows Search', 'With iFilter', 'Yes (slow)', '✗', 'Slow', 'Free'],
                ['PowerShell', '✗', '✗', '✗', 'Fast', 'Free'],
                ['Everything', '✗', '✗', '✗', 'Very fast', 'Free'],
                ['AnyTXT', '✓', '✓', '✗', 'Fast', 'Free'],
                ['Filsy', '✓', '✓', '✓ (on-device)', 'Very fast', '$9 lifetime'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid var(--line)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '10px 12px', color: i === 0 ? 'var(--ink)' : 'var(--muted)', fontWeight: i === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Which Method Should You Use?</h2>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '32px' }}>
          <li><strong>Quick one-off text file search:</strong> PowerShell Select-String</li>
          <li><strong>Free document search (PDF/Word):</strong> AnyTXT</li>
          <li><strong>Search inside screenshots or scanned docs:</strong> Filsy</li>
          <li><strong>Full workflow — search, preview, and find duplicates:</strong> Filsy</li>
        </ul>

        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Search Inside Every File — Privately</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Filsy indexes PDFs, Word, Excel, and screenshots on-device. No cloud. Find any file or phrase in milliseconds.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
