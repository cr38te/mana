/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withImages = require('next-images');
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: `on`
    },
    {
        key: 'X-XSS-Protection',
        value: `1; mode = block`
    },
    {
        key: 'Content-Security-Policy',
        value: `frame-ancestors 'none'`
    },
    {
        key: 'X-Frame-Options',
        value: `DENY`
    },
    {
        key: 'X-Content-Type-Options',
        value: `nosniff`
    }
];

module.exports = withPlugins([withVideos, withImages], {
    images: {
        disableStaticImages: true,
        domains: ['via.placeholder.com', 'cms.manaruba.org']
    },
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders
            }
        ];
    }
});
