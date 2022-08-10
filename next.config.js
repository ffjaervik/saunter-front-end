
/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
 
// }


module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "saunter-db.herokuapp.com",
      "media.timeout.com",
      "kew.org",
      "live.staticflickr.com",
      "jennyshearawn.com",
      "timeout.com",
    ], // hostname of the img url
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

//DEployment error fix(?)
// module.exports = nextConfig
