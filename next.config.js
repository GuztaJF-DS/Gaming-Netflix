/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/fonts/NetflixSans-Regular.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['ibb.co', 'images.unsplash.com'],
  },
};
