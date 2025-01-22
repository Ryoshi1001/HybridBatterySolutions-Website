import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, 
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "*", 
      }
    ]
  }
};

export default nextConfig;
