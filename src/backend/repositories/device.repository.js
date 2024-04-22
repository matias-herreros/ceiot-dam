const pool = require('../infra/db/mysql.database.config.js');

const getAllDevicesRepository = async () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM dispositivos', (error, result, fields) => {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(result);
    });
  });
};

const getDeviceByIdRepository = async id => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM dispositivos WHERE dispositivos.dispositivoId = '${id}'`,
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

const createDeviceRepository = async data => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO dispositivos (nombre, ubicacion, electrovalvulaId) VALUES ('${data.name}','${data.location}','${data.electrovalveId}')`,
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
module.exports = { getAllDevicesRepository, createDeviceRepository, getDeviceByIdRepository };
