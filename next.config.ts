import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "live.bhsradio.com",
        port: "",
        pathname: "/api/station/kbhs_main/art/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
