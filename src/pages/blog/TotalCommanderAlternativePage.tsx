import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';

export const TotalCommanderAlternativePage: React.FC = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Total Commander Alternatives for Windows in 2025',
    description:
      'Looking for the best Total Commander alternative in 2025? Compare top orthodox dual-pane file managers like Directory Opus and Double Commander with modern, search-first Windows utilities.',
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
      '@id': 'https://filsy.space/blog/total-commander-alternative',
    },
  };

  return (
    <div className="page-wrapper">
      <SEO
        page={{
          title: 'Total Commander Alternatives for Windows in 2025 | Filsy',
          description:
            'Looking for the best Total Commander alternative in 2025? Compare top orthodox dual-pane file managers like Directory Opus and Double Commander with modern, search-first Windows utilities.',
          canonical: 'https://filsy.space/blog/total-commander-alternative',
          keywords: [
            'total commander alternative',
            'total commander alternatives windows',
            'dual pane file manager windows 11',
            'directory opus alternative',
            'double commander',
            'best file manager windows 11',
            'orthodox file manager',
            'desktop file search',
          ],
          ogType: 'article',
          schema: articleSchema,
        }}
      />

      <div className="wrap" style={{ maxWidth: '880px', margin: '0 auto', padding: '48px 20px 80px' }}>
        {/* Header Section */}
        <header style={{ marginBottom: '40px', textAlign: 'left' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(124, 92, 252, 0.1)',
              color: 'var(--documents)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            Windows File Management &amp; Workflow
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Total Commander Alternatives for Windows in 2025
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--muted)',
              marginBottom: '20px',
            }}
          >
            Total Commander has been a cornerstone of power-user computing since the Windows 3.1 era.
            Yet in 2025, user needs have evolved dramatically. Whether you are looking for modern
            orthodox dual-pane replacements, cross-platform open-source utilities, or lightning-fast
            search-first tools, here is an objective, in-depth guide to the best alternatives available today.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: 'var(--subtle)',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '24px',
            }}
          >
            <span>Published: November 1, 2025</span>
            <span>•</span>
            <span>By Filsy Editorial Team</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Content Body */}
        <article style={{ lineHeight: 1.75, color: 'var(--ink)', fontSize: '1.05rem' }}>
          {/* Section 1 */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              Why Look for a Total Commander Alternative in 2025?
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Originally released by Christian Ghisler in 1993 under the name Windows Commander, Total
              Commander is one of the longest-running and most revered pieces of software in personal
              computing history. Built on the orthodox dual-pane paradigm pioneered by John Socha&apos;s
              Norton Commander in 1986, it introduced millions of users to the raw speed of
              keyboard-driven file operations.
            </p>
            <p style={{ marginBottom: '16px' }}>
              With dedicated function keys (F3 to view, F4 to edit, F5 to copy, F6 to move, F7 to create
              a folder, and F8 to delete), Total Commander eliminated the slow, mouse-dependent
              drag-and-drop bottlenecks of default system shells. Its built-in archive handling, FTP
              client, multi-rename tool, and extensive plugin architecture (WCX for archives, WDX for
              content, WFX for file systems, and WLX for quick previews) turned it into an operating system
              within an operating system.
            </p>
            <p style={{ marginBottom: '16px' }}>
              However, approaching Total Commander in 2025 highlights several clear friction points for
              modern Windows 10 and Windows 11 users:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Retro, 90s-Era User Interface:</strong> While functionally efficient, the dense
                win32 toolbar, legacy dialog boxes, and classic menus feel severely disconnected from
                modern high-DPI displays, dark mode environments, and modern Windows ergonomics.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Steep Configuration Curve:</strong> Modernizing Total Commander requires manually
                hunting down community plugins, editing .ini configuration files, and tweaking font
                settings just to get sensible previews for everyday file formats.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>The File Management Paradigm Has Shifted:</strong> In the 1990s and early 2000s,
                file organization was largely about maintaining rigid directory trees across partitions.
                In 2025, knowledge workers and software developers accumulate thousands of files across
                cloud storage, downloads, messy desktop directories, and messaging apps. Finding what you
                need in sub-seconds is often far more critical than manually comparing panel A with panel B.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Search Architecture Limitations:</strong> Total Commander includes a capable
                search dialog (Alt+F7), but it operates as a linear file walker rather than an instant,
                pre-indexed inverted search database. Searching across hundreds of thousands of files or
                scanning document contents can be noticeably slow on large solid-state or networked drives.
              </li>
            </ul>
            <p>
              Depending on what your daily workflow demands, the right alternative might be a more modern
              dual-pane manager, a fully free and open-source orthodox tool, or a lightweight,
              search-first utility designed for instant document discovery.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              The Best Orthodox &amp; Dual-Pane Alternatives
            </h2>
            <p style={{ marginBottom: '24px' }}>
              If your daily work relies strictly on the two-panel side-by-side workflow, batch renaming,
              and keyboard shortcuts, these direct dual-pane replacements offer varying balances of
              modernity, customizability, and open-source freedom.
            </p>

            {/* Alternative 1: Directory Opus */}
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                1. Directory Opus (DOpus) — The Ultimate Commercial Powerhouse
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                If you love the depth of Total Commander but desire a fully modern, native 64-bit
                application designed for modern Windows, Directory Opus is the gold standard. Originating
                on the Commodore Amiga and actively developed for decades, DOpus provides an astonishing
                level of customizability.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Key Strengths:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Full dual-pane or single-pane flexible layouts with multi-tab support.</li>
                <li>Comprehensive integrated preview pane supporting images, audio, video, and documents.</li>
                <li>Complete UI personalization: toolbars, context menus, hotkeys, and status bars.</li>
                <li>Built-in VBScript and JScript scripting support for complex automated workflows.</li>
                <li>Native multi-threaded file copying and queuing engine.</li>
              </ul>
              <p style={{ marginBottom: '0' }}>
                <strong>The Trade-off:</strong> Cost and complexity. Directory Opus Light starts at
                approximately $49 AUD, while the full Pro version costs around $89 AUD. For users who do
                not require enterprise-grade scripting and deep metadata manipulation, DOpus can feel like
                overkill.
              </p>
            </div>

            {/* Alternative 2: Double Commander */}
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                2. Double Commander — The Open-Source Standard
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                Double Commander is a cross-platform, open-source file manager inspired directly by Total
                Commander. It runs natively on Windows, Linux, and macOS, making it the top choice for
                users who operate across multiple operating systems.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Key Strengths:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                <li>100% free and open-source (GPLv2 licensed).</li>
                <li>Direct support for Total Commander plugins (WCX, WDX, and WLX formats).</li>
                <li>Internal text viewer (F3) with syntax highlighting for source code and hex view.</li>
                <li>Tabbed navigation inside both panels with persistent directory histories.</li>
                <li>Multi-threaded background file operations with pause and resume capabilities.</li>
              </ul>
              <p style={{ marginBottom: '0' }}>
                <strong>The Trade-off:</strong> The visual presentation remains very close to traditional
                orthodox file managers. It does not use modern Windows 11 UI components, and finding files
                still depends on active directory navigation rather than instant local content indexing.
              </p>
            </div>

            {/* Alternative 3: Multi Commander */}
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                3. Multi Commander — Modern Tabbed Dual-Pane Management
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                Multi Commander is a freeware Windows file manager built from the ground up for speed. It
                retains the classic dual-panel layout but incorporates a cleaner, tab-centric interface
                with customizable button panels and dedicated extensions.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Key Strengths:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Tabs for each panel, allowing dozens of open folders without window clutter.</li>
                <li>Built-in tools for audio tag editing, image conversion, and checksum verification.</li>
                <li>Custom Multi-Script engine to automate repetitive file management tasks.</li>
                <li>Non-blocking background workers that keep the UI responsive during massive file transfers.</li>
              </ul>
              <p style={{ marginBottom: '0' }}>
                <strong>The Trade-off:</strong> The interface can appear cluttered out of the box due to
                numerous default toolbars, requiring time to trim down unnecessary buttons.
              </p>
            </div>

            {/* Alternative 4: Altap Salamander */}
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                4. Altap Salamander — Lightweight &amp; Freeware Polish
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                Originally a commercial competitor to Total Commander, Altap Salamander was released as
                free software by its developers in recent years. It is renowned for its lightweight
                memory footprint, fast startup time, and high stability.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Key Strengths:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Completely free without trial limitations or nag screens.</li>
                <li>Exceptionally low RAM usage, often running smoothly on less than 20 MB.</li>
                <li>Clean, well-organized configuration menus compared to many orthodox rivals.</li>
                <li>Solid archive support (ZIP, RAR, 7z, TAR, ISO) and built-in FTP plugin.</li>
              </ul>
              <p style={{ marginBottom: '0' }}>
                <strong>The Trade-off:</strong> Development cadence is relatively slow, and it lacks
                modern touches like cloud storage bridges, high-DPI modern icon sets, or instant content
                indexing.
              </p>
            </div>

            {/* Alternative 5: Far Manager */}
            <div className="card" style={{ padding: '28px' }}>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                5. Far Manager — The Console-Based Pure Keyboard Experience
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                Far Manager takes orthodox file management back to its pure terminal roots. Running inside
                the Windows Console or Windows Terminal, Far Manager provides an ultra-fast, text-based
                user interface (TUI) that can be operated entirely without touching a mouse.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Key Strengths:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
                <li>Runs seamlessly inside Windows Terminal, SSH sessions, or minimal environments.</li>
                <li>Zero GUI rendering overhead; instantaneous keystroke response.</li>
                <li>Thriving open-source plugin ecosystem (Lua scripting, macro recording, Git integration).</li>
              </ul>
              <p style={{ marginBottom: '0' }}>
                <strong>The Trade-off:</strong> Not suitable for users who want visual thumbnails, drag-and-drop
                mouse interactions, or rich graphical document previews.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              Modern GUI File Managers for Windows 11
            </h2>
            <p style={{ marginBottom: '20px' }}>
              For users whose primary motivation for seeking a Total Commander alternative is simply that
              the classic UI feels dated, modern GUI replacements attempt to blend Windows 11 Fluent
              Design aesthetics with enhanced file browsing.
            </p>
            <p style={{ marginBottom: '16px' }}>
              <strong>Files App (Files Community):</strong> Files is an open-source file manager built
              using the latest Windows App SDK and WinUI 3. It offers Mica translucency, rounded corners,
              native dark mode, tabbed browsing, and an optional dual-pane layout. It looks and feels
              like what the default Windows File Explorer should have been. However, because it relies on
              modern XAML/WinUI frameworks, it can suffer from noticeable input latency and higher memory
              usage (150 MB to 300 MB+) when navigating folders with tens of thousands of items.
            </p>
            <p>
              <strong>One Commander:</strong> One Commander is another modern Windows file manager
              offering dual-pane navigation, Miller columns (macOS Finder-style hierarchical navigation),
              file tagging, and visual tabs. It is fast and visually polished, though mastering its unique
              column layout requires unlearning classic orthodox habits.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              Rethinking File Management: Why Search-First Often Beats Dual-Pane
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Before deciding on a Total Commander replacement, it is worth asking a fundamental question:
              <em> Why did you start using Total Commander in the first place?</em>
            </p>
            <p style={{ marginBottom: '16px' }}>
              For a large percentage of Windows users, the answer is surprisingly simple: default Windows
              File Explorer was too slow, clumsy, and agonizing at searching for files. To escape the dreaded
              green search loading bar, power users adopted dual-pane managers so they could manually
              curate neat, structured folders and find their work by navigating known directory paths.
            </p>
            <p style={{ marginBottom: '16px' }}>
              However, manual directory maintenance in 2025 has become an uphill battle. Everyday work is
              scattered across local SSDs, external backup drives, WhatsApp and Slack downloads, Git
              repositories, and document folders. Maintaining rigid two-pane directory trees to move
              files back and forth takes time away from actual work.
            </p>
            <p style={{ marginBottom: '20px' }}>
              This is where a modern, <strong>search-first file manager</strong> transforms the equation.
              Instead of spending seconds drilling through nested folders, a search-first tool surfaces the
              exact file you need in fractions of a second, regardless of where it is stored.
            </p>

            {/* Spotlight on Filsy */}
            <div
              className="card"
              style={{
                padding: '32px',
                borderLeft: '4px solid var(--documents)',
                background: 'var(--surface)',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--documents)',
                  marginBottom: '8px',
                }}
              >
                Lightweight &amp; Search-First
              </div>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '12px',
                }}
              >
                Filsy — The Modern, Search-First Windows File Manager
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.65 }}>
                Filsy is designed for Windows users who want the blazing responsiveness and efficiency of
                classic power tools, but wrapped in a modern, distraction-free interface tailored for
                content discovery. Rather than forcing you into manual dual-pane directory sorting, Filsy
                focuses on immediate retrieval and lightweight management:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    ⚡ Sub-Second Local Search
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Queries resolve in ~0.02 seconds across all internal SSDs and external drives using an
                    optimized on-device inverted index.
                  </span>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    📄 Deep Content Indexing
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Searches inside PDFs, Microsoft Word (.docx), Excel spreadsheets (.xlsx), plain text,
                    and source code files.
                  </span>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    🔍 On-Device Windows OCR
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Searches text trapped inside screenshots, receipt images, and scans using native Windows
                    OCR without sending anything to the cloud.
                  </span>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    👁️ Dedicated Preview Panel
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Instantly inspect PDFs, Word docs, Excel sheets, and images via the preview button and
                    preview panel without launching heavy reader apps.
                  </span>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    🧹 SHA-256 Duplicate Detection
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Detects exact duplicate files by cryptographic hash rather than just matching names,
                    reclaiming gigabytes of wasted storage.
                  </span>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)' }}>
                  <strong style={{ display: 'block', color: 'var(--ink)', marginBottom: '4px' }}>
                    🔒 100% Offline &amp; Private
                  </strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                    Zero telemetry, zero cloud calls, no user accounts required. Built specifically for
                    Windows 10 (1809+) and Windows 11 64-bit.
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '0' }}>
                For users who find themselves using Total Commander primarily as a reliable way to locate
                lost files, inspect archives, and avoid Windows Explorer crashes, Filsy offers a modern,
                streamlined alternative that solves the root problem in milliseconds.
              </p>
            </div>
          </section>

          {/* Section 5: Comparison Table */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              Comprehensive Comparison: Total Commander vs. Top Alternatives
            </h2>
            <p style={{ marginBottom: '20px' }}>
              The following matrix compares Total Commander against its primary dual-pane competitors and
              modern desktop alternatives across critical metrics:
            </p>

            <div
              style={{
                overflowX: 'auto',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                marginBottom: '28px',
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '0.92rem',
                }}
              >
                <thead>
                  <tr style={{ background: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Tool</th>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Primary Philosophy</th>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>User Interface</th>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Content Search &amp; OCR</th>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Memory Footprint</th>
                    <th style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Pricing Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Total Commander</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Orthodox Dual-Pane</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Classic Win32 (90s Retro)</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Basic text search (slow on SSDs); No OCR</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Very Light (&lt;15 MB)</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>$46 USD Shareware</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Directory Opus</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Configurable Dual-Pane</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Modern Ribbon / Highly Customizable</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Advanced filters &amp; regex; No OCR</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Moderate (~50–100 MB)</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>$49–$89 AUD Commercial</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Double Commander</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Open-Source Orthodox</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Classic Tabbed Orthodox</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Text string search; No OCR</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Light (~30–50 MB)</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Free &amp; Open Source (GPLv2)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Files App</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Modern Explorer Replacement</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Windows 11 Fluent / WinUI 3</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Windows Indexer dependent; No OCR</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Heavy (150–300 MB+)</td>
                    <td style={{ padding: '14px 16px', color: 'var(--muted)' }}>Free &amp; Open Source</td>
                  </tr>
                  <tr style={{ background: 'rgba(124, 92, 252, 0.04)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--documents)' }}>Filsy</td>
                    <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>Search-First Desktop Manager</td>
                    <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>Clean, Modern &amp; Minimalist</td>
                    <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>
                      <strong>Sub-second (~0.02s) indexed text (.docx, .xlsx, PDF) + Local OCR</strong>
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>Ultra-light native Windows app</td>
                    <td style={{ padding: '14px 16px', color: 'var(--ink)' }}>
                      <strong>$9 lifetime special (first 99 users), $19 regular</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: How to Choose */}
          <section style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '32px',
                marginBottom: '16px',
              }}
            >
              How to Choose the Right Tool for Your Workflow
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Every power user has distinct pain points. To determine which Total Commander alternative
              best suits your daily routine, consider where you spend the most mental energy:
            </p>
            <ol style={{ paddingLeft: '24px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '14px' }}>
                <strong>If you need enterprise-level scripting and deep customization:</strong> Choose{' '}
                <strong>Directory Opus</strong>. Its granular configuration options, scripting engines,
                and advanced multi-threading handle the heaviest file manipulation workflows imaginable.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>If you want Total Commander features with open-source freedom:</strong> Choose{' '}
                <strong>Double Commander</strong>. It preserves the classic keyboard shortcuts, supports
                Total Commander plugins, and works across Windows, Linux, and macOS without licensing fees.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>If you live inside the Windows Terminal:</strong> Choose <strong>Far Manager</strong>.
                It provides the purest keyboard-only orthodox file management without GUI overhead.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>If you simply want a prettier Windows Explorer with tabs:</strong> Look at{' '}
                <strong>Files App</strong> for its native Windows 11 Fluent aesthetic.
              </li>
              <li style={{ marginBottom: '14px' }}>
                <strong>If you want to stop organizing folders and start finding files instantly:</strong>{' '}
                Choose <strong>Filsy</strong>. If your main objective is sub-second discovery, deep search
                inside PDFs and Office documents, reading text out of screenshots via local OCR, and safe
                duplicate cleanup without cloud telemetry, a search-first approach will save you hours
                every week.
              </li>
            </ol>
          </section>
        </article>

        {/* Section 7: Bottom CTA Card */}
        <div
          className="card"
          style={{
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            marginTop: '48px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: 'var(--music)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Fast, Private Windows Search
          </div>
          <h2
            style={{
              fontSize: '1.9rem',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              marginBottom: '12px',
            }}
          >
            Tired of Endless Folder Drilling? Try Filsy.
          </h2>
          <p
            style={{
              maxWidth: '620px',
              margin: '0 auto 24px',
              color: 'var(--muted)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
            }}
          >
            Experience sub-second (~0.02s) local search across all your drives. Index document contents,
            extract text from screenshots with on-device OCR, and preview files instantly. 100% offline,
            zero telemetry, and no account required.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '16px',
            }}
          >
            <a
              href={APP_CONFIG.microsoftStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '1rem' }}
            >
              Get from Microsoft Store
            </a>
            <Link
              to="/pricing"
              className="btn btn-secondary"
              style={{ padding: '12px 24px', fontSize: '1rem' }}
            >
              View Pricing ($9 Lifetime Special)
            </Link>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--subtle)', margin: 0 }}>
            Special early pricing: $9 one-time lifetime license for the first 99 users (regular $19).
            Windows 10 (1809+) &amp; Windows 11 (64-bit).
          </p>
        </div>
      </div>
    </div>
  );
};
