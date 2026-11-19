import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How to Search and Filter Files by Extension on Windows",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const FindFilesByExtensionPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "How to Find Files by Extension on Windows (All Methods)",
      description: "Learn how to filter and find files by extension (.pdf, .docx, .png, .zip) using File Explorer, Command Prompt, PowerShell, and Everything.",
      canonical: 'https://filsy.space/blog/find-files-by-extension-windows',
      ogType: 'article',
      keywords: ["find files by extension windows","search by file type windows 11","filter extension powershell","windows search ext"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TUTORIAL</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Search and Filter Files by Extension on Windows
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Need to find all spreadsheets across a drive or locate every .log file eating your storage? Here is the complete guide to searching by extension on Windows.
          </p>
        </header>

        <h2>Method 1: File Explorer Search Syntax</h2>
        <p>Open File Explorer and navigate to the root directory or drive you wish to search. In the search box, use the <code>ext:</code> or <code>*.</code> syntax:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><code>ext:.pdf</code> or <code>*.pdf</code> — matches all PDF files</li>
          <li><code>ext:.docx OR ext:.xlsx</code> — finds all Word documents and Excel sheets</li>
          <li><code>type:=Document</code> — uses Windows pre-defined document categories</li>
        </ul>

        <h2>Method 2: Command Prompt (Dir Command)</h2>
        <p>For a fast command-line listing across subdirectories:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`dir C:\Projects\*.png /s /b > png_files.txt`}</pre>
        <p>The <code>/s</code> flag searches subdirectories, and <code>/b</code> prints bare file paths suitable for piping into other tools.</p>

        <h2>Method 3: PowerShell (Get-ChildItem)</h2>
        <p>PowerShell offers powerful sorting and size filtering by extension:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`Get-ChildItem -Path "D:\Work" -Filter "*.csv" -Recurse |
  Sort-Object Length -Descending |
  Select-Object Name, @{Name="MB";Expression={[math]::round($_.Length/1MB,2)}}, FullName`}</pre>

        <h2>Method 4: Instant Type Filtering with Filsy</h2>
        <p>In Filsy, you can filter by category pills (Documents, Spreadsheets, Images, Archives) or search extensions directly. Filsy scans your entire file system in sub-second time and gives you in-app file previews so you can inspect matching items without opening third-party readers.</p>

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
