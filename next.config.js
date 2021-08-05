module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/operations',
        permanent: true,
        basePath: false
      }
    ];
  }
};
