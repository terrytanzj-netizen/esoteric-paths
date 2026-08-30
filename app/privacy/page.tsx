import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Esoteric Paths',
  description:
    'Privacy Policy for Esoteric Paths — how we collect, use, store, and protect your information.',
  alternates: {
    canonical: 'https://www.esotericpaths.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Esoteric Paths',
    description:
      'Privacy Policy for Esoteric Paths — how we collect, use, store, and protect your information.',
    url: 'https://www.esotericpaths.com/privacy',
    type: 'article',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Privacy Policy | Esoteric Paths' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Esoteric Paths',
    description:
      'Privacy Policy for Esoteric Paths — how we collect, use, store, and protect your information.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPage() {
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
        Privacy Policy
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
        Last updated: August 30, 2026.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            1. Overview
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Esoteric Paths (“we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or purchase a report.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            2. Information We Collect
          </h2>
          <ul style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0, paddingLeft: '1.2rem' }}>
            <li>
              <strong style={{ color: '#F4EEDB' }}>Payment information</strong>: When you purchase a report, Dodo Payments processes your payment. We do not store your full card details or payment credentials on our servers.
            </li>
            <li>
              <strong style={{ color: '#F4EEDB' }}>Usage data</strong>: We collect non-personal information such as browser type, device type, pages visited, and approximate location via analytics tools to improve the site experience.
            </li>
            <li>
              <strong style={{ color: '#F4EEDB' }}>Local cast data</strong>: The question and cast result you enter may be stored locally in your browser (localStorage) so you can view your report again. You can clear this at any time through your browser settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            3. How We Use Information
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            We use collected information to:
          </p>
          <ul style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: '1rem 0 0 0', paddingLeft: '1.2rem' }}>
            <li>Deliver and restore purchased reports.</li>
            <li>Process payments and prevent fraud.</li>
            <li>Understand how visitors use the site and improve its performance.</li>
            <li>Respond to support requests.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            4. Payment Processing
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Payments are handled by <strong style={{ color: '#F4EEDB' }}>Dodo Payments</strong>. Their handling of your payment data is governed by their own privacy policy and security standards. We only receive confirmation that a payment succeeded and a payment identifier necessary to restore your report.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            5. Cookies and Analytics
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            We use Google Analytics 4 to understand aggregated site usage. This tool places cookies and may collect IP-address-derived, non-identifiable data. You can manage or disable cookies through your browser settings or via Google’s opt-out tools.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            6. Data Sharing
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            We do not sell, rent, or trade your personal information. We only share data with service providers necessary to operate the site (hosting, payment processing, analytics) and only to the extent required for those services.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            7. Data Retention
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Payment verification data is retained as long as necessary to support report restoration and accounting. Local cast data remains only in your browser until you clear it.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            8. Your Rights
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at the email below.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            9. Changes to This Policy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            We may update this Privacy Policy from time to time. The latest version will always be available at this page with an updated “Last updated” date.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-display)', color: '#F4EEDB', margin: '0 0 0.6rem 0' }}>
            10. Contact
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CDC8BC', lineHeight: 1.75, margin: 0 }}>
            Questions? Reach us at{' '}
            <a href="mailto:terrytanzj@esotericpaths.com" style={{ color: '#C9A227', textDecoration: 'none' }}>
              terrytanzj@esotericpaths.com
            </a>
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
