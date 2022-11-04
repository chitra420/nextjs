/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  env: {
    GREETING: "Hello World",
  },
}

module.exports = nextConfig
