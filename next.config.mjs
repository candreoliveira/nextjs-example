/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental'
    },
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        AUTH_SALT: process.env.AUTH_SALT,
        AUTH_URL: process.env.AUTH_URL
    },
    reactStrictMode: true,
};

export default nextConfig;
