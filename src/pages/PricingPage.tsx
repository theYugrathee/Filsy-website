import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { initiateCheckout } from '../services/paymentService';
import { Check, Sparkles, KeyRound, Shield } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      await initiateCheckout('USD');
    } catch {
      setIsProcessing(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="wrap">
        <div className="section-head center">
          <span className="section-label">PAY WHAT YOU WANT</span>
          <h2>Pay what you want. Yours forever.</h2>
          <p>Support independent software. Pay whatever you think is fair — every supporter receives an instant lifetime license key with all future updates included.</p>
        </div>

        {/* Clean Pricing Card */}
        <div className="pricing-clean-card">
          <span className="pill pill-early">LIFETIME LICENSE</span>

          <div className="clean-price-box" style={{ flexDirection: 'column', gap: '4px', marginTop: '14px', marginBottom: '14px' }}>
            <span className="clean-price-amount" style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}>
              Pay What You Want
            </span>
            <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>one-time contribution · lifetime access</span>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '24px' }}>
            Instant digital delivery. Unlocks perpetual offline usage with no recurring fees.
          </p>

          <button
            type="button"
            id="pricingCheckoutBtn"
            onClick={handleCheckout}
            disabled={isProcessing}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', gap: '8px' }}
          >
            <Sparkles size={18} />
            <span>{isProcessing ? 'Connecting to Checkout…' : 'Get License Key — Pay What You Want'}</span>
          </button>

          <ul className="clean-checklist" style={{ marginTop: '28px' }}>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Lifetime license on 1 active PC</strong> (move to a new PC anytime in 1 click)</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Instant digital key delivery</strong> directly to your email via Dodo Payments</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Ready for upcoming Microsoft Store release</strong> (activate in 1 click)</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Natural-language search</strong> with automatic filter parsing</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>On-device OCR</strong> inside screenshots, scanned receipts, and photos</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Deep document text indexing</strong> for PDFs, Word, and Excel files</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Binary duplicate detection</strong> with safe SHA-256 hash comparison</span>
            </li>
            <li>
              <Check size={16} color="var(--music)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Every future update included forever</strong></span>
            </li>
          </ul>

          <div style={{ fontSize: '0.8rem', color: 'var(--subtle)', marginTop: '20px' }}>
            Checkout secured by Dodo Payments · Instant digital license delivery
          </div>
        </div>

        {/* Action Links */}
        <div style={{ maxWidth: '600px', margin: '40px auto 0', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/find-key" className="btn btn-secondary" style={{ gap: '6px' }}>
            <KeyRound size={16} />
            <span>Find My License Key</span>
          </Link>
          <Link to="/license" className="btn btn-secondary" style={{ gap: '6px' }}>
            <span>License Guide</span>
          </Link>
          <Link to="/faq" className="btn btn-ghost">Read Full FAQ</Link>
        </div>
      </div>
    </div>
  );
};
