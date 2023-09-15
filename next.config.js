/** @type {import('next').NextConfig} */
module.exports = {
    swcMinify:true,
    output: "export",
    reactStrictMode:true,
      images: {
        unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bucket.barta24.com',
          },
        ],
      },
    }