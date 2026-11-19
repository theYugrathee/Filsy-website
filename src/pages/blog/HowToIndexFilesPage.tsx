import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const s = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "How to Properly Index Files on Windows for Maximum Speed",
  author: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
  datePublished: '2025-11-01',
  publisher: { '@type': 'Organization', name: 'Filsy', url: 'https://filsy.space' },
};

export const HowToIndexFilesPage: React.FC = () => (
  <div className="page-wrapper">
    <SEO page={{
      title: "How to Index Files on Windows for Lightning-Fast Search",
      description: "Configure and optimize the Windows Search indexer. Learn which folders to include, how to rebuild a corrupted index, and how to reduce disk usage.",
      canonical: 'https://filsy.space/blog/how-to-index-files-windows',
      ogType: 'article',
      keywords: ["how to index files windows","configure windows search index","rebuild windows search indexer","fast file indexing windows 11"],
      schema: s,
    }} />
    <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }}>
      <article>
        <header style={{ marginBottom: '40px' }}>
          <span className="section-label">GUIDE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px' }}>
            How to Properly Index Files on Windows for Maximum Speed
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            If searching for files on your Windows computer takes minutes instead of seconds, your search index is likely misconfigured or incomplete. Here is how to configure indexing properly.
          </p>
        </header>

        <h2>What is the Windows Search Index?</h2>
        <p>The Windows Search Index is a catalog of files, metadata, and contents stored on your system. Rather than reading your physical SSD every time you type a letter, Windows queries this pre-built catalog to deliver instant results.</p>

        <h2>How to Configure Windows Indexing</h2>
        <ol style={{ lineHeight: 2 }}>
          <li>Press <kbd>Win + S</kbd>, type <strong>Indexing Options</strong>, and open the Control Panel applet.</li>
          <li>Click <strong>Modify</strong> to select which folders to index. Make sure your primary work directories (e.g. <code>C:\Projects</code>, <code>D:\Documents</code>) are checked.</li>
          <li>Click <strong>Advanced</strong>. Under the <strong>File Types</strong> tab, you can choose whether Windows indexes only file properties or full contents for each extension.</li>
        </ol>

        <h2>How to Rebuild a Broken Index</h2>
        <p>If searches return missing files or outdated results:</p>
        <ol style={{ lineHeight: 2 }}>
          <li>Open <strong>Indexing Options → Advanced</strong>.</li>
          <li>Under Troubleshooting, click <strong>Rebuild</strong>.</li>
          <li>Windows will delete the existing index and scan your drives from scratch. This can take several hours depending on drive size.</li>
        </ol>

        <h2>The Downside of Windows Indexing</h2>
        <p>The built-in Windows indexer is known to cause high background disk and CPU usage on laptops, occasionally bogging down performance. Furthermore, it struggles with external drives and complex document types.</p>
        <p>Modern alternatives like <strong>Filsy</strong> offer high-efficiency local indexing designed specifically for modern NVMe SSDs, indexing PDFs, Word documents, and spreadsheets without battery drain or background stutter.</p>

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
