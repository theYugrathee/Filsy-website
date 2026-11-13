import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';
import { Search, Zap, Shield, HardDrive, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

export const FileSearchFeaturePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <SEO routeKey="fileSearch" />

      <div className="wrap-wide">
        <header className="section-head center" style={{ marginBottom: '40px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <Zap size={14} className="inline mr-1" /> Sub-Second Query Engine
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Fast Windows File Search &amp; Content Discovery
          </h1>
          <p style={{ maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', color: 'var(--muted)' }}>
            Search millions of files across all your internal drives and external storage in 0.02 seconds.
            Zero cloud uploads, zero background battery drain, and deep content indexing.
          </p>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={APP_CONFIG.microsoftStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get from Microsoft Store
            </a>
            <Link to="/explorer-vs-filsy" className="btn btn-secondary">
              Compare with Windows Explorer
            </Link>
          </div>
        </header>

        {/* Feature Highlights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Zap size={22} color="var(--videos)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Sub-Second Query Speeds</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Unlike the default Windows search indexer that grinds your disk to a halt, Filsy queries an optimized local inverted index. Average query latency is ~0.02 seconds, even on drives containing 500,000+ files.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(124, 92, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Search size={22} color="var(--documents)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Deep Content &amp; Text Search</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Do not remember the filename? Search by the words written inside the document. Filsy searches the raw text of Word docs (.docx), Excel spreadsheets (.xlsx), PDFs, source code, Markdown, and configuration files.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Filter size={22} color="var(--music)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Smart Natural Syntax &amp; Filters</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Narrow down files effortlessly with intuitive filters: filter by extension (<code>ext:pdf</code>), file size (<code>size:&gt;100mb</code>), date modified (<code>modified:last-week</code>), or specific category pills.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <HardDrive size={22} color="var(--archives)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Multi-Drive &amp; External Storage</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Index C:\, D:\, secondary SSDs, external USB backup drives, and SD cards. When an external drive is reconnected, Filsy detects it instantly without forcing a complete re-index.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Shield size={22} color="var(--apps)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>100% Offline &amp; Private</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Your file names, document contents, and search queries remain strictly on your machine. Filsy never sends telemetry, file lists, or indexed data to cloud servers. No account or login required.
            </p>
          </div>

          <div className="card" style={{ padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <CheckCircle2 size={22} color="var(--images)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Native Windows Integration</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Jump straight to any search result in File Explorer with one shortcut (Enter or Ctrl+Enter), copy full absolute paths, drag and drop files into other applications, or press Spacebar to preview.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <section className="card" style={{ padding: '36px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
            Performance Architecture: Filsy vs. Default Windows Search
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
            See why power users switch from the standard Windows Explorer search box to Filsy&apos;s purpose-built indexer:
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line-strong)' }}>
                  <th style={{ padding: '12px 16px' }}>Capability</th>
                  <th style={{ padding: '12px 16px', color: 'var(--documents)' }}>Filsy</th>
                  <th style={{ padding: '12px 16px', color: 'var(--muted)' }}>Windows Explorer</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Query Latency</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink)' }}>~0.02 seconds (instant results as you type)</td>
                  <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>5 - 45+ seconds with green progress bar</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Content Search Inside Documents</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink)' }}>Built-in for PDF, DOCX, XLSX, Code, TXT</td>
                  <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>Slow, requires custom iFilters</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Search Inside Screenshots (OCR)</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink)' }}>Yes — on-device Windows OCR engine</td>
                  <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Spacebar Quick Look Preview</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink)' }}>Yes — native spacebar preview overlay</td>
                  <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>No (requires opening full desktop app)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>Privacy &amp; Data Telemetry</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink)' }}>100% Offline — zero cloud file uploads</td>
                  <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>Sends web queries to Bing by default</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="card center" style={{ padding: '40px 24px', background: 'var(--bg-band)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
            Ready to find files in milliseconds?
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 24px' }}>
            Download Filsy securely from the Microsoft Store or get your lifetime license with one simple payment.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/pricing" className="btn btn-primary">
              Get Lifetime License — {APP_CONFIG.pricing.displayPrice}
            </Link>
            <Link to="/features" className="btn btn-secondary">
              Explore All Features <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

