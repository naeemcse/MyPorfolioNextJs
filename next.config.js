/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io',
            },{
            hostname: 'img.freepik.com',
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
