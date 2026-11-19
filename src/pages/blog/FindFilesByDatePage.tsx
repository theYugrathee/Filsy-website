import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Find Files by Date on Windows', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const FindFilesByDatePage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Find Files by Date on Windows (Created, Modified, Accessed) — Filsy', description: 'Find files by creation date, modification date, or last accessed date on Windows 10 and 11. Covers File Explorer, PowerShell, and Filsy date filters.', canonical: 'https://filsy.space/blog/find-files-by-date-windows', ogType: 'article', keywords: ['find files by date windows', 'search files by date modified windows', 'find files created on specific date windows', 'windows search date filter'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">HOW-TO</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Find Files by Date on Windows (Created, Modified, Accessed)</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Windows stores three timestamps for every file: when it was created, when it was last modified, and when it was last opened. Here's how to search using each one.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 1: File Explorer Date Filter</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>File Explorer has built-in date filtering, though it's hidden:</p>
        <ol style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '24px' }}>
          <li>Open File Explorer, navigate to the folder or This PC</li>
          <li>Click in the search box — a <strong>Search</strong> ribbon tab appears</li>
          <li>Click <strong>Date Modified</strong> → choose a range (Today, This Week, This Month, etc.)</li>
          <li>Or type directly: <code>datemodified:&gt;2024-01-01</code> in the search box</li>
        </ol>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>File Explorer Date Search Syntax</h2>
        <div className="card" style={{ padding: '20px', marginBottom: '24px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '8px' }}><code>datemodified:today</code> — modified today</div>
          <div style={{ marginBottom: '8px' }}><code>datemodified:this week</code> — modified this week</div>
          <div style={{ marginBottom: '8px' }}><code>datemodified:&gt;2024-06-01</code> — modified after June 1, 2024</div>
          <div style={{ marginBottom: '8px' }}><code>datecreated:2024-01-01..2024-12-31</code> — created in 2024</div>
          <div><code>dateaccessed:last week</code> — accessed last week</div>
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 2: PowerShell for Precise Date Ranges</h2>
        <div className="card" style={{ padding: '14px 18px', marginBottom: '8px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', overflowX: 'auto' }}>
          <code>{'# Files modified between two specific dates'}<br/>
          {'Get-ChildItem C:\Users\YourName -Recurse | Where-Object {'}<br/>
          {'  $_.LastWriteTime -ge "2024-03-01" -and $_.LastWriteTime -le "2024-03-31"'}<br/>
          {'} | Select-Object FullName, LastWriteTime'}</code>
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px', marginTop: '12px' }}>Replace <code>LastWriteTime</code> with <code>CreationTime</code> or <code>LastAccessTime</code> as needed.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 3: Filsy Date Filters</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}><a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> supports natural date filter syntax in its search bar:</p>
        <ul style={{ color: 'var(--muted)', lineHeight: 1.9, paddingLeft: '20px', marginBottom: '32px' }}>
          <li><code>modified:today</code> — files modified today</li>
          <li><code>modified:last-week</code> — files modified in the past 7 days</li>
          <li><code>modified:2024-03</code> — files modified in March 2024</li>
          <li>Combine with content: <code>invoice modified:last-month</code> — invoices modified recently</li>
        </ul>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Search Files by Date, Type &amp; Content</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy combines date filters with content search — find that document from last month that mentioned "contract" in milliseconds.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
