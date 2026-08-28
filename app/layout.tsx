import React from 'react';
import './globals.css';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
    description: 'Deterministic Horary Oracle combining classical Chinese Xiao Liu Ren with Western archetypal tarot.',
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
      </head>
      <body style={{ backgroundColor: '#0E0E14', color: '#E8E4DA', margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
