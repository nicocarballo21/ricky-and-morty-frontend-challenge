/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rickandmortyapi.com"],
    allowFutureImage: true,
  },
};

module.exports = nextConfig;
