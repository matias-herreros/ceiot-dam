const pool = require('../infra/db/mysql.database.config.js');

const getElectrovalveByIdRepository = async id => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM electrovalvulas WHERE electrovalvulas.electrovalvulaId = '${id}'`,
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

const updateElectrovalveStateByIdRepository = async (id, state) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE electrovalvulas SET estado='${state}' WHERE electrovalvulaId='${id}'`,
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
module.exports = { getElectrovalveByIdRepository, updateElectrovalveStateByIdRepository };
