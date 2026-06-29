import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-site",
  images: { unoptimized: true },
};

export default nextConfig;
