import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FileQuestion, Home, Search, HelpCircle, Download } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <SEO routeKey="notFound" />

      <div className="wrap-narrow center" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'var(--fill)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          color: 'var(--documents)'
        }}>
          <FileQuestion size={36} />
        </div>

        <div className="badge badge-secondary" style={{ marginBottom: '12px' }}>
          Error 404
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}>
          Page Not Found
        </h1>

        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Home size={16} /> Return to Home
          </Link>
          <Link to="/features" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Search size={16} /> Explore Features
          </Link>
          <Link to="/download" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Download size={16} /> Download Filsy
          </Link>
        </div>

        <div className="card" style={{ padding: '20px', maxWidth: '420px', margin: '0 auto', textAlign: 'left', background: 'var(--card-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px' }}>
            <HelpCircle size={16} color="var(--documents)" /> Need assistance?
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: 0 }}>
            If you followed a broken link from within our site, please let us know at{' '}
            <a href="mailto:support@filsy.space" style={{ color: 'var(--documents)', textDecoration: 'underline' }}>
              support@filsy.space
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

