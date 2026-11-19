import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "The Complete Guide to Windows File Search via CMD & PowerShell",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const FileSearchCommandLinePage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "Windows File Search via Command Line: CMD & PowerShell Guide",
      description: "Master command-line file search on Windows. Learn how to use dir, where, findstr, and PowerShell Get-ChildItem to locate files and search contents.",
      canonical: 'https://filsy.space/blog/windows-file-search-command-line',
      ogType: 'article',
      keywords: ["windows file search command line","powershell search files","cmd find file by name","findstr search text inside files"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">GUIDE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            The Complete Guide to Windows File Search via CMD & PowerShell
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            When File Explorer is frozen, or you are managing a headless Windows machine, the command line is your fastest ally. Here are the essential commands for locating files and searching contents.
          </p>
        </header>

        <h2>1. The WHERE Command (Executable & Path Lookup)</h2>
        <p>The <code>where</code> command is the Windows equivalent of Linux <code>which</code>. It searches your PATH environment variable and current directory:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`where python
where /r C:\Projects *.json`}</pre>
        <p>The <code>/r</code> switch searches recursively starting from the specified root directory.</p>

        <h2>2. The DIR Command (Recursive Wildcard Search)</h2>
        <p>The classic Command Prompt <code>dir</code> command is surprisingly capable:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`dir C:\Data\*invoice*.pdf /s /b`}</pre>
        <ul style={{ lineHeight: 2 }}>
          <li><code>/s</code> — searches the current directory and all subdirectories</li>
          <li><code>/b</code> — displays bare filenames and full paths without headers or summary size</li>
        </ul>

        <h2>3. FINDSTR (Search Text Inside Plain Text Files)</h2>
        <p>To search for text patterns inside files across a directory tree:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`findstr /s /i /m "DATABASE_URL" *.env *.config`}</pre>
        <ul style={{ lineHeight: 2 }}>
          <li><code>/s</code> — searches recursively</li>
          <li><code>/i</code> — case-insensitive</li>
          <li><code>/m</code> — prints only the filenames of matching files</li>
        </ul>

        <h2>4. PowerShell Get-ChildItem (Modern & Scalable)</h2>
        <p>PowerShell offers deep object-oriented querying capabilities:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`# Find files larger than 100MB modified in the last 7 days
Get-ChildItem -Path "C:\" -Recurse -File -ErrorAction SilentlyContinue |
  Where-Object { $_.Length -gt 100MB -and $_.LastWriteTime -gt (Get-Date).AddDays(-7) } |
  Select-Object FullName, @{N="SizeMB";E={[math]::round($_.Length/1MB,2)}}`}</pre>

        <h2>When to Switch from CLI to Desktop Search</h2>
        <p>Command line searches are powerful for scripts and server administration, but they lack instant indexing and cannot preview formatted documents like PDFs, Word files, or images. For daily desktop productivity, <strong>Filsy</strong> pairs sub-second index queries with interactive file previews and on-device OCR.</p>

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
