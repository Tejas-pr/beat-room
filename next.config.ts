import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["avatars.githubusercontent.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "avatars.githubusercontent.com",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
