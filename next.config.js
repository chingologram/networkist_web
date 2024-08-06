const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    defaultLayout: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/principios',
                destination: '/principios/1',
                permanent: true,
            },
        ]
    },
}

module.exports = withMDX(nextConfig)
