const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    // Solo para Github Pages
    basePath: '/networkist_web',
    output: 'export',
    defaultLayout: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true
    },
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
