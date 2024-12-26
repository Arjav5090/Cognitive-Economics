import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  assetPrefix: '/Cognitive-Economics-Website' ,
  basePath:  '/Cognitive-Economics-Website',
  output: 'export',
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
