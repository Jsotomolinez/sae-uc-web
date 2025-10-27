import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl.dropboxusercontent.com',
        pathname: '/**',
      },
      {
        // Allow dynamic subdomains used by Dropbox for file hosting
        protocol: 'https',
        hostname: '*.dl.dropboxusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dropboxusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
