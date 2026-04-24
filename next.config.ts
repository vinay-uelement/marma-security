import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marmasec.com',
      },
      {
        protocol: 'https',
        hostname: 'marma-security.vercel.app',
      },
    ],
  },
};

export default nextConfig;
