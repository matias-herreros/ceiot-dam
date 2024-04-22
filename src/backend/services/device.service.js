const {
  getAllDevicesRepository,
  getDeviceByIdRepository,
  createDeviceRepository,
} = require('../repositories/device.repository.js');
const { getElectrovalveById, updateElectrovalveStateById } = require('./electrovalve.service.js');
const { getLogsByElectrovalveId, createLog } = require('./log.service.js');
const { getMeasurementsByDeviceId, createMeasurement } = require('./measurement.service.js');

const getAllDevices = async () => {
  const data = await getAllDevicesRepository();

  const devices = data.map(device => {
    return {
      id: device.dispositivoId,
      name: device.nombre,
      location: device.ubicacion,
      electrovalve: { id: device.electrovalvulaId },
    };
  });
  return devices;
};

const getDeviceById = async id => {
  const data = await getDeviceByIdRepository(id);
  if (data.length > 1) {
    throw new Error(`Multiple devices with the same id`);
  }
  const device = data[0];
  const [electrovalve, logs, measurements] = await Promise.all([
    getElectrovalveById(device.electrovalvulaId),
    getLogsByElectrovalveId(device.electrovalvulaId),
    getMeasurementsByDeviceId(device.dispositivoId),
  ]);

  return {
    id: device.dispositivoId,
    name: device.nombre,
    location: device.ubicacion,
    electrovalve: { ...electrovalve, irrigationLogs: logs },
    measurements,
  };
};

const createDevice = async data => {
  const device = await createDeviceRepository(data);
  return {
    id: device.dispositivoId,
    name: device.nombre,
    location: device.ubicacion,
    electrovalve: { id: device.electrovalvulaId },
  };
};

const getAllDeviceData = async id => {
  let devices = await getAllDevices();
  return await Promise.all(
    devices.map(async device => {
      const [electrovalve, logs, measurements] = await Promise.all([
        getElectrovalveById(device.electrovalve.id),
        getLogsByElectrovalveId(device.electrovalve.id),
        getMeasurementsByDeviceId(device.id),
      ]);

      return { ...device, electrovalve: { ...electrovalve, irrigationLogs: logs }, measurements };
    }),
  );
};

const updateDeviceElectrovalveState = async deviceId => {
  const device = await getDeviceById(deviceId);

  if (device.length > 1) {
    throw new Error(`Multiple devices with the same id`);
  }
  const updatedState = !device.electrovalve.state;
  const state = updatedState ? 1 : 0;

  const createMeasurementPromise = !updatedState
    ? createMeasurement({ deviceId: device.id })
    : null;
  const updateElectrovalveStatePromise = updateElectrovalveStateById(device.electrovalve.id, state);
  const createLogPromise = createLog(device.electrovalve.id, state);

  await Promise.all([createMeasurementPromise, updateElectrovalveStatePromise, createLogPromise]);

  return await getDeviceById(deviceId);
};

module.exports = {
  getAllDevices,
  createDevice,
  getDeviceById,
  getAllDeviceData,
  updateDeviceElectrovalveState,
};
