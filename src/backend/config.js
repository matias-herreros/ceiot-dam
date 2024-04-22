const dotenv = require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_PORT: process.env.API_PORT,
  API_HOST: process.env.API_HOST,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT,
};
