/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "perfect-shine-payload.up.railway.app",
      },
    ],
    domains: ["localhost"],
  },
};

export default nextConfig;
