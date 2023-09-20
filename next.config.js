/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/toc',
                destination: '/terms-and-conditions',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
