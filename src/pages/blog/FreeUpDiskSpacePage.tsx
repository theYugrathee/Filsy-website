import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Free Up Disk Space on Windows 11', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const FreeUpDiskSpacePage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Free Up Disk Space on Windows 11 (Complete Guide) — Filsy', description: 'Reclaim gigabytes on Windows 11: Disk Cleanup, Storage Sense, WinDirStat, clearing temp files, finding duplicates, and more. Step-by-step guide.', canonical: 'https://filsy.space/blog/free-up-disk-space-windows-11', ogType: 'article', keywords: ['free up disk space windows 11', 'clear disk space windows', 'windows 11 storage full', 'delete temp files windows 11'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">DISK CLEANUP</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Free Up Disk Space on Windows 11 (Complete Guide)</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Running low on disk space? Here's a systematic approach to reclaiming space on Windows 11, from quick wins to deeper cleanup strategies.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 1: Use Storage Sense (Automatic Cleanup)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Go to <strong>Settings → System → Storage → Storage Sense</strong>. Turn it on. Configure it to run weekly and automatically clear the Recycle Bin after 30 days. This is the lowest-effort ongoing cleanup you can set up.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 2: Run Disk Cleanup</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Press <strong>Win + S</strong>, search for <strong>Disk Cleanup</strong>, select your C: drive. Click <strong>Clean up system files</strong> for more options. You can typically safely remove:</p>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Windows Update Cleanup (often 2–8 GB)</li>
          <li>Temporary Internet Files</li>
          <li>Recycle Bin contents</li>
          <li>Thumbnails cache</li>
          <li>Previous Windows installations (if you recently upgraded)</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 3: Clear the Temp Folder Manually</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Press <strong>Win + R</strong>, type <code>%temp%</code>, press Enter. Select all files (Ctrl+A) and delete. Some files will be in use and can't be deleted — skip them. Then repeat with <code>temp</code> (without the %) for system temp files.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 4: Find What's Taking the Most Space</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '16px' }}>Before blindly deleting, use a disk space visualizer to see what's actually using your storage:</p>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li><strong>WinDirStat</strong> — classic treemap, free, great for a visual overview</li>
          <li><strong>TreeSize Free</strong> — faster, cleaner UI, shows folder sizes at a glance</li>
          <li><strong>WizTree</strong> — fastest of all; reads NTFS MFT directly for near-instant results</li>
          <li><strong>Filsy</strong> — includes a storage analyzer with size-based file search and duplicate detection</li>
        </ul>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 5: Delete Duplicate Files</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Duplicates are often the biggest hidden space waster. Photos, downloaded PDFs, and backup copies accumulate over years. Tools like <strong>dupeGuru</strong> (free) or Filsy's built-in SHA-256 duplicate scanner identify exact byte-for-byte copies safely.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Step 6: Uninstall Unused Apps</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>Go to <strong>Settings → Apps → Installed apps</strong> and sort by size. Uninstall games, old software, and apps you haven't used in months. Don't forget to also check <strong>Optional Features</strong> for Windows components you don't need.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Find &amp; Remove Duplicate Files Easily</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy's SHA-256 duplicate scanner finds exact copies across all your folders. Combined with instant file search, it's the fastest way to clean up your drive.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
