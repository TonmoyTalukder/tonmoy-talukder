/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/X7QwZ6Y/Tonmoy-Talukder.jpg',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
