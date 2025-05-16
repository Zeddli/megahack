/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Simple turbopack flag instead of object
  turbopack: false,
  experimental: {
    optimizeCss: false
  },
  webpack: (config, { isServer }) => {
    // Fix for possible wallet adapter issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        zlib: require.resolve('browserify-zlib')
      };
    }
    return config;
  },
};

module.exports = nextConfig; 