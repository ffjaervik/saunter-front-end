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
      'https://saunter-db.herokuapp.com',
      'https://media.timeout.com/images/105162351/image.jpg',
      'https://www.kew.org/sites/default/files/styles/highlights_module_main_image_770w_/public/2021-05/Wakehurst_early_summer_013_JH%20%282%29.jpg?itok=IGQKATBK',
      'https://live.staticflickr.com/3841/14668921488_1f41631cd5_b.jpg',
      'https://jennyshearawn.com/wp-content/uploads/2021/12/Oyster-Platter-with-Wild-Blueberry-Mignonette-Granita-15.jpg'
    ], // hostname of the img url
  },
};


module.exports = nextConfig
