import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer & Terms of Use | Esoteric Paths',
  description:
    'What Esoteric Paths is, what it is not, and where responsibility sits. Our reports are decision-support frameworks — not financial, legal, medical, or psychological advice.',
  alternates: {
    canonical: 'https://www.esotericpaths.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer & Terms of Use | Esoteric Paths',
    description:
      'What Esoteric Paths is, what it is not, and where responsibility sits. Our reports are decision-support frameworks — not financial, legal, medical, or psychological advice.',
    url: 'https://www.esotericpaths.com/disclaimer',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Disclaimer & Terms of Use | Esoteric Paths' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer & Terms of Use | Esoteric Paths',
    description:
      'What Esoteric Paths is, what it is not, and where responsibility sits.',
    images: ['/og-image.png'],
  },
};

const H2: React.CSSProperties = {
  fontSize: '1.35rem',
  fontFamily: 'var(--font-display)',
  color: '#F4EEDB',
  margin: '0 0 0.6rem 0',
};

const P: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#CDC8BC',
  lineHeight: 1.75,
  margin: 0,
};

const UL: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#CDC8BC',
  lineHeight: 1.75,
  margin: '1rem 0 0 0',
  paddingLeft: '1.2rem',
};

export default function DisclaimerPage() {
  return (
    <div
      className="reveal"
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
        Legal
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
        Disclaimer &amp; Terms of Use
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
        Last updated: September 12, 2026.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={H2}>1. What This Service Is</h2>
          <p style={P}>
            Esoteric Paths is a decision-support framework. You state a real question, the system maps
            it to a time coordinate using a classical Chinese horary method (Xiao Liu Ren), pairs that
            coordinate with an archetypal layer drawn from the Major Arcana, and returns a structured
            reading with a bounded 72-hour action window.
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            It is a way of organising your own thinking about <em>timing</em> — a method, in the same
            family as a decision matrix or a premortem. It is not a predictive service, and we make no
            claim to know the future.
          </p>
        </section>

        <section>
          <h2 style={H2}>2. What This Service Is Not</h2>
          <p style={P}>
            Nothing on this site — including any reading, report, or essay — constitutes financial,
            investment, legal, tax, medical, or psychological advice. We are not a licensed adviser in
            any jurisdiction, and we do not hold ourselves out as one.
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            A reading is not a substitute for due diligence, professional counsel, or your own
            judgement about your business, your contracts, or your health.
          </p>
        </section>

        <section>
          <h2 style={H2}>3. Your Decision Remains Yours</h2>
          <p style={P}>
            Every action you take after a reading is your own. You retain full responsibility for your
            decisions and for all consequences that follow from them.
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            We explicitly reject spiritual bypassing — using a reading as a substitute for real
            analysis, or as an excuse to avoid a difficult decision. If a reading is not converted into
            a concrete action, a revised clause, or a defined stop-loss within 72 hours, treat it as
            noise rather than guidance.
          </p>
        </section>

        <section>
          <h2 style={H2}>4. No Guarantee of Outcomes</h2>
          <p style={P}>
            Readings are interpretive. The palace calculation itself is deterministic — the same moment
            always yields the same configuration — but the strategic reading of that configuration
            involves judgement, and two readers may reasonably differ.
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            We make no warranty that any reading is accurate, complete, or suitable for your particular
            situation, and we do not guarantee any commercial, financial, or personal outcome.
          </p>
        </section>

        <section>
          <h2 style={H2}>5. Eligibility</h2>
          <p style={P}>
            You must be 18 years of age or older to purchase a report. By completing a purchase you
            confirm that you meet this requirement and that you are entering into the transaction on
            your own behalf.
          </p>
        </section>

        <section>
          <h2 style={H2}>6. Limitation of Liability</h2>
          <p style={P}>
            To the maximum extent permitted by applicable law, Esoteric Paths and its operators shall
            not be liable for any indirect, incidental, consequential, or special damages — including
            lost profits, lost opportunities, or business interruption — arising out of or relating to
            your use of this site or any report purchased through it.
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            Where liability cannot be excluded, it is limited to the amount you paid for the report in
            question.
          </p>
        </section>

        <section>
          <h2 style={H2}>7. Contact</h2>
          <p style={P}>
            Questions about this disclaimer, or about a report you have purchased? Reach us at{' '}
            <a href="mailto:terrytanzj@esotericpaths.com" style={{ color: '#C9A227', textDecoration: 'none' }}>
              terrytanzj@esotericpaths.com
            </a>
            .
          </p>
          <p style={{ ...P, marginTop: '1rem' }}>
            See also our{' '}
            <Link href="/privacy" style={{ color: '#C9A227', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            .
          </p>
        </section>
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
