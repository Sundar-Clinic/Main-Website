const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/i18n.ts');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
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
  async rewrites() {
    return [
      {
        source: '/sitemap-posts.xml',
        destination: '/sitemap-posts',
      },
      {
        source: '/sitemap-posts-:year.xml',
        destination: '/sitemap-posts/:year',
      },
    ]
  },
  trailingSlash: false
}

module.exports = withBundleAnalyzer(withNextIntl(nextConfig))
