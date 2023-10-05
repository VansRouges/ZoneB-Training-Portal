/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.caisy.io',
      },
      {
        protocol: 'https',
        hostname: 'xsgames.co',
      },
    ],
},}

module.exports = nextConfig
