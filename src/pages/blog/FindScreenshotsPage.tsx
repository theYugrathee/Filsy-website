import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Find Screenshots on Windows — All Locations Explained', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const FindScreenshotsPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Find Screenshots on Windows — All Locations Explained — Filsy', description: 'Where do screenshots go on Windows 10 and 11? All screenshot save locations for PrtScr, Snipping Tool, Win+Shift+S, Xbox Game Bar, and how to search them by content.', canonical: 'https://filsy.space/blog/find-screenshots-windows', ogType: 'article', keywords: ['find screenshots windows', 'where are screenshots saved windows 11', 'windows screenshot location', 'find screenshot by content windows'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">HOW-TO</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Find Screenshots on Windows — All Save Locations</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>Windows saves screenshots in different places depending on how you took them. Here's every location, plus how to search screenshots by the text inside them.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>PrtScr (Print Screen) — Clipboard Only</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Pressing <strong>PrtScr</strong> alone copies the screenshot to your clipboard — it's <em>not</em> saved to disk. You must paste it (Ctrl+V) into Paint, Word, or another app and save it manually. If you just pressed PrtScr and lost it, it's gone.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Win + PrtScr — Screenshots Folder</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Pressing <strong>Windows + PrtScr</strong> saves the screenshot automatically and the screen briefly dims to confirm. Location:</p>
        <div className="card" style={{ padding: '12px 18px', marginBottom: '24px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem' }}>
          <code>C:\Users\YourName\Pictures\Screenshots</code>
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Win + Shift + S (Snipping Tool) — Clipboard + Optional Save</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>This opens the Snipping Tool overlay. The capture goes to your clipboard and a notification appears. Click the notification to open Snipping Tool where you can annotate and save. If you save, it goes to your <strong>Pictures folder</strong> by default (or wherever you specify). If you dismiss the notification, it stays clipboard-only.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Xbox Game Bar (Win + G) — Captures Folder</h2>
        <div className="card" style={{ padding: '12px 18px', marginBottom: '24px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem' }}>
          <code>C:\Users\YourName\Videos\Captures</code>
        </div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>OneDrive — Screenshots Folder</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>If OneDrive is set to automatically save screenshots (a prompt appears the first time you use Win+PrtScr with OneDrive enabled), they go to <code>OneDrive\Pictures\Screenshots</code> instead.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Searching Screenshots by Their Content</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Once you've accumulated hundreds of screenshots, finding a specific one by filename (<code>Screenshot (1247).png</code>) is impractical. <a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> uses on-device OCR to index the text inside your screenshots, so you can search for the actual words visible in the image.</p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>Search "NullPointerException" to find that error screenshot. Search "quarterly report" to find the chart you photographed from a presentation. All processed locally — your screenshots never leave your machine.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Find Screenshots by What's Written in Them</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy's OCR index finds text inside your screenshots and images. Completely offline — no cloud upload required.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
