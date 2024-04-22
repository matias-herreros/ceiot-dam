const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const { logger } = require('./utils/log.config.js');
const deviceRouter = require('./controllers/device.controller.js');
const cors = require('cors');

const PORT = config.API_PORT;

// API Server
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));
app.use(express.static('spa/static'));
app.use('/device', deviceRouter);

// Respuesta por default cuando no encuentra la ruta especificada
app.all('*', (req, res) => {
  logger.warn(`Path ${req.path} not implemented`);
  return res.status(404).json(`Ruta '${req.path}' no encontrada.`);
});

// logger.info('SQL device database up');

app.listen(PORT, () => {
  logger.info(`Listening at ${PORT}`);
});
