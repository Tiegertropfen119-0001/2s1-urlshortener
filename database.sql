-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Erstellungszeit: 27. Jun 2022 um 12:37
-- Server-Version: 10.6.5-MariaDB-1:10.6.5+maria~focal
-- PHP-Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `urls`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `urls`
--

CREATE TABLE `urls` (
  `ID` bigint(20) NOT NULL,
  `clearurl` mediumtext NOT NULL,
  `shortid` mediumtext NOT NULL,
  `clicks` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `urls`
--

INSERT INTO `urls` (`ID`, `clearurl`, `shortid`, `clicks`) VALUES
(1, 'https://0url.xyz/', 'credits', 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `urls`
--
ALTER TABLE `urls`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `urls`
--
ALTER TABLE `urls`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
