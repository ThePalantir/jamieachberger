/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [90],
  },
  async redirects() {
    return [
      // Legacy WordPress URLs → closest equivalent on the new site.
      { source: '/sample-home-page', destination: '/', permanent: true },
      { source: '/meet-jamie', destination: '/meet-the-team/', permanent: true },
      { source: '/meet-jamie2', destination: '/meet-the-team/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
