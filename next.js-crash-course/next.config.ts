import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/Next.js-Crash-Course/",
  basePath: "/Next.js-Crash-Course",
};

export default nextConfig;
