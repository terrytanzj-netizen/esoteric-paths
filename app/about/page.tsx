import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Esoteric Paths',
  description:
    'The story behind Esoteric Paths — bridging ancient Chinese horary mechanics and Western archetypal psychology into a tactical decision compass.',
  alternates: {
    canonical: 'https://www.esotericpaths.com/about',
  },
  openGraph: {
    title: 'About | Esoteric Paths',
    description:
      'The story behind Esoteric Paths — bridging ancient Chinese horary mechanics and Western archetypal psychology into a tactical decision compass.',
    url: 'https://www.esotericpaths.com/about',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Esoteric Paths' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Esoteric Paths',
    description:
      'The story behind Esoteric Paths — bridging ancient Chinese horary mechanics and Western archetypal psychology into a tactical decision compass.',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  return (
    <div
      className="reveal"
      role="main"
      id="main-content"
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '2.5rem 1.5rem 4rem 1.5rem',
        background: '#050508',
        minHeight: '100vh',
        color: '#E8E4DA',
        fontFamily: 'var(--font-body)',
      }}
    >
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
        ← Back to Oracle
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
        About
      </span>
      <h1
        style={{
          fontSize: '2.2rem',
          fontFamily: 'var(--font-display)',
          color: '#F4EEDB',
          margin: '0.4rem 0 1rem 0',
          lineHeight: 1.2,
          textShadow: '0 0 24px rgba(201,162,39,0.18)',
        }}
      >
        The Architecture of Time
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
        Bridging Ancient Chinese Horary Mechanics and Western Archetypal Psychology.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            1. The Dilemma: Why Most Timing Tools Fail
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            For centuries, seekers and decision-makers in the West have turned to Tarot and archetypal divination to navigate critical crossroads. Yet anyone who has ever consulted the cards for a high-stakes business negotiation, capital allocation, or career pivot encounters the same fatal bottleneck:{' '}
            <strong style={{ color: '#F4EEDB' }}>Western symbolic mirrors struggle with exact timing.</strong>
          </p>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0' }}>
            Cards reveal the subconscious architecture of a dilemma, but they cannot tell you whether to execute at dawn or retreat until the next planetary ingress.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0' }}>
            On the other side of the hemisphere lies <strong style={{ color: '#F4EEDB' }}>Xiao Liu Ren (小六壬)</strong> — an ancient Chinese horary divination system codified during the Three Kingdoms era. Unlike card-pulling, Xiao Liu Ren does not rely on subjective intuition. It operates like a deterministic clockwork matrix: converting the exact coordinates of time (Month, Day, Hour) into dynamic kinetic vectors — <em>Da An, Liu Lian, Su Xi, Chi Kou, Xiao Ji, and Kong Wang</em>.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            2. The Synthesis: How Esoteric Paths Was Born
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: '#F4EEDB' }}>Esoteric Paths</strong> was created out of a singular obsession:{' '}
            <strong style={{ color: '#F4EEDB' }}>to eliminate ambiguity from crossroads decision-making.</strong>
          </p>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0' }}>
            Founded by an independent researcher straddling Eastern chronological metaphysics and Western esoteric philosophy, this platform is the synthesis of two distinct traditions:
          </p>
          <ul style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0', paddingLeft: '1.2rem' }}>
            <li>
              <strong>The Clockwork Precision of the East</strong>: Xiao Liu Ren’s deterministic 3-palace time calculus that pinpoints systemic friction, velocity, and stagnation windows.
            </li>
            <li>
              <strong>The Psychological Depth of the West</strong>: The Tarot Major Arcana and Jungian archetypes that give those chronological vectors narrative clarity and tactical meaning.
            </li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0' }}>
            We did not build this as an entertainment fortune-telling booth. We built it as a{' '}
            <strong style={{ color: '#F4EEDB' }}>tactical horary compass</strong> for founders, creators, and individuals navigating volatile, high-friction inflection points.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            3. Our Epistemological Standard
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            <em>Why trust this engine?</em>
          </p>
          <ul style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0', paddingLeft: '1.2rem' }}>
            <li>
              <strong>Deterministic Mathematics Over Superstition</strong>: Our horary calculations follow strict classical chronomancy formulas. There are no vague fortune-cookie generalities — only precise phase alignments.
            </li>
            <li>
              <strong>Empirical Observation</strong>: Every guidance archetype has been stress-tested against real-world scenario playbooks: negotiations, boundary defense, contract reviews, and resource preservation.
            </li>
            <li>
              <strong>The Sovereign Executive Principle</strong>: We reject fatalism. Horary astrology does not dictate your destiny; it provides a meteorological report of temporal currents. If the Hour Palace indicates <em>Chi Kou (Sharp Friction)</em>, you do not surrender — you fortify your contracts and refuse oral promises.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            4. The Western Timing Problem — In Depth
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            We wrote a short essay on exactly why Tarot excels at narrative but remains silent on timing, and how Xiao Liu Ren closes that gap:{' '}
            <Link href="/insights/why-western-tarot-struggles-with-exact-timing" style={{ color: '#C9A227', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Why Western Tarot Struggles with Exact Timing (And How Xiao Liu Ren Solves It)
            </Link>.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            5. The Founder&apos;s Note
          </h2>
          <blockquote
            style={{
              fontSize: '1rem',
              color: '#F4EEDB',
              lineHeight: 1.6,
              margin: 0,
              padding: '1rem 1.2rem',
              borderLeft: '2px solid #C9A227',
              background: 'rgba(201,162,39,0.04)',
              fontStyle: 'italic',
            }}
          >
            &ldquo;Time is not an empty container through which we pass. Time has texture, resistance, and momentum. When you align tactical action with the prevailing temporal tide, friction drops to zero. That is the only secret of mastery.&rdquo;
          </blockquote>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            6. Contact
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Have questions, academic inquiries, or feedback regarding the horary matrix? Reach the editorial team at{' '}
            <a href="mailto:terrytanzj@esotericpaths.com" style={{ color: '#C9A227', textDecoration: 'none' }}>
              terrytanzj@esotericpaths.com
            </a>
            .
          </p>
        </section>
      </div>

      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          border: '1px solid rgba(201,162,39,0.2)',
          borderRadius: '6px',
          background: 'rgba(201,162,39,0.03)',
        }}
      >
        <p style={{ fontSize: '0.8rem', color: '#8A8678', lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: '#F4EEDB' }}>Notice</strong>: Esoteric Paths is provided for cultural, educational, and entertainment purposes only. Our reports are not financial, legal, medical, or professional advice. All payments are processed securely by Dodo Payments; we never store your card details.
        </p>
      </div>

      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,162,39,0.2)', textAlign: 'center' }}>
        <Link href="/" className="es-btn es-btn--gold" style={{ padding: '0.85rem 2.2rem', fontSize: '0.85rem' }}>
          Cast Your Oracle →
        </Link>
      </div>

      <footer
        style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#5C584E',
          fontFamily: 'monospace',
          borderTop: '1px solid rgba(201,162,39,0.1)',
          paddingTop: '1.5rem',
          marginTop: '3rem',
        }}
      >
        © Esoteric Paths. Deterministic Horary Infrastructure. All rights reserved.
      </footer>
    </div>
  );
}
