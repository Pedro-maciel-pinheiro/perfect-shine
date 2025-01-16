/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "perfect-shine-production.up.railway.app",
      },
    ],
    domains: ["localhost"],
  },
};

export default nextConfig;
