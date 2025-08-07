import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub user pages configuration (no basePath needed)
  basePath: '',
  assetPrefix: '',
  distDir: 'out',
};

export default nextConfig;
