import { MetadataRoute } from 'next';
import { ARTICLE_DETAILS } from '../data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.esotericpaths.com';

  const articleEntries = Object.keys(ARTICLE_DETAILS).map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
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
    {
      url: `${baseUrl}/tools/chinese-name`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
