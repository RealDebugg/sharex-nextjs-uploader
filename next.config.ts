import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/api/fetch",
      },
    ],
  },
};

export default nextConfig;
