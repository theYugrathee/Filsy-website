import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How to Find and Search All PDF Files on Windows",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const FindPdfFilesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "How to Find All PDF Files on Windows (and Search Inside Them)",
      description: "Learn how to locate all PDF files across your PC and search for text inside scanned and digital PDFs using native tools and fast desktop indexers.",
      canonical: 'https://filsy.space/blog/find-pdf-files-windows',
      ogType: 'article',
      keywords: ["find pdf files windows","search inside pdf windows 11","locate all pdfs on computer","find scanned pdf text"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">TUTORIAL</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Find and Search All PDF Files on Windows
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Whether you are hunting down tax forms, contracts, or research whitepapers, here is how to locate all PDF files on your computer and search their internal contents.
          </p>
        </header>

        <h2>Finding All PDF Files by Filename</h2>
        <p>To locate every PDF stored on your computer:</p>
        <ol style={{ lineHeight: 2 }}>
          <li>Open <strong>File Explorer</strong> (<kbd>Win + E</kbd>) and click <strong>This PC</strong>.</li>
          <li>In the search box, type: <code>*.pdf</code> or <code>kind:=document ext:.pdf</code>.</li>
          <li>Press Enter. Windows will scan your connected storage drives for all matching PDF extensions.</li>
        </ol>

        <h2>Searching Inside PDF Text (Digital PDFs)</h2>
        <p>Digital PDFs contain selectable text layers. To search within their contents using native Windows tools:</p>
        <ul style={{ lineHeight: 2 }}>
          <li>Ensure the <strong>Windows PDF IFilter</strong> is active (included by default in Windows 10 and 11).</li>
          <li>Go to <strong>Indexing Options → Advanced → File Types</strong>, scroll to <code>.pdf</code>, and ensure "Index Properties and File Contents" is enabled.</li>
        </ul>

        <h2>The Scanned PDF Problem: Why Many Searches Fail</h2>
        <p>Many PDFs (such as scanned receipts, signed agreements, or paper invoices) are merely images embedded inside a PDF wrapper. Traditional search tools cannot find text inside these files without <strong>Optical Character Recognition (OCR)</strong>.</p>

        <h2>Filsy: The Complete PDF Search & Preview Solution</h2>
        <p>Filsy solves both digital and scanned PDF discovery:</p>
        <ul style={{ lineHeight: 2 }}>
          <li><strong>Instant Full-Text Search:</strong> Scans PDF text layers in under 0.02 seconds.</li>
          <li><strong>On-Device OCR:</strong> Automatically extracts and indexes text from images and screenshots locally.</li>
          <li><strong>Instant Preview Panel:</strong> Inspect any PDF page immediately without launching Adobe Acrobat or waiting for heavy reader apps.</li>
        </ul>

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
