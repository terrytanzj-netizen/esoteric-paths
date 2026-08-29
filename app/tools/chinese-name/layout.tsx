import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Chinese Name Generator | Meaning, Pinyin & Palace Reading | Esoteric Paths',
  description: 'Get an authentic Chinese name with pinyin, meaning, Wu Xing element and Xiao Liu Ren palace affinity. Deterministic, shareable and free.',
  alternates: {
    canonical: 'https://www.esotericpaths.com/tools/chinese-name',
  },
  openGraph: {
    title: 'Free Chinese Name Generator | Meaning, Pinyin & Palace Reading',
    description: 'Discover an authentic Chinese name aligned to your focus: career, love, wealth, wisdom or balance.',
    url: 'https://www.esotericpaths.com/tools/chinese-name',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chinese Name Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Chinese Name Generator | Meaning, Pinyin & Palace Reading',
    description: 'Discover an authentic Chinese name aligned to your focus.',
    images: ['/og-image.png'],
  },
};

export default function ChineseNameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Esoteric Paths Chinese Name Generator',
            url: 'https://www.esotericpaths.com/tools/chinese-name',
            applicationCategory: 'LifestyleApplication',
            description: 'Generates authentic Chinese names with pinyin, meaning, Wu Xing element and palace affinity.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            publisher: { '@type': 'Organization', name: 'Esoteric Paths' },
          }),
        }}
      />
      {children}
    </>
  );
}
