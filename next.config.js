/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you're using rewrites or redirects, make sure they're properly configured
  // For example:
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
