import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Search Inside Word Documents on Windows',
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const SearchInsideWordPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: 'How to Search Inside Word Documents on Windows (5 Methods)',
      description: 'Find text inside .docx and .doc files on Windows using File Explorer, Windows Search, Everything + IFilter, and third-party tools. Step-by-step guide.',
      canonical: 'https://filsy.space/blog/search-inside-word-documents-windows',
      ogType: 'article',
      keywords: ['search inside word documents windows', 'find text in docx files', 'windows search word documents', 'search word file contents'],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TUTORIAL</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Search Inside Word Documents on Windows
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            You remember writing something in a Word document months ago — but which file? Windows gives you several ways to search inside .docx and .doc files. Here's what works and what doesn't.
          </p>
        </header>

        <h2>Method 1: Windows File Explorer (built-in)</h2>
        <p>Open File Explorer, navigate to the folder you want to search, and type your query in the search box in the top-right corner.</p>
        <p>By default, Windows only searches filenames. To search inside documents, you need indexing enabled for that folder:</p>
        <ol style={{ lineHeight: 2 }}>
          <li>Open <strong>Settings → Privacy & Security → Searching Windows</strong></li>
          <li>Switch to <strong>Enhanced</strong> mode and add your folders</li>
          <li>Wait for indexing to complete (can take hours for large drives)</li>
          <li>Search in Explorer — results will include document contents</li>
        </ol>
        <p><strong>Limitation:</strong> Only indexed folders are searched. External drives and network paths are excluded by default.</p>

        <h2>Method 2: Windows Search with Indexing Options</h2>
        <p>Go to <strong>Control Panel → Indexing Options → Advanced → File Types</strong>. Find <code>.docx</code> and <code>.doc</code> and make sure "Index Properties and File Contents" is selected. This tells Windows to index the text inside Word files, not just metadata.</p>
        <p>Once re-indexed, searches in the Start menu and File Explorer will return results from inside your Word documents.</p>

        <h2>Method 3: Microsoft Word's Built-in Search</h2>
        <p>If you roughly know which document you need, open it in Word and press <kbd>Ctrl + F</kbd> to search within that file. Word's Find toolbar supports:</p>
        <ul style={{ lineHeight: 2 }}>
          <li>Basic text search</li>
          <li>Match case / whole words only</li>
          <li><strong>Ctrl + H</strong> for Find & Replace</li>
          <li>Advanced Find (<strong>Ctrl + G</strong>) for formatting, special characters</li>
        </ul>
        <p>This only works inside a single open document, not across a folder.</p>

        <h2>Method 4: PowerShell for Quick Folder Scans</h2>
        <p>For a one-time search without configuring indexing, PowerShell can scan Word files if you have Word installed (it can read .docx XML directly):</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`Get-ChildItem -Path "C:\\Docs" -Filter "*.docx" -Recurse |
  Where-Object {
    (Get-Content $_.FullName -Raw) -match "your search term"
  }`}</pre>
        <p><strong>Note:</strong> .docx files are ZIP archives containing XML. This raw approach works for simple text matches but won't handle formatted text, headers, or footers properly.</p>

        <h2>Method 5: Third-Party Content Search Tools</h2>
        <p>If you search document contents regularly, a dedicated tool is much faster than waiting for Windows indexing:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><strong>AnyTXT Searcher</strong> — free, indexes .docx natively, fast full-text search</li>
          <li><strong>DocFetcher</strong> — free, open-source, good for large archives</li>
          <li><strong>Filsy</strong> — indexes .docx along with PDFs, Excel files, and images. Results appear in under a second, and you can preview the matching document without opening Word.</li>
          <li><strong>Agent Ransack</strong> — free for personal use, searches file contents on-the-fly (no indexing needed)</li>
        </ul>

        <h2>Which Method Should You Use?</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--line)' }}>
                <th style={{ textAlign: 'left', padding: '8px 12px' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px 12px' }}>Best Method</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Quick one-time search in a folder', 'Agent Ransack or PowerShell'],
                ['Regular searches across all your files', 'Windows Indexing or Filsy'],
                ['Search inside one open document', "Word's Ctrl + F"],
                ['Searching network drives or external drives', 'Third-party tool (indexing-based)'],
                ['Need to also search PDFs and images', 'Filsy'],
              ].map(([s, m], i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--line)', background: i % 2 === 0 ? 'var(--surface)' : 'transparent' }}>
                  <td style={{ padding: '8px 12px' }}>{s}</td>
                  <td style={{ padding: '8px 12px' }}>{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Search Word, PDF, and Excel files in one place</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>Filsy indexes your .docx, PDF, .xlsx, and image files locally. Sub-second results, 100% offline.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Filsy — Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">See Pricing</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
