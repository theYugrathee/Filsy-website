import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { Mail, Send, Check } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [topic, setTopic] = useState('License');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Filsy Support: ${topic}] from ${email}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${APP_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="wrap-narrow">
        <div className="section-head center">
          <h2>Need help with Filsy?</h2>
          <p>We're here to answer questions about installation, licensing, or bug reports.</p>
        </div>

        {/* Direct Email Card */}
        <div
          className="card"
          style={{
            padding: '24px',
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.74rem', color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SUPPORT EMAIL</div>
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none' }}
            >
              {APP_CONFIG.supportEmail}
            </a>
          </div>
          <a href={`mailto:${APP_CONFIG.supportEmail}`} className="btn btn-secondary btn-sm" style={{ gap: '6px' }}>
            <Mail size={14} />
            <span>Email us directly</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Send a message</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '20px' }}>
            Clicking send opens your email app with the message pre-filled.
          </p>

          {submitted ? (
            <div style={{ padding: '20px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--music)', marginBottom: '8px' }}>
                <Check size={20} />
              </div>
              <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Email client opened!</p>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: '4px' }}>We typically reply within 12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '6px' }}>Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="form-input"
                >
                  <option value="License">License &amp; Key Recovery</option>
                  <option value="Microsoft Store">Microsoft Store &amp; Release Inquiries</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feedback">Feature Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '6px' }}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '6px' }}>Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', gap: '6px' }}>
                <Send size={15} />
                <span>Send via Email</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
