const mysql = require('mysql');
const config = require('../../config');
const { logger } = require('../../utils/log.config.js');

const configMysql = {
  connectionLimit: 10,
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
};

const pool = mysql.createPool(configMysql);

pool.getConnection((err, connection) => {
  if (err) {
    switch (err.code) {
      case 'PROTOCOL_CONNECTION_LOST':
        logger.error('La conexion a la DB se cerró.');
        break;
      case 'ER_CON_COUNT_ERROR':
        logger.error('La base de datos tiene muchas conexiones');
        break;
      case 'ECONNREFUSED':
        logger.error('La conexion fue rechazada');
    }
  }
  if (connection) {
    logger.info(`Connected to MySQL`);
    connection.release();
  }
  return;
});

module.exports = pool;
