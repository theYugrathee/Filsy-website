import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Find Large Files Taking Up Space on Windows', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const FindLargeFilesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Find Large Files Taking Up Space on Windows — Filsy', description: 'Find the largest files on your Windows PC using TreeSize, WizTree, PowerShell, and Filsy\'s size filter. Free up space quickly.', canonical: 'https://filsy.space/blog/find-large-files-windows', ogType: 'article', keywords: ['find large files windows', 'find biggest files windows 10', 'what is taking up space windows', 'find files by size windows 11'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">DISK CLEANUP</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Find Large Files Taking Up Space on Windows</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Before you can reclaim disk space, you need to know what's actually using it. Here are the fastest methods to find your largest files on Windows 10 and 11.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 1: Windows Settings Storage Breakdown</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Go to <strong>Settings → System → Storage</strong>. Windows shows a breakdown by category: Apps, Temporary Files, Documents, Pictures, etc. Click any category to drill down. Good for a quick overview, but doesn't show individual large files.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 2: TreeSize Free (Recommended — Free)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>TreeSize Free is the most practical tool for finding large folders quickly. Download from the Microsoft Store or jam-software.com. Run it as administrator for full C:\ access. It shows folder sizes in a tree view — you can immediately see which folders are consuming the most space and drill down to find the culprit files.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 3: WizTree (Fastest — Free)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>WizTree reads the NTFS Master File Table directly (like Everything does) and can analyze an entire 1TB drive in under 10 seconds. It shows a treemap visualisation and a list sorted by file size. The fastest disk space analyzer available. Free for personal use.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 4: PowerShell — Find Files Over a Size Threshold</h2>
        <div className="card" style={{ padding: '14px 18px', marginBottom: '16px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', overflowX: 'auto' }}>
          <code>Get-ChildItem C:\ -Recurse -ErrorAction SilentlyContinue | Where-Object {'{ $_.Length -gt 500MB }'} | Sort-Object Length -Descending | Select-Object FullName, @{'{ Name="Size(GB)"; Expression={ [math]::Round($_.Length / 1GB, 2) }'}</code>
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Replace <code>500MB</code> with your threshold. This lists every file over that size, sorted by size, with the path.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 5: Filsy — Size Filter + Preview</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>In Filsy, you can filter results by file size using the <code>size:&gt;500mb</code> syntax. This integrates with content search — for example, find all PDFs over 100 MB: search <code>type:pdf size:&gt;100mb</code>. Click any result to preview it and decide if it's worth keeping.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Search Files by Size, Type &amp; Content</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy combines size filters with content search and file preview in one private, offline tool.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
