import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ARTICLE_DETAILS } from '../../data/articles';

const ZH_SERIF = "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', 'SimSun', 'STSong', serif";

export const metadata: Metadata = {
  title: 'Strategic Insights — Timing, Negotiation & Decision Architecture | Esoteric Paths',
  description:
    'Long-form essays on Xiao Liu Ren temporal mechanics, negotiation timing, strategic delay, founder conflict and the 72-hour decision window. Written for founders, executives and investors.',
  alternates: {
    canonical: 'https://www.esotericpaths.com/insights',
    languages: { 'en-US': 'https://www.esotericpaths.com/insights' },
  },
  openGraph: {
    title: 'Strategic Insights | Esoteric Paths',
    description:
      'Essays on temporal mechanics, negotiation timing and decision architecture for founders and executives.',
    url: 'https://www.esotericpaths.com/insights',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Esoteric Paths Strategic Insights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Insights | Esoteric Paths',
    description: 'Essays on temporal mechanics, negotiation timing and decision architecture.',
    images: ['/og-image.png'],
  },
};

// Grouped by decision domain rather than by language, so the index reads as a
// body of work instead of a flat list. Anything unmapped still gets published
// under "Further Essays" — a new article can never silently disappear here.
const GROUPS: { label: string; blurb: string; match: string[] }[] = [
  {
    label: 'The Six Palaces',
    blurb: 'Palace-by-palace mechanics — what each temporal state actually means when you have to act.',
    match: ['da-an', 'liu-lian', 'suxi', 'xiaoji', 'kong-wang', 'chi-kou', 'six-palaces', 'horse-mounted'],
  },
  {
    label: 'Business Timing Scenarios',
    blurb: 'Term sheets, hiring, launches, disputes — timing applied to decisions that cost real money.',
    match: [
      'term-sheet',
      'hiring',
      'job-offer',
      'product-launch',
      'contract-negotiation',
      'founder-conflict',
      'crypto-entry',
      'strategic-delay',
      'business-guide',
    ],
  },
  {
    label: 'Method & Cognition',
    blurb: 'Why timing works, where it breaks, and how it compares to the systems you already use.',
    match: [
      '72-hour',
      'decision-timing',
      'ontology-of-time',
      'vs-i-ching',
      'vs-tarot',
      'jungian',
      'western-tarot',
      'for-founders',
    ],
  },
];

export default function InsightsIndex() {
  const all = Object.values(ARTICLE_DETAILS);

  const zh = all.filter((a) => a.lang === 'zh');
  const en = all.filter((a) => a.lang === 'en');

  const used = new Set<string>();
  const buckets = GROUPS.map((g) => {
    const items = en.filter((a) => g.match.some((m) => a.slug.includes(m)) && !used.has(a.slug));
    items.forEach((a) => used.add(a.slug));
    return { ...g, items: items.sort((a, b) => a.title.localeCompare(b.title)) };
  });
  const rest = en.filter((a) => !used.has(a.slug));

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Strategic Insights — Esoteric Paths',
    description:
      'Essays on Xiao Liu Ren temporal mechanics, negotiation timing, strategic delay and the 72-hour decision window.',
    url: 'https://www.esotericpaths.com/insights',
    inLanguage: 'en-US',
    publisher: { '@type': 'Organization', name: 'Esoteric Paths' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: all.length,
      itemListElement: all.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.esotericpaths.com/insights/${a.slug}`,
        name: a.title,
      })),
    },
  };

  const Card = ({ a }: { a: (typeof all)[number] }) => (
    <Link
      href={`/insights/${a.slug}`}
      className="es-lift"
      style={{
        display: 'block',
        background: '#0A0A0F',
        border: '1px solid rgba(201,162,39,0.2)',
        borderRadius: '10px',
        padding: '1.1rem',
        textDecoration: 'none',
      }}
    >
      <span style={{ fontSize: '0.65rem', color: '#C9A227', fontFamily: 'monospace' }}>{a.readTime}</span>
      <h3
        style={{
          fontSize: '0.95rem',
          fontFamily: a.lang === 'zh' ? ZH_SERIF : 'var(--font-display)',
          color: '#F4EEDB',
          margin: '0.3rem 0 0.45rem 0',
          lineHeight: 1.4,
        }}
      >
        {a.title}
      </h3>
      <p style={{ fontSize: '0.75rem', color: '#8A8678', lineHeight: 1.55, margin: '0 0 0.5rem 0' }}>
        {a.excerpt.length > 130 ? `${a.excerpt.slice(0, 130).trimEnd()}…` : a.excerpt}
      </p>
      <span style={{ fontSize: '0.7rem', color: '#8A8678', fontFamily: 'monospace' }}>
        {a.lang === 'zh' ? '阅读 →' : 'Read →'}
      </span>
    </Link>
  );

  return (
    <div
      role="main"
      id="main-content"
      className="reveal"
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '2.5rem 1.5rem 4rem 1.5rem',
        background: '#050508',
        minHeight: '100vh',
        color: '#E8E4DA',
        fontFamily: 'var(--font-body)',
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      <Link
        href="/"
        style={{
          color: '#C9A227',
          textDecoration: 'none',
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
      >
        ← Back to the Matrix
      </Link>

      <span
        style={{
          display: 'block',
          fontSize: '0.75rem',
          color: '#C9A227',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginTop: '2rem',
        }}
      >
        Esoteric Paths Research · {all.length} essays
      </span>
      <h1
        style={{
          fontSize: '2.2rem',
          fontFamily: 'var(--font-display)',
          color: '#F4EEDB',
          margin: '0.4rem 0 0.8rem 0',
          lineHeight: 1.2,
          textShadow: '0 0 24px rgba(201,162,39,0.18)',
        }}
      >
        Strategic Insights
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: '#C9A227',
          fontStyle: 'italic',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
          borderLeft: '2px solid #C9A227',
          paddingLeft: '1rem',
        }}
      >
        Long-form essays on decision timing, temporal strategy and the psychology of when to act — written
        for people whose decisions carry real cost.
      </p>

      {buckets.map((g) =>
        g.items.length === 0 ? null : (
          <section key={g.label} style={{ marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)',
                color: '#F4EEDB',
                margin: '0 0 0.35rem 0',
              }}
            >
              {g.label}
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#8A8678', margin: '0 0 1rem 0', lineHeight: 1.6 }}>{g.blurb}</p>
            <div className="es-insights-grid">
              {g.items.map((a) => (
                <Card key={a.slug} a={a} />
              ))}
            </div>
          </section>
        )
      )}

      {rest.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 1rem 0' }}
          >
            Further Essays
          </h2>
          <div className="es-insights-grid">
            {rest.map((a) => (
              <Card key={a.slug} a={a} />
            ))}
          </div>
        </section>
      )}

      {zh.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 1rem 0' }}
          >
            中文
          </h2>
          <div className="es-insights-grid">
            {zh.map((a) => (
              <Card key={a.slug} a={a} />
            ))}
          </div>
        </section>
      )}

      <div
        style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(201,162,39,0.1)',
          fontSize: '0.75rem',
          color: '#5C584E',
          fontFamily: 'monospace',
          textAlign: 'center',
        }}
      >
        © Esoteric Paths. Deterministic Decision-Timing Infrastructure.
      </div>
    </div>
  );
}
