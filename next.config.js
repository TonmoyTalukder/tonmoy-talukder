module.exports = {
  output: 'export', // Configure export for static site
  images: {
    unoptimized: true, // Disable image optimization in export mode
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
  trailingSlash: true, // Ensure trailing slashes for GitHub Pages
};
