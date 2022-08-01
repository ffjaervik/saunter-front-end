/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
//DELETE
// module.exports = {
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };
module.exports = {
  images: {
    domains: [
      'timeout.com',
      'saunter-db.herokuapp.com'

    ], // hostname of the img url
  },
};


module.exports = nextConfig
