import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How to Find and Clean Up Old Files on Windows",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const FindOldFilesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "How to Find Old & Unused Files on Windows (Free Up Space)",
      description: "Identify old, abandoned files on Windows 10 and 11 to safely reclaim hard drive space. Step-by-step instructions using Explorer, PowerShell, and disk tools.",
      canonical: 'https://filsy.space/blog/find-old-files-windows',
      ogType: 'article',
      keywords: ["find old files windows","clean up unused files windows 11","find files older than 1 year","powershell find old files"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">GUIDE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Find and Clean Up Old Files on Windows
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Years of software installs, downloaded archives, and project exports can silently fill your SSD. Here is how to safely identify files you have not touched in months or years.
          </p>
        </header>

        <h2>Method 1: File Explorer Date Search Operators</h2>
        <p>File Explorer supports intuitive relative date queries. In the search box, enter:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><code>datemodified:&lt;01/01/2023</code> — finds all files modified before January 1, 2023</li>
          <li><code>datemodified:along time ago</code> — built-in Windows filter for files modified earlier this year or previous years</li>
          <li><code>datemodified:last year</code> — targets files from the prior calendar year</li>
        </ul>

        <h2>Method 2: PowerShell (Automate Finding Files Older than X Days)</h2>
        <p>PowerShell allows finding large files that have not been modified in over 365 days:</p>
        <pre style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '8px', padding: '16px', overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{`$cutoff = (Get-Date).AddDays(-365)
Get-ChildItem -Path "C:\Users\User\Downloads" -Recurse -File |
  Where-Object { $_.LastWriteTime -lt $cutoff -and $_.Length -gt 50MB } |
  Select-Object FullName, LastWriteTime, @{N="SizeMB";E={[math]::round($_.Length/1MB, 2)}}`}</pre>

        <h2>Method 3: Windows Storage Sense Automatic Cleanup</h2>
        <p>Windows 10 and 11 have an automated cleanup feature built into Settings:</p>
        <ol style={{ lineHeight: 2 }}>
          <li>Go to <strong>Settings → System → Storage → Storage Sense</strong>.</li>
          <li>Enable automatic user content cleanup.</li>
          <li>Configure "Delete files in my Downloads folder if they haven't been opened for more than": choose <strong>30 days</strong> or <strong>60 days</strong>.</li>
        </ol>

        <h2>Safe Deletion Best Practices</h2>
        <p>Never batch-delete files from <code>C:\Windows</code> or <code>C:\ProgramData</code> based solely on age, as core system drivers and licenses may never update their modified timestamps. Focus on your personal Downloads, Videos, and Documents folders.</p>

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
