/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://cdn.sanity.io/", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
