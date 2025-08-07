import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuration for lewisawe.github.io (no basePath needed for username.github.io repos)
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
