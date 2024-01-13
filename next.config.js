/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'arniabid.beget.tech',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
        ],
      },
}

module.exports = nextConfig
