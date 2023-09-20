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
                source: '/terms',
                destination: '/terms-and-conditions',
                permanent: true,
            },
            {
                source: '/privacy',
                destination: '/privacy-policy',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
