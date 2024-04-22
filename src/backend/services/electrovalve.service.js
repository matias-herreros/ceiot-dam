const {
  getElectrovalveByIdRepository,
  updateElectrovalveStateByIdRepository,
} = require('../repositories/electrovalve.repository');

const getElectrovalveById = async id => {
  const data = await getElectrovalveByIdRepository(id);
  if (data.length > 1) {
    throw new Error(`Multiple devices with the same id`);
  }

  return {
    id: data[0].electrovalvulaId,
    name: data[0].nombre,
    state: data[0].estado == 0 ? false : true,
  };
};

const updateElectrovalveStateById = async (electrovalveId, state) => {
  return await updateElectrovalveStateByIdRepository(electrovalveId, state);
};

module.exports = { getElectrovalveById, updateElectrovalveStateById };
