import type { NextConfig } from 'next';

const strapiUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337');

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: '/faq/main',
        destination: '/faq',
        permanent: false
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: strapiUrl.protocol.slice(0, -1) as 'http' | 'https', // Remove the trailing ':'
        hostname: strapiUrl.hostname,
        port: '', // strapiUrl.port || (strapiUrl.protocol === 'https:' ? '443' : '80'),
        pathname: '/uploads/**/*'
      }
    ]
  }
};

export default nextConfig;
