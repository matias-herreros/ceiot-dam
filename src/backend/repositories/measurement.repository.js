const pool = require('../infra/db/mysql.database.config.js');

const getMeasurementsByDeviceIdRepository = async id => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM mediciones WHERE mediciones.dispositivoId = '${id}' ORDER BY fecha DESC`,
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
// fecha, valor, dispositivoId

const createMeasurementRepository = async data => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO mediciones (fecha, valor, dispositivoId) VALUES ('${data.date}', '${data.value}', '${data.deviceId}');`,
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
module.exports = { getMeasurementsByDeviceIdRepository, createMeasurementRepository };
