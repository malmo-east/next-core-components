/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        outputStandalone: true,
    },
    transpilePackages: ['@alfalab/core-components'],
}

module.exports = nextConfig
