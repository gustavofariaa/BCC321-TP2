const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = () => {
  const env = {
    PGPORT:process.env.PGPORT,
    PGHOST:process.env.PGHOST,
    PGDATABASE:process.env.PGDATABASE,
    PGUSER:process.env.PGUSER,
    PGPASSWORD:process.env.PGPASSWORD,
  };
  return { env };
};

module.exports = withPlugins([withImages()], nextConfig());