import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import { retrieveLicenses } from '../services/paymentService';
import {
  KeyRound,
  Mail,
  Search,
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Laptop
} from 'lucide-react';

export const FindKeyPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'not_found' | 'error'>('idle');
  const [licenses, setLicenses] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) return;

    setStatus('loading');
    setLicenses([]);
    setErrorMessage('');

    try {
      const result = await retrieveLicenses(cleanEmail);
      if (result.ok && result.licenses && result.licenses.length > 0) {
        setLicenses(result.licenses);
        setStatus('success');
      } else {
        setStatus('not_found');
      }
    } catch (err: any) {
      console.error('License retrieval error:', err);
      setStatus('not_found');
    }
  };

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '820px' }}>
        
        {/* Header */}
        <div className="section-head center" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'rgba(124, 92, 252, 0.1)', color: 'var(--documents)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
            <KeyRound size={16} />
            <span>INSTANT LICENSE KEY RECOVERY</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Find Your License Key
          </h1>
          <p style={{ fontSize: '1.08rem', color: 'var(--muted)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Enter the email address you used during checkout. We will instantly locate and display all license keys linked to your account.
          </p>
        </div>

        {/* Big Highlighted Retrieval Card */}
        <div
          className="card"
          style={{
            padding: '44px 36px',
            marginBottom: '40px',
            boxShadow: 'var(--shadow-card)',
            border: '2px solid var(--documents)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top subtle highlight gradient bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--documents) 0%, var(--videos) 50%, var(--images) 100%)',
            }}
          />

          <form onSubmit={handleLookup} style={{ maxWidth: '640px', margin: '0 auto' }}>
            <label
              htmlFor="emailInput"
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '10px',
              }}
            >
              Checkout Email Address
            </label>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
                <Mail
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--subtle)',
                  }}
                />
                <input
                  id="emailInput"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  style={{
                    width: '100%',
                    paddingLeft: '44px',
                    height: '52px',
                    fontSize: '1.05rem',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-lg"
                style={{
                  height: '52px',
                  padding: '0 28px',
                  fontSize: '1rem',
                  gap: '8px',
                  flexShrink: 0,
                }}
              >
                <Search size={18} />
                <span>{status === 'loading' ? 'Searching Registry…' : 'Find My Key'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', fontSize: '0.82rem', color: 'var(--subtle)' }}>
              <ShieldCheck size={14} color="var(--music)" />
              <span>Instant lookup against our encrypted Dodo Payments license database.</span>
            </div>
          </form>

          {/* Results: Success */}
          {status === 'success' && (
            <div
              style={{
                marginTop: '32px',
                paddingTop: '28px',
                borderTop: '1px solid var(--line)',
                animation: 'fade-in 0.3s ease',
              }}
            >
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--music)', marginBottom: '14px' }}>
                  <Check size={20} />
                  <strong style={{ fontSize: '1.05rem' }}>
                    Found {licenses.length} License Key{licenses.length > 1 ? 's' : ''} for {email}
                  </strong>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {licenses.map((key, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'var(--card)',
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--line)',
                        flexWrap: 'wrap',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.74rem', color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                          Lifetime License Key #{i + 1}
                        </span>
                        <span
                          className="mono"
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--ink)',
                            letterSpacing: '0.04em',
                            marginTop: '2px',
                          }}
                        >
                          {key}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(key)}
                        className="btn btn-secondary btn-sm"
                        style={{ gap: '6px' }}
                      >
                        {copiedKey === key ? (
                          <>
                            <Check size={14} color="var(--music)" />
                            <span style={{ color: 'var(--music)', fontWeight: 600 }}>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Key</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link
                    to="/license"
                    className="btn btn-primary btn-sm"
                    style={{ gap: '6px' }}
                  >
                    <span>Activation Instructions</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Results: Not Found */}
          {status === 'not_found' && (
            <div
              style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid var(--line)',
                animation: 'fade-in 0.3s ease',
              }}
            >
              <div
                style={{
                  background: 'rgba(225, 29, 72, 0.06)',
                  border: '1px solid rgba(225, 29, 72, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <AlertCircle size={22} color="var(--images)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--ink)', marginBottom: '6px' }}>
                      No license found for "{email}"
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      Double-check the spelling, or try entering the email associated with your payment card, UPI ID, or Apple Pay/Google Pay wallet.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a
                        href={`mailto:${APP_CONFIG.supportEmail}?subject=Help%20Retrieving%20License%20Key&body=Hi%20Filsy%20Team%2C%0A%0AI%20am%20trying%20to%20find%20my%20license%20key%20for%20email%3A%20${encodeURIComponent(email)}`}
                        className="btn btn-secondary btn-sm"
                      >
                        Contact Support for Assistance
                      </a>
                      <Link to="/pricing" className="btn btn-primary btn-sm">
                        Purchase a New License
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Helpful 3-Step Guide */}
        <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '18px', color: 'var(--ink)' }}>
            How to use your license key
          </h3>
          <div className="steps-clean-list">
            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">1</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Copy your key above</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Your license key follows the format <span className="mono">FILSY-XXXX-XXXX-XXXX</span>.
                </p>
              </div>
            </div>

            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">2</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Open Filsy Settings</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Launch Filsy on your Windows PC and click the Settings icon (or press <span className="mono">Ctrl + ,</span>).
                </p>
              </div>
            </div>

            <div className="step-clean-item" style={{ padding: '14px 18px' }}>
              <div className="step-badge-num">3</div>
              <div>
                <strong style={{ fontSize: '0.92rem' }}>Paste &amp; Activate</strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
                  Paste your key into the License field and click Activate. Full lifetime features are unlocked immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Assistance Row */}
        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Need to transfer your license to a new PC? Open Filsy Settings on your old device and click &ldquo;Deactivate this PC&rdquo;, or email{' '}
          <a href={`mailto:${APP_CONFIG.supportEmail}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>
            {APP_CONFIG.supportEmail}
          </a>.
        </div>

      </div>
    </div>
  );
};

