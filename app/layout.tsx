import React from 'react';
import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.esotericpaths.com'),
  title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
  description: 'Deterministic Horary Oracle combining classical Chinese Xiao Liu Ren time mechanics with Western archetypal tarot for high-stakes business and life decisions.',
  keywords: ['Xiao Liu Ren', 'Horary Divination', 'Tarot Timing', 'Chinese Astrology', 'Business Decision Oracle', 'Jungian Archetypes'],
  authors: [{ name: 'Esoteric Paths' }],
  // Declared through the metadata API rather than hand-written <link> tags in
  // <head>: tags in the shared layout leak onto every route and CANNOT be
  // overridden by a page's own metadata. That leaked a home-page canonical onto
  // all 21 articles, making Google treat them as duplicates of the home page.
  // Via the API, each route's `alternates` correctly replaces this.
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'x-default': '/',
    },
  },
  verification: { other: { 'msvalidate.01': 'AC207B1D1E8A9E60F42B0C335D1DE0D5' } },
  // OG / Twitter copy is deliberately the same claim as the X bio: the
  // "you don't have a decision problem, you have a timing problem" line.
  // One claim across bio, tweets and share cards is what makes it stick.
  openGraph: {
    title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
    description: "You don't have a decision problem. You have a timing problem. Cast the moment — get a 72-hour execution window.",
    url: 'https://www.esotericpaths.com',
    siteName: 'Esoteric Paths',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Esoteric Paths — the six palaces of Xiao Liu Ren in dark alchemical gold' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "You don't have a decision problem. You have a timing problem.",
    description: 'Cast the moment with Xiao Liu Ren 小六壬 — six palaces, one question, a 72-hour execution window.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* canonical / hreflang now come from the metadata API above so each
            route can override them. Do not re-add them as raw <link> tags. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#050508', color: '#E8E4DA', margin: 0, padding: 0, fontFamily: 'var(--font-body)' }}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H6NXPSL81M" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6NXPSL81M');
          `}
        </Script>
      </body>
    </html>
  );
}
