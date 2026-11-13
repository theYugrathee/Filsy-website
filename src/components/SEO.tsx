import React, { useEffect } from 'react';
import type { SEOPageData } from '../seo/seoConfig';
import {
  SEO_CONFIG,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from '../seo/seoConfig';

interface SEOProps {
  routeKey?: string;
  page?: Partial<SEOPageData>;
}

function updateMetaTag(
  selector: string,
  attributeName: string,
  attributeValue: string,
  content: string
) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkRel(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({ routeKey, page: customPage }) => {
  const basePageData: SEOPageData =
    (routeKey && SEO_CONFIG[routeKey]) || {
      title: `${SITE_NAME} — Fast Windows File Search & Management`,
      description:
        'Filsy is a fast, private, local-first file manager and desktop search tool for Windows 10 and 11.',
      canonical: 'https://filsy.space/',
      robots: 'index, follow',
      ogType: 'website',
    };

  const finalData: SEOPageData = {
    ...basePageData,
    ...customPage,
    keywords: customPage?.keywords || basePageData.keywords,
    schema: customPage?.schema || basePageData.schema,
    breadcrumbs: customPage?.breadcrumbs || basePageData.breadcrumbs,
  };

  useEffect(() => {
    // 1. Title
    document.title = finalData.title;

    // 2. Primary Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', finalData.description);
    updateMetaTag(
      'meta[name="robots"]',
      'name',
      'robots',
      finalData.robots || 'index, follow'
    );
    if (finalData.keywords && finalData.keywords.length > 0) {
      updateMetaTag(
        'meta[name="keywords"]',
        'name',
        'keywords',
        finalData.keywords.join(', ')
      );
    }

    // 3. Canonical Link
    updateLinkRel('canonical', finalData.canonical);

    // 4. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', finalData.title);
    updateMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      finalData.description
    );
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', finalData.canonical);
    updateMetaTag(
      'meta[property="og:type"]',
      'property',
      'og:type',
      finalData.ogType || 'website'
    );
    updateMetaTag(
      'meta[property="og:image"]',
      'property',
      'og:image',
      finalData.ogImage || DEFAULT_OG_IMAGE
    );
    updateMetaTag(
      'meta[property="og:image:alt"]',
      'property',
      'og:image:alt',
      finalData.ogImageAlt || `${SITE_NAME} Application Icon`
    );
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter Card Tags
    updateMetaTag(
      'meta[name="twitter:card"]',
      'name',
      'twitter:card',
      'summary_large_image'
    );
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', finalData.title);
    updateMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      finalData.description
    );
    updateMetaTag(
      'meta[name="twitter:image"]',
      'name',
      'twitter:image',
      finalData.ogImage || DEFAULT_OG_IMAGE
    );
    updateMetaTag(
      'meta[name="twitter:image:alt"]',
      'name',
      'twitter:image:alt',
      finalData.ogImageAlt || `${SITE_NAME} Application Icon`
    );

    // 6. JSON-LD Schema.org Injection
    const SCRIPT_ID = 'filsy-jsonld-schema';
    let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (finalData.schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = SCRIPT_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      const schemaContent = Array.isArray(finalData.schema)
        ? {
            '@context': 'https://schema.org',
            '@graph': finalData.schema.map((item) => {
              // Strip redundant outer @context inside @graph
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { '@context': _discard, ...rest } = item as Record<string, unknown>;
              return rest;
            }),
          }
        : finalData.schema;

      scriptEl.textContent = JSON.stringify(schemaContent, null, 2);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Clean up script on unmount or page change
      const el = document.getElementById(SCRIPT_ID);
      if (el) el.remove();
    };
  }, [finalData]);

  return null;
};

