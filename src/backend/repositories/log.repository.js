const pool = require('../infra/db/mysql.database.config.js');

const getLogsByElectrovalveIdRepository = async id => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM log_riegos WHERE log_riegos.electrovalvulaId = '${id}' ORDER BY fecha DESC`,
      (error, result, fields) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        resolve(result);
      },
    );
  });
};

const createLogRepository = async data => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO log_riegos (electrovalvulaId, apertura, fecha) VALUES ('${data.electrovalveId}','${data.action}','${data.date}');`,
      (error, result, fields) => {
        if (error) {
          console.error(error);
          reject(error);
        }
        resolve(result);
      },
    );
  });
};
module.exports = { getLogsByElectrovalveIdRepository, createLogRepository };
