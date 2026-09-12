/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy /blog/* URLs from the pre-/insights site structure.
      // They stopped resolving when the site moved to /insights, but Google
      // still shows them (31 impressions in GSC) and users clicked into 404s.
      // Explicit 301 rather than `permanent: true` (which emits 308) so every
      // crawler and SEO tool sees the single most widely supported signal.
      { source: '/blog', destination: '/insights', statusCode: 301 },
      { source: '/blog/:path*', destination: '/insights', statusCode: 301 },

      // Old slug for the Jungian archetypes essay (9 impressions in GSC).
      // Exact-match 301 so the signal this URL already earned transfers to the
      // live page instead of being spent on a 404.
      {
        source: '/insights/jungian-archetypes',
        destination: '/insights/jungian-archetypes-decision-making',
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
