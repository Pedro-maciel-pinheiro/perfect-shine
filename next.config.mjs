/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "perfect-shine-production.up.railway.app",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
