import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { APP_CONFIG } from '../../config';

export const QDirAlternativePage: React.FC = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Q-Dir Alternatives: Multi-Pane File Managers for Windows',
    description:
      'Looking for a Q-Dir alternative? Compare the best multi-pane Windows file managers including FreeCommander, Tablacus Explorer, and Directory Opus, plus when to pair them with local search.',
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
      '@id': 'https://filsy.space/blog/q-dir-alternative',
    },
  };

  return (
    <div className="page-wrapper">
      <SEO
        page={{
          title: 'Q-Dir Alternatives: Multi-Pane File Managers for Windows | Filsy',
          description:
            'Looking for a Q-Dir alternative? Compare the best multi-pane Windows file managers including FreeCommander, Tablacus Explorer, and Directory Opus, plus when to pair them with local search.',
          canonical: 'https://filsy.space/blog/q-dir-alternative',
          keywords: [
            'q-dir alternative',
            'q-dir alternatives windows',
            'multi-pane file manager windows',
            'quad explorer alternative',
            'freecommander vs q-dir',
            'tablacus explorer',
            'directory opus alternative',
            'dual pane file explorer windows 11',
          ],
          ogType: 'article',
          schema: articleSchema,
        }}
      />

      <div className="wrap" style={{ maxWidth: '840px', padding: '48px 20px 80px' }}>
        {/* Article Header */}
        <header style={{ marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--documents)',
              marginBottom: '12px',
            }}
          >
            Windows File Management Guide
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '18px',
            }}
          >
            Q-Dir Alternatives: Multi-Pane File Managers for Windows
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.65,
              color: 'var(--muted)',
              marginBottom: '20px',
            }}
          >
            Q-Dir earned its reputation as the &quot;Quad Explorer&quot; by letting Windows users juggle four distinct folder views on one screen. But as desktop displays grew sharper, user interfaces evolved, and file collections expanded into hundreds of thousands of documents, many power users began looking for modern alternatives.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '0.88rem',
              color: 'var(--subtle)',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '24px',
            }}
          >
            <span>Published: November 1, 2025</span>
            <span>&bull;</span>
            <span>10 min read</span>
            <span>&bull;</span>
            <span>By Filsy Editorial Team</span>
          </div>
        </header>

        {/* Content Section 1 */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Why Look for a Q-Dir Alternative?
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Nenad Hrg&apos;s Q-Dir has been a staple of Windows utility collections for well over a decade. Its core proposition is straightforward: instead of Alt-Tabbing between separate Windows Explorer windows or trying to snap two windows side-by-side using Windows Aero Snap, Q-Dir gives you up to four simultaneous folder panes (a 4-way quad grid, 3-way split, or dual vertical/horizontal split) inside a single lightweight executable.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Despite its undeniable utility, several persistent pain points drive users to search for alternatives:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px', color: 'var(--ink)', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Dated, Cluttered Interface:</strong> Q-Dir retains an interface reminiscent of the Windows XP and Windows 7 eras. Dense toolbars, tiny default icons, and non-standard menu placements can make the software feel visually fatiguing on modern high-resolution screens.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>High-DPI and Multi-Monitor Quirks:</strong> On modern 4K monitors and mixed-scaling multi-monitor setups (for instance, a 150% scaled laptop screen next to a 100% scaled 1440p monitor), Q-Dir occasionally suffers from blurry fonts, misplaced context menus, or clipped buttons.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Stability with Cloud &amp; Shell Extensions:</strong> When working heavily with cloud-synced folders (OneDrive Files On-Demand, Google Drive virtual mounts, or Dropbox), Q-Dir can sometimes freeze while polling directory status or executing third-party shell context menu extensions.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Limited Native Content Search:</strong> While Q-Dir excels at visual drag-and-drop operations between folders you already know, its search capabilities rely either on native Windows search or basic filename string matching. It cannot index deep content inside PDFs, Office documents, or image text.
            </li>
          </ul>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)' }}>
            Depending on whether you need a true multi-pane file manager or a faster way to eliminate manual folder navigation altogether, there are several solid solutions available on Windows 10 and 11 today.
          </p>
        </section>

        {/* Content Section 2 */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            The Best Multi-Pane File Managers to Replace Q-Dir
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '24px' }}>
            If your daily work involves moving files between staging servers, SD cards, and project archives, a dedicated multi-pane file manager is indispensable. Here are the five strongest contenders.
          </p>

          {/* Alternative 1: FreeCommander XE */}
          <div className="card" style={{ padding: '28px', marginBottom: '24px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                1. FreeCommander XE
              </h3>
              <span style={{ fontSize: '0.82rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--music)', fontWeight: 600 }}>
                Best Free Dual-Pane All-Rounder
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              FreeCommander XE is widely regarded as one of the best free file managers for Windows. While it defaults to a two-pane (dual) view rather than Q-Dir&apos;s four panes, each pane supports multiple tabs, allowing you to keep dozens of directories open without cluttering your desktop.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>Key Strengths:</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                <li>Built-in file viewer (Lister) for quick inspection of hex, binary, text, and image formats.</li>
                <li>Comprehensive archive handling (ZIP, CAB, RAR without needing third-party extractors).</li>
                <li>Powerful multi-rename tool and folder synchronization utility built straight into the UI.</li>
                <li>Fully portable version available for USB flash drives.</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--subtle)', margin: 0 }}>
              <strong>Trade-off:</strong> The interface features a dense array of buttons that can overwhelm newcomers, and it does not natively offer a 4-pane simultaneous grid layout.
            </p>
          </div>

          {/* Alternative 2: Tablacus Explorer */}
          <div className="card" style={{ padding: '28px', marginBottom: '24px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                2. Tablacus Explorer
              </h3>
              <span style={{ fontSize: '0.82rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.12)', color: 'var(--videos)', fontWeight: 600 }}>
                Closest 4-Pane Grid Match (Open Source)
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              If you specifically fell in love with Q-Dir because of its 4-pane grid layout, Tablacus Explorer is your closest drop-in replacement. Created by Gaku, Tablacus is a lightweight, open-source tabbed file manager with full support for multi-pane configurations—including 1, 2, 3, or 4 panes in horizontal, vertical, or 2x2 grid setups.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>Key Strengths:</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                <li>Modular add-on architecture: install hundreds of community plugins for tabs, gestures, preview tooltips, and dark modes.</li>
                <li>100% portable: writes no configuration data to the Windows Registry.</li>
                <li>Complete flexibility to arrange panes in 4-way splits, 3-column layouts, or tabbed groups.</li>
                <li>Extremely small download size (&lt; 2 MB).</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--subtle)', margin: 0 }}>
              <strong>Trade-off:</strong> Out of the box, Tablacus is barebones. You must spend 15 to 30 minutes selecting and enabling add-ons to achieve your ideal workflow.
            </p>
          </div>

          {/* Alternative 3: Directory Opus */}
          <div className="card" style={{ padding: '28px', marginBottom: '24px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                3. Directory Opus (DOpus)
              </h3>
              <span style={{ fontSize: '0.82rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(124, 92, 252, 0.12)', color: 'var(--documents)', fontWeight: 600 }}>
                Commercial Powerhouse &amp; Explorer Replacement
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              Originating on the Commodore Amiga and actively engineered for modern 64-bit Windows systems, Directory Opus is the gold standard of commercial file management. It is designed to completely replace Windows Explorer if desired, offering dual-pane layouts, tabbed navigation, and unprecedented configurability.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>Key Strengths:</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                <li>Multi-threaded performance: large file operations do not freeze the UI or block other file transfers.</li>
                <li>Integrated file preview panel supporting images, documents, audio, and metadata editing.</li>
                <li>Extensive scripting support (VBScript, JScript) to automate complex file sorting routines.</li>
                <li>Top-tier Windows 11 integration, including native support for modern context menus.</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--subtle)', margin: 0 }}>
              <strong>Trade-off:</strong> Substantial cost (around $60 to $85 AUD for a Pro license) and a configuration tree with thousands of options that takes time to master.
            </p>
          </div>

          {/* Alternative 4: Total Commander */}
          <div className="card" style={{ padding: '28px', marginBottom: '24px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                4. Total Commander
              </h3>
              <span style={{ fontSize: '0.82rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.12)', color: 'var(--archives)', fontWeight: 600 }}>
                Classic Keyboard-Driven Orthodox Manager
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              Christian Ghisler&apos;s Total Commander has been actively maintained for over 30 years. It adheres to the classic two-panel &quot;orthodox&quot; file manager design popularized by Norton Commander. For system administrators, engineers, and keyboard purists, Total Commander remains the fastest tool for directory comparisons.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>Key Strengths:</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                <li>Unrivaled keyboard speed: execute selections, comparisons, and moves using standard hotkeys (F5, F6, Tab).</li>
                <li>Massive third-party plugin ecosystem (WLX, WDX, WFX, WCX) covering virtually every file format and protocol.</li>
                <li>Built-in FTP/SFTP client and directory synchronization engine.</li>
                <li>Rock-solid stability across millions of files.</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--subtle)', margin: 0 }}>
              <strong>Trade-off:</strong> Highly utilitarian 1990s aesthetic that discourages mouse-centric users, and it requires a commercial license ($44) after a 30-day evaluation.
            </p>
          </div>

          {/* Alternative 5: Files App */}
          <div className="card" style={{ padding: '28px', marginBottom: '24px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                5. Files App (Files Community)
              </h3>
              <span style={{ fontSize: '0.82rem', padding: '4px 10px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--music)', fontWeight: 600 }}>
                Best Modern Windows 11 Fluent Design
              </span>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '14px' }}>
              If your primary complaint about Q-Dir is that it looks like software from 2006, the open-source Files App is the visual opposite. Built with Microsoft&apos;s modern Fluent Design System, it seamlessly integrates with Windows 11 aesthetics, offering tabs, dual-pane layout, colored tags, and smooth animations.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>Key Strengths:</strong>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.94rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                <li>Gorgeous Fluent UI with mica blur effects and polished dark mode.</li>
                <li>Dual-pane mode with horizontal and vertical split options.</li>
                <li>File tagging system similar to macOS Finder tags for organizing across folders.</li>
                <li>Active open-source development community.</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--subtle)', margin: 0 }}>
              <strong>Trade-off:</strong> Noticeably higher CPU and RAM usage than classic C++ utilities like Q-Dir or FreeCommander, with occasional lag when rendering large directories.
            </p>
          </div>
        </section>

        {/* Content Section 3: Comparison Table */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Direct Comparison: Q-Dir vs. Top Windows File Tools
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '20px' }}>
            To help clarify which tool matches your day-to-day workflow, here is how each option compares across key attributes:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.92rem',
                lineHeight: 1.5,
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)', background: 'var(--surface)' }}>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--ink)' }}>Software</th>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--ink)' }}>Primary Layout</th>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--ink)' }}>Deep Content Search</th>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--ink)' }}>Memory Footprint</th>
                  <th style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--ink)' }}>License &amp; Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>Q-Dir</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>4-Pane (Quad) / Dual</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Filename only</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Very Low (&lt;10 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Freeware</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>Tablacus Explorer</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>1 to 4 Panes + Tabs</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Plugin dependent</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Very Low (&lt;15 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Free (Open Source)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>FreeCommander XE</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Dual-Pane + Tabs</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Basic text filters</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Low (~25 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Free (Donation optional)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>Directory Opus</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Dual-Pane + Tabs + Panels</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Windows Indexer hooks</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Moderate (~60 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Paid ($60–$85 AUD)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>Total Commander</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Orthodox Dual-Pane</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Raw text scan (Slow)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Very Low (&lt;10 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Shareware ($44)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600 }}>Files App</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Dual-Pane + Tabs</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Basic search</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Higher (~150–300 MB)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)' }}>Free / Store Donation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line)', background: 'rgba(124, 92, 252, 0.04)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--documents)' }}>Filsy</td>
                  <td style={{ padding: '12px 14px', color: 'var(--ink)' }}>Search &amp; Preview Workspace</td>
                  <td style={{ padding: '12px 14px', color: 'var(--ink)' }}>Full text (PDF, DOCX, XLSX, OCR)</td>
                  <td style={{ padding: '12px 14px', color: 'var(--ink)' }}>Zero-drain background</td>
                  <td style={{ padding: '12px 14px', color: 'var(--ink)' }}>$9 early / $19 lifetime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Content Section 4 */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Multi-Pane File Management vs. Deep File Search: The Critical Difference
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            When users look for a multi-pane file manager, they often fall into one of two very distinct camps. Understanding which camp you belong to saves hours of frustration.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
            Case A: The True Reorganization Workflow
          </h3>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            In this scenario, you know exactly what your directories represent. For example, you are a photographer moving files from an SD card into a client directory, while archiving last month&apos;s raw footage to an external NAS drive. You genuinely need multiple panes visible side-by-side to compare folder sizes, verify transferred batches, and perform drag-and-drop operations without losing your visual anchor. For this work, a multi-pane tool like FreeCommander XE, Tablacus, or Directory Opus is the ideal choice.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
            Case B: The &quot;Folder Hunting&quot; Trap
          </h3>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Many users keep four panes open in Q-Dir not because they love moving files, but because their hard drives are cluttered. They have one pane set to <code>C:\Users\Name\Downloads</code>, another pane open to <code>D:\Work\Projects\2024</code>, a third pane open to <code>Desktop\Unsorted</code>, and a fourth pane pointed at an external drive.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Whenever they need a specific invoice, tax receipt, design specification, or contract, they click between all four panes, scanning folder after folder hoping to remember where they saved it. In this scenario, multi-pane file management is simply a manual band-aid for an inadequate desktop search system.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)' }}>
            If your primary bottleneck is finding documents, spreadsheets, and screenshots rather than sorting directory trees, opening more panes will not solve your problem. What you need instead is sub-second local search that indexes what is actually written inside your files.
          </p>
        </section>

        {/* Content Section 5: Introducing Filsy */}
        <section style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            How Filsy Complements Your Windows File Workflow
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Filsy was built specifically to solve the search and discovery half of the Windows desktop equation. Rather than replacing Windows Explorer or trying to force your workflow into a four-way split grid, Filsy acts as a high-speed search companion that locates any file across internal and external drives in approximately 0.02 seconds.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '20px' }}>
            Here is how Filsy changes the way you interact with your files:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
            <div className="card" style={{ padding: '22px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                Sub-Second Local Search (~0.02s)
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                Query hundreds of thousands of files across all drives with near-instant responsiveness. All indexing is performed strictly on your local PC with zero battery drain.
              </p>
            </div>

            <div className="card" style={{ padding: '22px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                Deep Content Indexing
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                Do not remember the filename? Filsy indexes the actual text inside PDF documents, Word documents (.docx), Excel workbooks (.xlsx), plain text files, and source code.
              </p>
            </div>

            <div className="card" style={{ padding: '22px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                On-Device Windows OCR
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                Find screenshots, scanned receipts, and infographics by searching for the words visible inside the image. Filsy uses Windows on-device OCR—no images are ever sent to the cloud.
              </p>
            </div>

            <div className="card" style={{ padding: '22px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                Preview Panel &amp; SHA-256 Duplicates
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--muted)', margin: 0 }}>
                Inspect documents and spreadsheets instantly using the built-in preview button or preview panel without waiting for heavy desktop applications to launch. Spot identical duplicate downloads using cryptographic SHA-256 matching.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>
            Best of all, Filsy is 100% offline, requires no user account, transmits zero telemetry, and is built specifically for 64-bit Windows 10 (version 1809+) and Windows 11.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--ink)' }}>
            The ideal power-user setup is a hybrid one: keep a multi-pane tool like FreeCommander XE or Tablacus for complex batch operations, and use Filsy whenever you need to find any piece of information on your PC in the blink of an eye.
          </p>
        </section>

        {/* Content Section 6: Practical Advice */}
        <section style={{ marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            Which Tool Should You Choose?
          </h2>
          <ol style={{ paddingLeft: '24px', color: 'var(--ink)', lineHeight: 1.85, fontSize: '1.02rem' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Choose Tablacus Explorer</strong> if you want an open-source, portable utility that reproduces Q-Dir&apos;s exact 4-pane split grid layout with customizable modern add-ons.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Choose FreeCommander XE</strong> if you want the most stable, feature-rich free dual-pane manager with built-in folder syncing, archive tools, and file viewing.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Choose Directory Opus</strong> if you are a professional willing to invest in an enterprise-grade commercial utility that can fully replace Windows Explorer.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Choose Files App</strong> if you want modern Windows 11 Fluent Design aesthetics, touch friendliness, and simple dual-pane browsing.
            </li>
            <li>
              <strong>Add Filsy to Your Toolkit</strong> if you find yourself opening multiple panes simply to track down scattered PDFs, spreadsheets, and screenshots across your drives.
            </li>
          </ol>
        </section>

        {/* Bottom CTA Card */}
        <section className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--card)', border: '1px solid var(--line)' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--documents)',
              marginBottom: '10px',
            }}
          >
            Stop Digging Through Folders
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '12px',
            }}
          >
            Find Any File in 0.02 Seconds with Filsy
          </h2>
          <p
            style={{
              maxWidth: '620px',
              margin: '0 auto 24px',
              fontSize: '1rem',
              lineHeight: 1.65,
              color: 'var(--muted)',
            }}
          >
            Sub-second desktop search, deep content indexing for Word, Excel, and PDFs, and private on-device OCR for screenshots. 100% offline, zero telemetry, and built natively for Windows 10 &amp; 11.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={APP_CONFIG.microsoftStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '1rem', textDecoration: 'none' }}
            >
              Get from Microsoft Store
            </a>
            <Link
              to="/pricing"
              className="btn btn-secondary"
              style={{ padding: '12px 24px', fontSize: '1rem', textDecoration: 'none' }}
            >
              View Pricing — $9 Lifetime (First 99 Users)
            </Link>
          </div>
          <p style={{ marginTop: '16px', fontSize: '0.84rem', color: 'var(--subtle)' }}>
            One-time purchase ($9 early launch price, regular $19). No subscriptions. All processing stays strictly on your PC.
          </p>
        </section>
      </div>
    </div>
  );
};
