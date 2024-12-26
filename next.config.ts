import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'], // Add any image domains you'll be using
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-host.com',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
