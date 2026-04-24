import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'marmasec.com',
      },
      {
        protocol: 'https',
        hostname: 'marma-security.vercel.app',
=======
        protocol: "https",
        hostname: "marma-security.vercel.app",
>>>>>>> 1f77f1e59e22c6d28d3972a1c9a7332f9ed68c6c
      },
    ],
  },
};

export default nextConfig;
