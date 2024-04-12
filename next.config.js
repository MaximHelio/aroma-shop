/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ["/"]
  },
  images: {
    domains: ["cdn.imweb.me", "www.vancleefarpels.com"]
  }
}

module.exports = nextConfig
