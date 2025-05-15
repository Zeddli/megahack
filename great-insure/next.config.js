/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack due to compatibility issues
  experimental: {
    turbo: false  // Explicitly disable Turbopack
  },
  webpack: (config, { isServer }) => {
    // Fix for possible wallet adapter issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false
      };
    }
    return config;
  },
};

module.exports = nextConfig; 