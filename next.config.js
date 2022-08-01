
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'saunter-db.herokuapp.com',
      'media.timeout.com',
      'kew.org',
      'live.staticflickr.com',
      'jennyshearawn.com',
      'timeout.com',
    ], // hostname of the img url
  },
};


module.exports = nextConfig
