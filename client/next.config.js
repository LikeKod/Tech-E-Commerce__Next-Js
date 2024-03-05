/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'magazic.ru',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
        ],
      },
}

module.exports = nextConfig
