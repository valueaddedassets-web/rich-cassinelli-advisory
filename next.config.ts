import type { NextConfig } from "next";

const isGitHubPages = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: isGitHubPages },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/rich-cassinelli-advisory",
        assetPrefix: "/rich-cassinelli-advisory",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
