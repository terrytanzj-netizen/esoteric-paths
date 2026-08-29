import React from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
  description: 'Deterministic Horary Oracle combining classical Chinese Xiao Liu Ren time mechanics with Western archetypal tarot for high-stakes business and life decisions.',
  keywords: ['Xiao Liu Ren', 'Horary Divination', 'Tarot Timing', 'Chinese Astrology', 'Business Decision Oracle', 'Jungian Archetypes'],
  authors: [{ name: 'Esoteric Paths' }],
  openGraph: {
    title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
    description: 'Align your critical crossroads decisions with classical Chinese temporal mechanics and Western archetypal wisdom.',
    url: 'https://www.esotericpaths.com',
    siteName: 'Esoteric Paths',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Esoteric Paths — Xiao Liu Ren × Tarot Horary Matrix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
    description: 'Deterministic Horary Oracle combining classical Chinese Xiao Liu Ren with Western archetypal tarot.',
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
        <link rel="canonical" href="https://www.esotericpaths.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#050508', color: '#E8E4DA', margin: 0, padding: 0, fontFamily: 'var(--font-body)' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
