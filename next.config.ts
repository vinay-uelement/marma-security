import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.marmasec.com',
      },
      {
        protocol: 'https',
        hostname: 'marma-security.vercel.app',
      },
    ],
  },
};

export default nextConfig;
