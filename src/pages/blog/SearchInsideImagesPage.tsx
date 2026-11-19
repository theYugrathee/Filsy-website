import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
const s = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Search Text Inside Images and Screenshots on Windows', author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' }, datePublished: '2025-11-01', publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' } };
export const SearchInsideImagesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{ title: 'How to Search Text Inside Images and Screenshots on Windows — Filsy', description: 'Find text inside images, screenshots, and scanned documents on Windows using OCR. Covers Windows OCR, OneNote, online tools, and Filsy offline OCR search.', canonical: 'https://filsy.space/blog/search-text-inside-images-windows', ogType: 'article', keywords: ['search text inside images windows', 'ocr search windows', 'find text in screenshot windows', 'search screenshots by text windows 11'], schema: s }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">HOW-TO · OCR</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>How to Search Text Inside Images and Screenshots on Windows</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>You remember saving a screenshot of an error message, a photo of a whiteboard, or a scanned receipt — but you can't find it. Here's how to search the text <em>inside</em> your images on Windows.</p>
        </header>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>The Core Problem: Images Are Opaque to Search</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Standard file search tools — including Windows Search and Everything — only see filenames. A screenshot named <code>Screenshot_2024-03-15.png</code> gives no clue about its content. OCR (Optical Character Recognition) reads the pixels and extracts the text, making it searchable.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 1: Windows OCR (PowerShell Script)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Windows 10/11 include a built-in OCR engine accessible via PowerShell with the Windows.Media.Ocr.OcrEngine API. It's fast and accurate for English and many other languages, but setting up the script is technical:</p>
        <div className="card" style={{ padding: '14px 18px', marginBottom: '16px', background: 'var(--bg-band)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', overflowX: 'auto' }}>
          <code>Add-Type -AssemblyName "Windows.Media"<br/>$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()</code>
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>This works but requires writing or finding a complete script, and doesn't integrate with file search.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 2: OneNote (Free with Microsoft Account)</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>Insert images into a OneNote page, right-click → "Copy Text from Picture". OneNote uses OCR and lets you search its notebook for terms found in images. The limitation: you must manually import images and OneNote syncs to the cloud by default.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 3: Google Lens / Online OCR Tools</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>For one-off images, uploading to Google Lens, Google Drive (which auto-OCRs PDFs and images), or tools like OCR.space works well. The obvious downside: your files leave your computer. Not suitable for private or sensitive documents.</p>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '32px 0 12px' }}>Method 4: Filsy — Offline OCR Index for Screenshots</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}><a href="https://filsy.space" style={{ color: 'var(--ink)', fontWeight: 600 }}>Filsy</a> uses Windows' built-in OCR engine to read and index the text inside your screenshots, photos, and scanned images — entirely on your device. No internet connection. No cloud upload. Your images stay on your machine.</p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '12px' }}>Once indexed, searching for "invoice total" or "exception NullPointerException" returns every image containing that text in milliseconds, alongside your regular file and document results.</p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>This is particularly useful for: developers who screenshot error messages, researchers who photograph whiteboards, professionals who scan receipts, and anyone who relies on screenshots as a note-taking method.</p>
        <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--bg-band)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Find Screenshots by Their Content</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>Filsy indexes text inside your screenshots using on-device OCR — no cloud, no account. Search thousands of images in milliseconds.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get from Microsoft Store</a>
            <Link to="/pricing" className="btn btn-secondary">View Pricing — $9</Link>
          </div>
        </div>
      </article>
    </div>
  </div>
);
