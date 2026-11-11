import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bergenbrannkonsult.vercel.app' }],
        destination: 'https://www.bergenbrannkonsult.no/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
