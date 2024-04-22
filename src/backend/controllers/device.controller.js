const express = require('express');
const { Router } = express;
const { logger } = require('../utils/log.config.js');
const {
  getAllDevices,
  createDevice,
  getDeviceById,
  getAllDeviceData,
  updateDeviceElectrovalveState,
} = require('../services/device.service.js');

const deviceRouter = Router();

deviceRouter.get('/details', async (req, res) => {
  try {
    logger.info(`GET All Devices`);
    return res.send(await getAllDeviceData());
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

deviceRouter.get('/:id', async (req, res) => {
  try {
    logger.info(`GET Device By Id`);
    return res.send(await getDeviceById(parseInt(req.params.id)));
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

deviceRouter.get('', async (req, res) => {
  try {
    logger.info(`GET All Devices`);
    return res.send(await getAllDevices());
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

deviceRouter.post('', async (req, res) => {
  try {
    const device = await createDevice(req.body);
    logger.info(`Inserted device with id: ${device.id}`);
    return res.send(`Created new device with ID: ${device}`);
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

deviceRouter.put('/:id', async (req, res) => {
  try {
    await updateDeviceElectrovalveState(parseInt(req.params.id));
    logger.info(`Updated device with id: ${parseInt(req.params.id)}`);
    return res.send(`Updated device with ID: ${parseInt(req.params.id)}`);
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = deviceRouter;
