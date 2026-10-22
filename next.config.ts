import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves static files, so emit an `out/` directory with
  // a top-level index.html instead of a server/Worker bundle.
  output: "export",
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
