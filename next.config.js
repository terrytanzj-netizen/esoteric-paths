/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy /blog/* URLs from the pre-/insights site structure.
      // They still surface in Google & Bing results but now return 404.
      // 301 (permanent: true) so accumulated signal transfers to the index page.
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:path*', destination: '/insights', permanent: true },

      // Old slug for the Jungian archetypes essay. Exact-match 301 so the
      // ranking signal already earned by this URL moves to the live page
      // instead of being wasted on a soft 404.
      {
        source: '/insights/jungian-archetypes',
        destination: '/insights/jungian-archetypes-decision-making',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
