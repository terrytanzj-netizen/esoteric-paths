import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Esoteric Paths | Xiao Liu Ren × Tarot Horary Matrix',
  description: 'Deterministic Horary Oracle combining classical Chinese Xiao Liu Ren with Western archetypal tarot.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0E0E14', color: '#E8E4DA', margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
