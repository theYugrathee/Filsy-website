import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';

export const DirectoryOpusAlternativePage: React.FC = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Directory Opus Alternatives: Powerful File Managers Compared',
    description:
      'Looking for a Directory Opus alternative on Windows? Compare Total Commander, Double Commander, One Commander, and see when an instant search companion like Filsy is the smarter choice.',
    author: {
      '@type': 'Organization',
      name: 'Filsy',
      url: 'https://filsy.space',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Filsy',
      url: 'https://filsy.space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://filsy.space/app-icon.png',
      },
    },
    datePublished: '2025-11-01',
    dateModified: '2025-11-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://filsy.space/blog/directory-opus-alternative',
    },
  };

  return (
    <div className="page-wrapper">
      <SEO
        page={{
          title: 'Directory Opus Alternatives: Powerful File Managers Compared | Filsy',
          description:
            'Looking for a Directory Opus alternative on Windows? Compare Total Commander, Double Commander, One Commander, and see when an instant search companion like Filsy is the smarter choice.',
          canonical: 'https://filsy.space/blog/directory-opus-alternative',
          keywords: [
            'directory opus alternative windows',
            'directory opus alternatives',
            'file manager windows 11',
            'dual pane file manager windows',
            'total commander alternative',
            'windows file search tool',
            'best file manager windows',
          ],
          ogType: 'article',
          schema: articleSchema,
        }}
      />

      <div className="wrap" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        {/* Article Header */}
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(124, 92, 252, 0.08)',
              border: '1px solid rgba(124, 92, 252, 0.2)',
              color: 'var(--documents)',
              fontSize: '0.84rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <span>Windows File Management Guide</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.18,
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Directory Opus Alternatives: Powerful File Managers Compared
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.65,
              color: 'var(--muted)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Directory Opus has stood as the undisputed powerhouse of Windows file management for over two decades.
            Yet rising license costs, steep learning curves, and shifting user workflows have prompted thousands of
            power users to seek modern alternatives. Here is how the top contenders stack up.
          </p>

          <div
            style={{
              marginTop: '18px',
              fontSize: '0.86rem',
              color: 'var(--subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <span>Published: November 1, 2025</span>
            <span>&bull;</span>
            <span>12 min read</span>
            <span>&bull;</span>
            <span>Windows 10 &amp; 11</span>
          </div>
        </header>

        {/* Section 1: The Dilemma */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Why Power Users Love Directory Opus &amp; Why They Look Elsewhere
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
            Originally born on the Commodore Amiga in 1990 before migrating to Windows, Directory Opus (often abbreviated
            as DOpus) is widely recognized as the Swiss Army knife of local file systems. Unlike standard Windows
            Explorer, which strips away advanced controls in favor of consumer simplicity, Directory Opus offers
            unbounded flexibility. You can customize every button, write VBScript and JScript automation macros,
            configure dual-pane horizontal or vertical listers, customize status bars, edit file metadata directly,
            and inspect archive containers as if they were native folders.
          </p>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
            However, despite its cult following among sysadmins and power users, Directory Opus is not for everyone.
            In recent years, several friction points have led Windows users to search for a viable Directory Opus alternative:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '20px', marginBottom: '24px' }}>
            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
              <div style={{ color: 'var(--archives)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                Significant Price Tag
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--muted)' }}>
                Directory Opus Pro costs roughly $89 AUD (~$58 USD) for a single machine license, while the trimmed-down Light edition costs $59 AUD (~$39 USD). Upgrading across major revisions entails additional recurring payments, making multi-device licensing expensive.
              </p>
            </div>

            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
              <div style={{ color: 'var(--videos)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                Extreme Configuration Overhead
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--muted)' }}>
                With thousands of preferences, custom scripts, and toolbar tweaks, setting up DOpus can quickly feel like configuring a customized Linux distribution. Users who simply want smooth, rapid file interaction often get bogged down in endless preferences.
              </p>
            </div>

            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
              <div style={{ color: 'var(--documents)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                Shell Replacement Fragility
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--muted)' }}>
                Replacing the native Windows Explorer shell with a third-party application can occasionally cause integration hiccups with modern Windows 11 context menus, cloud storage status badges, and third-party shell extensions.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)' }}>
            Most importantly, many professionals invest in Directory Opus simply because they are fed up with Windows
            Explorer&apos;s sluggish file search and poor preview capabilities. If your core problem is finding
            documents and viewing files rather than scripting complex multi-pane folder syncs, replacing your entire
            shell may be an unnecessarily complex and expensive solution.
          </p>
        </section>

        {/* Section 2: Top Dedicated File Manager Alternatives */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            The Best Traditional File Managers to Replace Directory Opus
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '24px' }}>
            If you truly need a full dual-pane orthodox file manager with batch renaming, advanced file operations,
            and keyboard-driven ergonomics, several dedicated alternatives stand out on Windows.
          </p>

          {/* Alternative 1: Total Commander */}
          <div className="card" style={{ padding: '24px', marginBottom: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
                1. Total Commander — The Timeless Powerhouse
              </h3>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--videos)',
                }}
              >
                Shareware (~$44 USD)
              </span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              Authored by Christian Ghisler, Total Commander has been the benchmark for dual-pane file management since the
              Windows 3.1 era. It is legendary for raw execution speed, microscopic RAM usage, and unfailing stability.
              If you have memorized classic Norton Commander keyboard shortcuts (F3 view, F4 edit, F5 copy, F6 move),
              Total Commander feels like an extension of your hands.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Pros:</strong> Phenomenal plugin ecosystem (WCX for archives, WDX for file metadata, WLX for custom viewers, WFX for cloud/FTP), unmatched execution speed on millions of files, lifetime updates included with license.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Cons:</strong> The Win32 graphical interface looks straight out of 1995, high-DPI scaling requires manual tuning, and text search across modern document formats requires third-party lister plugins.
              </li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'var(--subtle)', fontStyle: 'italic' }}>
              Verdict: The definitive choice for purists who want pure keyboard speed and do not care about modern aesthetics.
            </p>
          </div>

          {/* Alternative 2: Double Commander */}
          <div className="card" style={{ padding: '24px', marginBottom: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
                2. Double Commander — The Open-Source Flagship
              </h3>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--music)',
                }}
              >
                100% Free &amp; Open Source (GPLv2)
              </span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              Double Commander is an open-source cross-platform file manager directly inspired by Total Commander.
              Written in Lazarus/Free Pascal, it runs identically across Windows, Linux, and macOS. Crucially, Double
              Commander supports Total Commander&apos;s WCX, WDX, and WLX plugins, giving you access to decades of community tooling
              without paying a single cent.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Pros:</strong> Completely free, cross-platform portability, built-in multi-rename tool, tabbed dual panes, integrated syntax-highlighted viewer, and zero licensing restrictions.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Cons:</strong> Lacks the visual polish of native Windows 11 apps, search indexing is not real-time (it crawls directories on-demand), and complex regular expression operations can have a learning curve.
              </li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'var(--subtle)', fontStyle: 'italic' }}>
              Verdict: The absolute best zero-cost alternative if you want traditional dual-pane management without licensing fees.
            </p>
          </div>

          {/* Alternative 3: One Commander */}
          <div className="card" style={{ padding: '24px', marginBottom: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
                3. One Commander — The Modern Aesthetic Choice
              </h3>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(124, 92, 252, 0.1)',
                  color: 'var(--documents)',
                }}
              >
                Free / Pro ($25 USD)
              </span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              One Commander is built from the ground up for modern Windows. If you find Directory Opus and Total Commander
              visually archaic, One Commander will feel like a breath of fresh air. It provides a sleek Fluent interface,
              acrylic blur effects, macOS-style Miller columns (hierarchical horizontal navigation), tabs, and customizable
              themes.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Pros:</strong> Gorgeous UI designed for Windows 10 and 11, Miller column view, color-tagged files, integrated file preview panel, and regular active updates.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Cons:</strong> Noticeably heavier RAM consumption than Total Commander, not as deep for programmatic scripting, and search queries rely on Windows indexing or slower sequential directory scans.
              </li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'var(--subtle)', fontStyle: 'italic' }}>
              Verdict: Ideal for design-conscious creators and modern PC owners who want aesthetic elegance alongside dual panes.
            </p>
          </div>

          {/* Alternative 4: Multi Commander */}
          <div className="card" style={{ padding: '24px', marginBottom: '20px', backgroundColor: 'var(--surface, var(--card))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
                4. Multi Commander — Packed with Built-In Utilities
              </h3>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: 'var(--music)',
                }}
              >
                Free Freeware
              </span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              Multi Commander is a completely free multi-tabbed file manager with an extensive built-in scripting language
              and dedicated media tools. It features specialized extensions for unpacking complex archives, viewing picture
              metadata, editing MP3 tags, and managing Windows registry keys directly from within the browser.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '12px' }}>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Pros:</strong> Free for both commercial and personal use, comprehensive built-in media tools, customizable buttons and keyboard shortcuts, and strong multi-threaded file copying.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Cons:</strong> The default button-heavy layout can feel cluttered, and finding specific configuration settings requires patience.
              </li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'var(--subtle)', fontStyle: 'italic' }}>
              Verdict: A generous, feature-rich free utility for tinkerers who love custom scripts and media batch management.
            </p>
          </div>
        </section>

        {/* Section 3: Detailed Comparison Table */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Direct Feature &amp; Price Comparison
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '20px' }}>
            To help you determine which software aligns with your specific daily workflow, here is how the top
            traditional file managers and focused search tools compare side-by-side:
          </p>

          <div
            style={{
              overflowX: 'auto',
              borderRadius: '12px',
              border: '1px solid var(--line)',
              backgroundColor: 'var(--surface, var(--card))',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              marginBottom: '20px',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Software</th>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Core Architecture</th>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Content Search</th>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>OCR in Images</th>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Price / Model</th>
                  <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Best Suited For</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Directory Opus</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Dual-Pane Shell Replacement</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Windows Index / Raw Crawl</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>No</td>
                  <td style={{ padding: '14px 16px', color: 'var(--archives)', fontWeight: 600 }}>~$58–$89 USD + paid upgrades</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Scripting &amp; complete shell replacement</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Total Commander</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Orthodox Dual-Pane (Win32)</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Via Lister plugins</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>No</td>
                  <td style={{ padding: '14px 16px', color: 'var(--videos)', fontWeight: 600 }}>~$44 USD (Perpetual)</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Keyboard purists &amp; sysadmins</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Double Commander</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Cross-Platform Dual-Pane</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Sequential disk scan</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>No</td>
                  <td style={{ padding: '14px 16px', color: 'var(--music)', fontWeight: 600 }}>Free &amp; Open Source</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Budget-conscious multi-OS users</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>One Commander</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Modern Fluent UI + Miller Columns</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Sequential / Basic</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>No</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Free / $25 USD Pro</td>
                  <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Visual designers &amp; modern setups</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(124, 92, 252, 0.04)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--documents)' }}>
                    Filsy (Search Companion)
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>Instant Search &amp; Document Hub</td>
                  <td style={{ padding: '14px 16px', color: 'var(--music)', fontWeight: 600 }}>
                    Deep content (PDF, Office, Code)
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--music)', fontWeight: 600 }}>
                    Yes (On-Device OCR)
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--documents)', fontWeight: 700 }}>
                    $9 Lifetime ($19 regular)
                  </td>
                  <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>
                    Instant retrieval without replacing Explorer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Rethinking the Problem */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Rethinking the Problem: Do You Need a Whole File Manager or Instant Search?
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
            Before committing $60 or spending your weekend memorizing 80 keyboard shortcuts for an orthodox file manager,
            it is worth asking an honest question: <em>What actual daily friction brought you here?</em>
          </p>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
            In our research talking to Windows users, more than 70% of people who look for a Directory Opus alternative
            do not actually need complex VBScript hooks or dual-pane directory synchronization. Instead, their frustration
            stems from three very specific shortcomings in default Windows:
          </p>

          <ol style={{ paddingLeft: '22px', fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '20px' }}>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Windows Search is slow and incomplete:</strong> Typing into the Windows taskbar or Explorer search bar frequently stalls for 20 to 60 seconds, misses freshly saved files, or provides irrelevant web results from Bing.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Document contents remain invisible:</strong> You know an invoice or contract contains a client&apos;s name or an order number, but Windows cannot reliably look inside PDFs, scanned receipts, or Word documents without choking your CPU.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Screenshots and receipts are lost forever:</strong> Windows takes screenshots with Win+Shift+S, but they end up in an unsearchable pile of cryptic filenames like <code>Screenshot 2025-10-14 112042.png</code>.
            </li>
          </ol>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px' }}>
            This is where <strong style={{ color: 'var(--ink)' }}>Filsy</strong> takes a completely different, modern approach.
            Rather than attempting to replace Windows Explorer—which inevitably breaks context menus, taskbar integration,
            and muscle memory—Filsy acts as a lightweight, dedicated companion for instant retrieval.
          </p>

          <div
            className="card"
            style={{
              padding: '28px',
              borderLeft: '4px solid var(--documents)',
              backgroundColor: 'var(--surface, var(--card))',
              marginBottom: '24px',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              How Filsy Solves the Search Bottleneck at a Lower Price Point
            </h3>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              Directory Opus is immensely capable, but paying $60 to $89 USD just to overcome Windows Explorer&apos;s search deficiencies
              is overkill. Filsy handles the search and discovery problem with dedicated precision:
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--muted)' }}>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Sub-Second Local Search (~0.02s):</strong> Filsy delivers instant, real-time results across hundreds of thousands of files on your local drives without the CPU-churning indexation spikes typical of Windows Search.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Deep Content Indexing:</strong> Indexes not just filenames, but the full internal text of PDFs, Word documents (.docx), Excel spreadsheets (.xlsx), plain text files, and source code.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>On-Device Windows OCR for Images:</strong> Filsy leverages native on-device Windows OCR to extract text from screenshots, charts, and photos. You can search for words that only exist inside an image, with zero data ever uploaded to the cloud.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Instant File Preview Panel:</strong> Click the preview button or open the preview panel to inspect Word docs, PDFs, Excel sheets, and high-resolution images instantly before deciding whether to open them.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>Cryptographic Duplicate Detection:</strong> Built-in SHA-256 exact duplicate scanning lets you reclaim valuable NVMe SSD storage by pinpointing identical files regardless of filename differences.
              </li>
              <li>
                <strong style={{ color: 'var(--ink)' }}>100% Offline &amp; Private:</strong> Zero telemetry, zero cloud dependencies, and zero accounts needed. Built exclusively for Windows 10 (version 1809+) and Windows 11 64-bit systems.
              </li>
            </ul>
          </div>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)' }}>
            Best of all, while Directory Opus charges steep recurring upgrades, Filsy offers a straightforward lifetime license
            for just <strong style={{ color: 'var(--ink)' }}>$9 lifetime</strong> for the first 99 early adopters ($19 regular launch price),
            available with single-click installation and verification directly through the official Microsoft Store.
          </p>
        </section>

        {/* Section 5: Decision Guide */}
        <section style={{ marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            How to Choose the Right Tool for Your Workflow
          </h2>

          <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '20px' }}>
            No single file management utility fits every computing style. Here is our practical recommendation based on
            your everyday use-case:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                padding: '18px 22px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--surface, var(--card))',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                Choose Directory Opus if:
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                You have complex batch automation requirements, routinely script custom toolbar macros in VBScript, require advanced FTP/SFTP synchronization within your file browser, and do not mind paying $60+ USD for heavy customization.
              </p>
            </div>

            <div
              style={{
                padding: '18px 22px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--surface, var(--card))',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                Choose Total Commander or Double Commander if:
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                You want a classic, battle-tested orthodox dual-pane manager driven entirely by keyboard shortcuts (F3–F8), need access to thousands of legacy plugins, and either want a one-time perpetual shareware license (Total Commander) or a completely free open-source solution (Double Commander).
              </p>
            </div>

            <div
              style={{
                padding: '18px 22px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--surface, var(--card))',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                Choose One Commander if:
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                Visual appearance is paramount to you, you love macOS-style Miller columns with multi-level tree navigation, and you want modern acrylic styling tailored specifically for Windows 11.
              </p>
            </div>

            <div
              style={{
                padding: '18px 22px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--surface, var(--card))',
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--documents)', marginBottom: '6px' }}>
                Choose Filsy if:
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                Your real daily bottleneck is finding lost documents, reading text inside PDFs and spreadsheets, or searching through screenshots with on-device OCR. You want sub-second (~0.02s) query speeds, complete offline privacy, and quick previews without having to rewrite your muscle memory or replace Windows Explorer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Card at Bottom */}
        <section style={{ marginTop: '20px' }}>
          <div
            className="card"
            style={{
              padding: '44px 36px',
              textAlign: 'center',
              backgroundColor: 'var(--surface, var(--card))',
              border: '2px solid var(--line)',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--music)',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              First 99 Users Special: Just $9 Lifetime
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
                marginBottom: '12px',
              }}
            >
              Experience Sub-Second File Search on Windows
            </h2>

            <p
              style={{
                maxWidth: '600px',
                margin: '0 auto 28px',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--muted)',
              }}
            >
              Keep your trusty Windows Explorer folders underneath, but add instant ~0.02s search, deep document text indexing,
              and on-device screenshot OCR on top. 100% offline, zero telemetry, and lifetime updates.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={APP_CONFIG.microsoftStore.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '12px 26px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                Download on Microsoft Store
              </a>

              <Link
                to="/pricing"
                className="btn btn-secondary"
                style={{
                  padding: '12px 26px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                View Pricing &amp; Lifetime License ({APP_CONFIG.pricing.displayPrice})
              </Link>
            </div>

            <div
              style={{
                marginTop: '20px',
                fontSize: '0.82rem',
                color: 'var(--subtle)',
              }}
            >
              Works on Windows 10 (1809+) &amp; Windows 11 (64-bit) &bull; No cloud accounts required
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
