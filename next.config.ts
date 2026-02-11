import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3rcore.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Inline de CSS crítico
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Bonus: remueve console.logs
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);