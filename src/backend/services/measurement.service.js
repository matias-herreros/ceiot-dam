const {
  getMeasurementsByDeviceIdRepository,
  createMeasurementRepository,
} = require('../repositories/measurement.repository');

const getMeasurementsByDeviceId = async id => {
  const measurements = await getMeasurementsByDeviceIdRepository(id);
  return measurements.map(measurement => {
    return {
      id: measurement.medicionId,
      date: measurement.fecha,
      value: parseInt(measurement.valor),
    };
  });
};

const createMeasurement = async payload => {
  const data = {
    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
    value: Math.floor(Math.random() * 71),
    deviceId: payload.deviceId,
  };
  return await createMeasurementRepository(data);
};

module.exports = { getMeasurementsByDeviceId, createMeasurement };
