const {
  getLogsByElectrovalveIdRepository,
  createLogRepository,
} = require('../repositories/log.repository');

const getLogsByElectrovalveId = async id => {
  const logs = await getLogsByElectrovalveIdRepository(id);
  return logs.map(log => {
    return {
      id: log.logRiegoId,
      action: log.apertura == 0 ? 'CLOSE' : 'OPEN',
      date: log.fecha,
    };
  });
};

const createLog = async (id, state) => {
  const data = {
    electrovalveId: id,
    action: state,
    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };
  return await createLogRepository(data);
};

module.exports = { getLogsByElectrovalveId, createLog };
