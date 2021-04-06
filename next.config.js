const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = () => {
  const env = {};
  return { env };
};

module.exports = withPlugins([withImages()], nextConfig());