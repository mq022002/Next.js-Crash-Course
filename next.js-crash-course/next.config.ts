import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/Next.js-Crash-Course" : "",
  assetPrefix: isProd ? "/Next.js-Crash-Course/" : "",
  images: {
    unoptimized: isProd,
  },
};

export default nextConfig;
