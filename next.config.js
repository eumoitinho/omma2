module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'omma.com.br'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Additional Next.js configuration options can be added here
};