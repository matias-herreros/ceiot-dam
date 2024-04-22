-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql-server
-- Tiempo de generación: 30-11-2020 a las 23:27:10
-- Versión del servidor: 5.7.27
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `DAM`
--
CREATE DATABASE IF NOT EXISTS `dam` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dam`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispositivos`
--

CREATE TABLE `dispositivos` (
  `dispositivoId` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `ubicacion` varchar(200) DEFAULT NULL,
  `electrovalvulaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dispositivos`
--

INSERT INTO `dispositivos` (`dispositivoId`, `nombre`, `ubicacion`, `electrovalvulaId`) VALUES
(1, 'Sensor 1', 'Patio', 1),
(2, 'Sensor 2', 'Cocina', 2),
(3, 'Sensor 3', 'Jardin Delantero', 3),
(4, 'Sensor 4', 'Living', 4),
(5, 'Sensor 5', 'Habitacion 1', 5),
(6, 'Sensor 6', 'Habitacion 2', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `electrovalvulas`
--

CREATE TABLE `electrovalvulas` (
  `electrovalvulaId` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `estado` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `electrovalvulas`
--

INSERT INTO `electrovalvulas` (`electrovalvulaId`, `nombre`, `estado`) VALUES
(1, 'eLPatio', 0),
(2, 'eLCocina', 0),
(3, 'eLJardinDelantero', 0),
(4, 'eLLiving', 0),
(5, 'eLHabitacion1', 0),
(6, 'eLHabitacion2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log_riegos`
--

CREATE TABLE `log_riegos` (
  `logRiegoId` int(11) NOT NULL,
  `apertura` tinyint(4) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `electrovalvulaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mediciones`
--

CREATE TABLE `mediciones` (
  `medicionId` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  `dispositivoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mediciones`
--

INSERT INTO `mediciones` (`medicionId`, `fecha`, `valor`, `dispositivoId`) VALUES
(1, '2020-11-26 21:19:41', '60', 1),
(2, '2020-11-26 21:19:41', '40', 1),
(3, '2020-11-26 21:19:41', '30', 2),
(4, '2020-11-26 21:19:41', '50', 3),
(5, '2020-11-26 21:19:41', '33', 5),
(6, '2020-11-26 21:19:41', '17', 4),
(7, '2020-11-26 21:19:41', '29', 6),
(8, '2020-11-26 21:19:41', '20', 1),
(9, '2020-11-26 21:19:41', '44', 4),
(10, '2020-11-26 21:19:41', '61', 5),
(11, '2020-11-26 21:19:41', '12', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD PRIMARY KEY (`dispositivoId`,`electrovalvulaId`),
  ADD KEY `fk_Dispositivos_Electrovalvulas1_idx` (`electrovalvulaId`);

--
-- Indices de la tabla `electrovalvulas`
--
ALTER TABLE `electrovalvulas`
  ADD PRIMARY KEY (`electrovalvulaId`);

--
-- Indices de la tabla `log_riegos`
--
ALTER TABLE `log_riegos`
  ADD PRIMARY KEY (`logRiegoId`,`electrovalvulaId`),
  ADD KEY `fk_Log_Riegos_Electrovalvulas1_idx` (`electrovalvulaId`);

--
-- Indices de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD PRIMARY KEY (`medicionId`,`dispositivoId`),
  ADD KEY `fk_Mediciones_Dispositivos_idx` (`dispositivoId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  MODIFY `dispositivoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `electrovalvulas`
--
ALTER TABLE `electrovalvulas`
  MODIFY `electrovalvulaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `log_riegos`
--
ALTER TABLE `log_riegos`
  MODIFY `logRiegoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  MODIFY `medicionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD CONSTRAINT `fk_Dispositivos_Electrovalvulas1` FOREIGN KEY (`electrovalvulaId`) REFERENCES `electrovalvulas` (`electrovalvulaId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `log_riegos`
--
ALTER TABLE `log_riegos`
  ADD CONSTRAINT `fk_Log_Riegos_Electrovalvulas1` FOREIGN KEY (`electrovalvulaId`) REFERENCES `electrovalvulas` (`electrovalvulaId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD CONSTRAINT `fk_Mediciones_Dispositivos` FOREIGN KEY (`dispositivoId`) REFERENCES `dispositivos` (`dispositivoId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;