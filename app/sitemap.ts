import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.esotericpaths.com';
  
  // 核心 10 篇 SEO 文章的 URL 映射
  const articleSlugs = [
    'ontology-of-time-crisis-decisions',
    'xiao-liu-ren-vs-tarot-timing',
    'horary-divination-psychological-bias',
    'da-an-great-stability-guide',
    'surviving-liu-lian-drag',
    'physics-of-velocity-su-xi',
    'navigating-chi-kou-frictions',
    'art-of-alliance-xiao-ji',
    'tabula-rasa-kong-wang',
    '72-hour-executive-blueprint',
  ];

  const articleEntries = articleSlugs.map((slug) => ({
    url: `${baseUrl}/#${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...articleEntries,
  ];
}
