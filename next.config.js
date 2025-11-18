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
    unoptimized: true, // Desabilita otimização de imagens para reduzir tamanho do bundle
  },
  output: 'standalone', // Otimiza o build para deployment
  // Additional Next.js configuration options can be added here
};