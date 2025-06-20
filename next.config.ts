import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'swopgpgsdcqwvvnpeqvd.supabase.co',
      'yt3.googleusercontent.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Correct place
  },
};

export default nextConfig;
