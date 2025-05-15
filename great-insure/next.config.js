/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack due to compatibility issues
  experimental: {
    turbo: true  // Explicitly disable Turbopack
  },
  webpack: (config, { isServer }) => {
    // Fix for possible wallet adapter issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: true,
        path: true,
        os: true,
        crypto: true,
        stream: true,
        http: true,
        https: true,
        zlib: true
      };
    }
    return config;
  },
};

module.exports = nextConfig; 