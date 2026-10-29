import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONFIG } from '../config';
import {
  Gift,
  Flame,
  CheckCircle2,
  AlertCircle,
  Mail,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Eye,
  Share2,
  FileCheck,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

export const FreeLicensePage: React.FC = () => {
  const [postUrl, setPostUrl] = useState('');
  const [claimEmail, setClaimEmail] = useState('');
  const [platform, setPlatform] = useState('x');
  const [viewCount, setViewCount] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimEmail.trim() || !postUrl.trim()) return;

    // Build mailto with prefilled details
    const subject = encodeURIComponent(`Free License Key Claim: ${platform.toUpperCase()} (${viewCount || '5K+'} Views)`);
    const body = encodeURIComponent(
      `Hi Filsy Team,\n\nI have promoted Filsy on social media and my post has reached over 5,000 views.\n\n` +
      `Platform: ${platform}\n` +
      `Post URL: ${postUrl.trim()}\n` +
      `Approximate Views / Impressions: ${viewCount || '5,000+'}\n` +
      `My Email for License Key Delivery: ${claimEmail.trim()}\n\n` +
      `Additional Notes / Proof link: ${notes.trim() || 'Attached in this email'}\n\n` +
      `Please verify and send my free lifetime license key.\n\nThank you!`
    );

    window.location.href = `mailto:${APP_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="wrap" style={{ maxWidth: '860px' }}>

        {/* Hero Section */}
        <div className="section-head center" style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'rgba(124, 92, 252, 0.1)', color: 'var(--documents)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
            <Gift size={16} />
            <span>COMMUNITY CREATOR REWARD</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            Promote Filsy. <br />
            <span className="gradient-text">Get a 100% Free Lifetime Key.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            Share a great review, positive post, video, or thread about Filsy on social media. If your post reaches <strong>5,000+ views</strong>, we will email you an official lifetime license key — completely free!
          </p>
        </div>

        {/* 3 Steps Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <div className="card" style={{ padding: '26px 22px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(124, 92, 252, 0.12)', color: 'var(--documents)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
              1
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--ink)' }}>Create &amp; Publish</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Write a great review, share a demo screen, or create a thread showcasing how Filsy solves Windows file search. Include a link to <strong style={{ color: 'var(--ink)' }}>filsy.space</strong>.
            </p>
          </div>

          <div className="card" style={{ padding: '26px 22px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.12)', color: 'var(--archives)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
              2
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--ink)' }}>Hit 5,000+ Views</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Let your post gain traction. Once it reaches 5,000+ total views or impressions on your chosen platform, take a screenshot of your analytics.
            </p>
          </div>

          <div className="card" style={{ padding: '26px 22px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--music)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '14px' }}>
              3
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--ink)' }}>Claim Your Free Key</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Submit your post link using the form below or via email. Our team will verify the metrics and email your official lifetime license key within 24 hours.
            </p>
          </div>
        </div>

        {/* Submission / Claim Card */}
        <div
          className="card"
          id="claim-form"
          style={{
            padding: '40px 36px',
            marginBottom: '44px',
            border: '2px solid var(--documents)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--documents) 0%, var(--videos) 50%, var(--music) 100%)',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--ink)', marginBottom: '4px' }}>
                Submit Your Post &amp; Claim License Key
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                Fill out the quick submission below. It automatically generates your verification email.
              </p>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--music)', padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 700 }}>
              <Flame size={14} />
              <span>5,000+ VIEWS CHALLENGE</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="form-input"
                  style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
                >
                  <option value="𝕏 / Twitter">𝕏 (Twitter)</option>
                  <option value="Reddit">Reddit (e.g., r/windows, r/software)</option>
                  <option value="Medium">Medium Article</option>
                  <option value="YouTube">YouTube Video / Short</option>
                  <option value="LinkedIn">LinkedIn Post</option>
                  <option value="Blog / Forum">Personal Tech Blog / Forum</option>
                  <option value="Other">Other Platform</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  Approximate Views / Impressions
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5,420 views"
                  value={viewCount}
                  onChange={(e) => setViewCount(e.target.value)}
                  className="form-input"
                  style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Direct Link to Your Public Post / Video
              </label>
              <input
                type="url"
                placeholder="https://x.com/username/status/... or https://reddit.com/r/..."
                value={postUrl}
                onChange={(e) => setPostUrl(e.target.value)}
                className="form-input"
                style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Your Email Address (where your license key will be sent)
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={claimEmail}
                onChange={(e) => setClaimEmail(e.target.value)}
                className="form-input"
                style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Additional Notes / Screenshot link (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Imgur link to analytics or attaching screenshot in email"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-input"
                style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap', paddingTop: '10px' }}>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ gap: '8px', padding: '0 32px' }}
              >
                <Mail size={18} />
                <span>Submit Post &amp; Send Verification Email</span>
                <ArrowRight size={16} />
              </button>

              <span style={{ fontSize: '0.84rem', color: 'var(--subtle)' }}>
                ✓ Manually reviewed within 24 hours · Instant key delivery
              </span>
            </div>

            {submitted && (
              <div style={{ marginTop: '14px', padding: '14px 18px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--music)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} />
                <span>Draft created! If your email app didn't open automatically, send your link and screenshot to <strong>{APP_CONFIG.supportEmail}</strong>.</span>
              </div>
            )}
          </form>
        </div>

        {/* Eligible Platforms & Content Ideas */}
        <div className="card" style={{ padding: '36px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--ink)' }}>
            Eligible Platforms &amp; Ideas
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            You can publish on any public social platform or content site where view metrics are visible:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            <div style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'var(--card)' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>𝕏 / Twitter</strong>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                Post a thread reviewing Filsy, comparing it to Windows Explorer, or showcasing natural-language search.
              </p>
            </div>

            <div style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'var(--card)' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Reddit</strong>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                Share a positive review, tool recommendation, or showcase on subreddits like r/windows, r/software, r/productivity, or r/coolgithubprojects.
              </p>
            </div>

            <div style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'var(--card)' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>Medium &amp; Tech Blogs</strong>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                Write an article such as "How to fix Windows file search" or "Best local file managers for Windows in 2026".
              </p>
            </div>

            <div style={{ padding: '16px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'var(--card)' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>YouTube / Shorts</strong>
              <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                Create a quick 60-second Short, Reel, or dedicated video demonstrating finding files by plain text search.
              </p>
            </div>
          </div>
        </div>

        {/* Offer Terms & Conditions */}
        <div className="card" style={{ padding: '36px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '18px', color: 'var(--ink)' }}>
            Offer Terms, Conditions &amp; Verification Rules
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="var(--music)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--ink)' }}>Genuine View Count (5,000+ views):</strong> Views can be verified via public counter on the platform (e.g. 𝕏 post views, Reddit post insights, YouTube views) or by attaching an analytics screenshot.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="var(--music)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--ink)' }}>Meaningful Content:</strong> Your post must be a good review or positive mention of Filsy that includes a link to <code className="mono">https://filsy.space</code> or the application.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="var(--music)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--ink)' }}>Public &amp; Accessible:</strong> The post must remain publicly accessible and visible for at least 30 days after key issuance.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="var(--music)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--ink)' }}>1 Lifetime License Per Post:</strong> Each verified post with 5,000+ views qualifies for one (1) full lifetime license key valid for all future updates.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <AlertCircle size={18} color="var(--images)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--ink)' }}>No Automated Bots or Spam:</strong> Submissions generated via bot farms, click manipulation, or low-quality automated spam will be disqualified.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card" style={{ padding: '36px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--ink)' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
                Is the license key identical to the paid version?
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                Yes, 100%. You receive the exact same official Lifetime License key with permanent offline activation and all future version updates included.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
                How long does verification take?
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                Our team manually inspects submissions within 24 to 48 hours and sends your key directly to your email address.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
                Do the 5,000 views need to be on a single post?
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                Yes. The 5,000+ views must be from a <strong>single public post</strong>. Views from different posts or threads cannot be combined. Make sure your content is compelling enough to reach 5K on its own!
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <strong style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
                What if I prefer to buy directly?
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                You can always get a license immediately through our <Link to="/pricing" style={{ color: 'var(--documents)', fontWeight: 600 }}>Pay What You Want checkout</Link>!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/" className="btn btn-secondary" style={{ gap: '8px' }}>
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

