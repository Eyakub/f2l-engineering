import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export served by GitHub Pages at the domain root (no basePath).
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
