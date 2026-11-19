import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Find and Delete Duplicate Photos on Windows', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const FindDuplicatePhotosPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Find and Delete Duplicate Photos on Windows — Filsy', description: 'Find and remove duplicate photos on Windows using dupeGuru, Duplicate Photo Cleaner, digiKam, and Filsy. Free and paid options compared.', canonical: 'https://filsy.space/blog/find-duplicate-photos-windows', ogType: 'article', keywords: ['find duplicate photos windows', 'remove duplicate images windows', 'duplicate photo finder windows 10', 'delete duplicate pictures windows'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">PHOTOS · CLEANUP</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Find and Delete Duplicate Photos on Windows</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Phone backups, multiple imports, and "just in case" copies mean most people have hundreds or thousands of duplicate photos spread across their PC. Here's how to find and safely remove them.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Exact Duplicates vs. Similar Photos</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>There are two types of "duplicates" for photos, and they require different tools: <strong>Exact duplicates</strong> are byte-for-byte identical copies (same file, different location or name) — detected by hash comparison. <strong>Similar photos</strong> are visually similar but not identical — slightly different exposures, crops, or compression — detected by perceptual hashing or AI.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Option 1: dupeGuru — Free, Both Exact &amp; Similar</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>dupeGuru's <strong>Picture Mode</strong> uses fuzzy matching to find visually similar photos, not just exact copies. It's the best free option for photo collections. Download from dupeguru.voltaicideas.net. Run in Picture mode, set your threshold (lower = stricter), and review each group before deleting.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Option 2: Duplicate Photo Cleaner (Paid)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Duplicate Photo Cleaner (~$15) has a cleaner interface than dupeGuru with a built-in side-by-side comparison view. Good for users who prefer a more guided experience. Supports RAW formats that dupeGuru may miss.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Option 3: digiKam (Free, Open Source)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>digiKam is a full photo management suite with excellent duplicate detection (Tools → Find Duplicate Items). It uses both exact and fuzzy matching and integrates deduplication with photo organization. Best choice if you also want to manage photo metadata, tags, and albums.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Option 4: Filsy — Exact Duplicates Across All Files</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}><a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> uses SHA-256 hashing to find exact byte-for-byte duplicates — including photos. It's most useful when you need to find duplicates across all file types (photos, PDFs, documents, downloads) in a single scan. For photo-specific fuzzy matching (similar but not identical photos), dupeGuru's picture mode is better.</p>
        <div className="card" style={{ padding: '20px', marginBottom: '32px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead><tr style={{ borderBottom: '2px solid var(--line)' }}>{['Tool', 'Exact Dupes', 'Similar Photos', 'All File Types', 'Price'].map(h => <th key={h} style={{ padding: '8px 12px', textAlign: 'left' }}>{h}</th>)}</tr></thead>
            <tbody>{[['dupeGuru (Picture)', '✓', '✓', 'Photos only', 'Free'], ['Duplicate Photo Cleaner', '✓', '✓', 'Photos only', '~$15'], ['digiKam', '✓', '✓', 'Photos only', 'Free'], ['Filsy', '✓ SHA-256', '✗', 'All files', '$9']].map(r => (
              <tr key={r[0]} style={{ borderBottom: '1px solid var(--line)' }}>{r.map((c, i) => <td key={i} style={{ padding: '8px 12px', color: i === 0 ? 'var(--ink)' : 'var(--muted)', fontWeight: i === 0 ? 600 : 400 }}>{c}</td>)}</tr>
            ))}</tbody>
          </table>
        </div>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Find Duplicates Across All Your Files</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy's SHA-256 scanner finds exact duplicates across photos, documents, and downloads in one scan — no cloud, no account needed.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
