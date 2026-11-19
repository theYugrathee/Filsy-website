import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { Search, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Filsy Blog & Guides — Windows File Search & Productivity',
  description: 'Guides, comparisons, and power-user tutorials for finding, organizing, and previewing files on Windows 10 and 11.',
  url: 'https://filsy.space/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Filsy',
    url: 'https://filsy.space',
  },
};

const CATEGORIES = [
  'All',
  'Comparison',
  'Tutorial',
  'Roundup',
  'Guide',
  'Search',
] as const;

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'All' ||
        post.category.toUpperCase().includes(selectedCategory.toUpperCase());

      return matchesQuery && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="page-wrapper">
      <SEO
        page={{
          title: 'Windows File Search, Organization & Productivity Guides — Filsy Blog',
          description:
            'Browse 50+ in-depth guides on File Explorer alternatives, searching inside PDFs and Excel files, removing duplicate files, Windows Search fixes, and productivity tips.',
          canonical: 'https://filsy.space/blog',
          ogType: 'website',
          keywords: [
            'windows file search blog',
            'file explorer alternatives',
            'how to search inside files windows',
            'find duplicate files windows 11',
            'windows productivity guides',
          ],
          schema: blogSchema,
        }}
      />

      <div className="wrap" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '56px', paddingBottom: '80px' }}>
        {/* Header Section */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--surface)', border: '1px solid var(--line)', padding: '6px 16px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
            <BookOpen size={15} style={{ color: 'var(--documents)' }} />
            <span>KNOWLEDGE BASE &amp; GUIDES</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px', color: 'var(--ink)' }}>
            Windows File Search &amp; Productivity Guides
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Practical tutorials, unbiased comparisons, and power-user techniques to help you master file discovery, indexing, and decluttering on Windows.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '580px', margin: '0 auto 24px', position: 'relative' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--subtle)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 50+ guides (e.g. PDF, Everything, duplicate, slow search)..."
              style={{
                width: '100%',
                padding: '14px 16px 14px 46px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--ink)',
                fontSize: '0.96rem',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: active ? 700 : 500,
                    border: '1px solid',
                    borderColor: active ? 'var(--documents)' : 'var(--line)',
                    background: active ? 'var(--documents)' : 'var(--surface)',
                    color: active ? '#fff' : 'var(--muted)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat === 'All' ? `All (${BLOG_POSTS.length})` : cat}
                </button>
              );
            })}
          </div>
        </header>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--muted)', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
          <span>Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'guide' : 'guides'}</span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              style={{ background: 'none', border: 'none', color: 'var(--documents)', cursor: 'pointer', fontSize: '0.86rem', padding: 0, textDecoration: 'underline' }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 20px', background: 'var(--surface)', borderRadius: '16px', border: '1px dashed var(--line)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--ink)', fontWeight: 600, marginBottom: '8px' }}>
              No guides found matching "{searchQuery}"
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '16px' }}>
              Try searching for terms like "PDF", "Excel", "duplicate", "speed", or "Explorer".
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn btn-secondary btn-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: '16px',
                  padding: '24px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'var(--documents)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'var(--bg-soft, rgba(0,0,0,0.04))',
                      color: 'var(--documents)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid var(--line)',
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    marginBottom: '10px',
                    color: 'var(--ink)',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--documents)',
                    marginTop: 'auto',
                  }}
                >
                  <span>Read guide</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Card */}
        <div
          className="card"
          style={{
            marginTop: '64px',
            padding: '40px 32px',
            textAlign: 'center',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '20px',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--documents)', marginBottom: '12px' }}>
            <Sparkles size={18} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Supercharge Windows Search</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, marginBottom: '12px', color: 'var(--ink)' }}>
            Search every document, spreadsheet, and screenshot in ~0.02s
          </h3>
          <p style={{ color: 'var(--muted)', maxWidth: '620px', margin: '0 auto 28px', fontSize: '1rem', lineHeight: 1.6 }}>
            Filsy brings instant full-text search, on-device OCR, and in-app file previews to Windows 10 &amp; 11. 100% offline, zero cloud telemetry.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://apps.microsoft.com/detail/9N2ZWJ08B7X0?hl=en-us&gl=IN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Filsy on Microsoft Store
            </a>
            <Link to="/pricing" className="btn btn-secondary">
              View Pricing Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
