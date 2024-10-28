/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
