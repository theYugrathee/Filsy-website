import React from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="wrap">
        <div className="section-head center">
          <h2>A file manager that finally keeps up with you</h2>
          <p>Everything is computed locally on your PC — fast, private, and always up to date.</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="icon-chip-clean">🗣</div>
            <h3>Natural-language search</h3>
            <p>Type how you think. Filsy parses dates, file sizes, types, directories, and download sources — live results appear as you type.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">🖼</div>
            <h3>Search inside screenshots</h3>
            <p>On-device Windows OCR reads the text inside your screenshots and photos. That Wi-Fi password or receipt you screenshotted? Just search for it.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">📄</div>
            <h3>Search inside documents</h3>
            <p>PDFs, Word .docx, PowerPoint, Excel, and text files are fully indexed — find the invoice or contract by its paragraphs, not its filename.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">🗂</div>
            <h3>Your real folders, organized</h3>
            <p>Unified shelves for Images, Videos, Music, Documents, and Archives across all connected drives. Real folder structure like File Explorer.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">🧹</div>
            <h3>Safe one-click cleanup</h3>
            <p>Cleans only true temporary files — %TEMP%, crash dumps, and Recycle Bin. Your user documents and photos are never touched.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">⚡</div>
            <h3>Opens instantly, forever</h3>
            <p>A persistent local index means Filsy starts instantly — no lengthy disk rescanning every time you open the application.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">🏷</div>
            <h3>Download source tracking</h3>
            <p>Remembers whether a file originated from WhatsApp, Slack, Gmail, or your browser. Filter by source with one click.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">👯</div>
            <h3>Duplicate file detection</h3>
            <p>Identifies exact identical files using SHA-256 binary hash validation so you can safely reclaim gigabytes of storage.</p>
          </div>

          <div className="card">
            <div className="icon-chip-clean">🔒</div>
            <h3>100% private and offline</h3>
            <p>No cloud dependencies, no analytics, no file uploads. Everything runs locally on your PC. Nothing ever leaves your machine.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn btn-primary">Get License Key — {APP_CONFIG.pricing.displayPrice}</Link>
          <Link to="/#pricing" className="btn btn-secondary">Retrieve License Key</Link>
        </div>
      </div>
    </div>
  );
};
