/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "res.cloudinary.com"] // which sources are allowed to display image from
    },
    experimental: {
        serverComponentsExternalPackages: ["cloudinary", "graphql-request"]
    }
}

module.exports = nextConfig
