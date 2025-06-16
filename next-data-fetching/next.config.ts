import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: [
    {
      source: '/',
      destination: '/home',
      permanent: true
    }
  ]
};

export default nextConfig;
