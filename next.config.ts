import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "glyph-storage.s3.eu-north-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
