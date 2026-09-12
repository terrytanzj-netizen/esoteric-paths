import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LangSetter from './LangSetter';
import { ARTICLE_DETAILS } from '../../../data/articles';

function renderBody(body: string) {
  const parts = body.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link key={i} href={match[2]} style={{ color: '#C9A227', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          {match[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function generateStaticParams() {
  return Object.keys(ARTICLE_DETAILS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLE_DETAILS[params.slug];
  if (!article) return { title: 'Esoteric Paths' };
  const ogLocale = article.lang === 'zh' ? 'zh_CN' : 'en_US';
  return {
    title: `${article.title} | Esoteric Paths`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.esotericpaths.com/insights/${article.slug}`,
      // Point hreflang at the article itself, in its own language. Declaring
      // every article as en-US and pointing at the home page was a wrong signal.
      languages:
        article.lang === 'zh'
          ? { 'zh-CN': `https://www.esotericpaths.com/insights/${article.slug}` }
          : { 'en-US': `https://www.esotericpaths.com/insights/${article.slug}` },
    },
    openGraph: {
      title: `${article.title} | Esoteric Paths`,
      description: article.excerpt,
      url: `https://www.esotericpaths.com/insights/${article.slug}`,
      type: 'article',
      locale: ogLocale,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Esoteric Paths`,
      description: article.excerpt,
      images: ['/og-image.png'],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLE_DETAILS[params.slug];
  if (!article) notFound();

  const isZh = article.lang === 'zh';

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.tldr || article.excerpt,
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    author: { '@type': 'Organization', name: 'Esoteric Paths' },
    publisher: { '@type': 'Organization', name: 'Esoteric Paths' },
    datePublished: '2026-08-01',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.esotericpaths.com/insights/${article.slug}` },
  };

  return (
      <div className={isZh ? 'reveal es-zh' : 'reveal'} role="main" id="main-content" style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem 1.5rem 4rem 1.5rem', background: '#050508', minHeight: '100vh', color: '#E8E4DA', fontFamily: 'var(--font-body)' }}>
      <LangSetter lang={isZh ? 'zh-CN' : 'en'} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Link href="/" style={{ color: '#C9A227', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
        ← {isZh ? '返回起卦' : 'Back to the Matrix'}
      </Link>

      <span style={{ display: 'block', fontSize: '0.75rem', color: '#C9A227', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '2rem' }}>
        {isZh ? 'Esoteric Paths 研究组' : 'By Esoteric Paths Research'} · {article.readTime}
      </span>
      <h1 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0.4rem 0 1rem 0', lineHeight: 1.2, textShadow: '0 0 24px rgba(201,162,39,0.18)' }}>
        {article.title}
      </h1>
      <p style={{ fontSize: '1rem', color: '#C9A227', fontStyle: 'italic', lineHeight: 1.6, marginBottom: article.tldr ? '1.5rem' : '2.5rem', borderLeft: '2px solid #C9A227', paddingLeft: '1rem' }}>
        {article.excerpt}
      </p>

      {article.tldr && (
        <div style={{ margin: '0 0 2.5rem 0', padding: '1.2rem 1.4rem', borderLeft: '3px solid #C9A227', background: 'rgba(201,162,39,0.06)', borderRadius: '0 6px 6px 0' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A227', fontFamily: 'monospace', marginBottom: '0.6rem' }}>
            {isZh ? '核心结论' : 'TL;DR — Direct Answer'}
          </div>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#F4EEDB', lineHeight: 1.75 }}>{article.tldr}</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {article.sections.map((section, i) => (
          <section key={i}>
            <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>{renderBody(section.body)}</p>

            {section.table && (
              <div style={{ overflowX: 'auto', margin: '1.3rem 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr>
                      {section.table.headers.map((h, hi) => (
                        <th key={hi} style={{ textAlign: 'left', padding: '0.7rem 0.9rem', borderBottom: '1px solid rgba(201,162,39,0.4)', color: '#C9A227', fontFamily: 'var(--font-display)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '0.7rem 0.9rem', borderBottom: '1px solid rgba(201,162,39,0.12)', color: '#CDC8BC', lineHeight: 1.6, verticalAlign: 'top' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.bullets && (
              <ul style={{ margin: '1.1rem 0', paddingLeft: '1.2rem', color: '#CDC8BC', fontSize: '0.92rem', lineHeight: 1.8 }}>
                {section.bullets.map((b, bi) => (
                  <li key={bi} style={{ marginBottom: '0.55rem' }}>{b}</li>
                ))}
              </ul>
            )}

            {section.callout && (
              <div style={{ margin: '1.5rem 0', padding: '1.2rem 1.4rem', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '6px', background: 'rgba(201,162,39,0.05)' }}>
                {section.callout.label && (
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A227', fontFamily: 'monospace', marginBottom: '0.8rem' }}>{section.callout.label}</div>
                )}
                <ol style={{ margin: 0, paddingLeft: '1.2rem', color: '#E8E4DA', fontSize: '0.92rem', lineHeight: 1.85 }}>
                  {section.callout.steps.map((s, si) => (
                    <li key={si} style={{ marginBottom: '0.5rem' }}>{s}</li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        ))}
      </div>

      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,162,39,0.2)' }}>
        <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 1rem 0', letterSpacing: '0.05em' }}>
          {isZh ? '相关阅读' : 'Related Readings'}
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {Object.values(ARTICLE_DETAILS)
            .filter((a) => a.lang === article.lang && a.slug !== article.slug)
            .slice(0, 3)
            .map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem',
                  border: '1px solid rgba(201,162,39,0.25)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: '#E8E4DA',
                  background: 'rgba(201,162,39,0.04)',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-display)', lineHeight: 1.3, display: 'block' }}>{a.title}</span>
                <span style={{ fontSize: '0.7rem', color: '#8A8678', marginTop: '0.5rem', display: 'block' }}>{a.readTime}</span>
              </Link>
            ))}
        </div>
      </div>

      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,162,39,0.2)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: '#8A8678', marginBottom: '1rem' }}>
          {isZh ? '想针对你自己的决策做一次推演？' : 'Want a personalized reading for your own decision?'}
        </p>
        <Link href="/" className="es-btn es-btn--gold" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem' }}>
          {isZh ? '起一课 →' : 'Run Your Timing Read →'}
        </Link>
      </div>

      <footer style={{ textAlign: 'center', fontSize: '0.75rem', color: '#5C584E', fontFamily: 'monospace', borderTop: '1px solid rgba(201,162,39,0.1)', paddingTop: '1.5rem', marginTop: '3rem' }}>
        © Esoteric Paths. Deterministic Decision-Timing Infrastructure. All rights reserved.
      </footer>
    </div>
  );
}
