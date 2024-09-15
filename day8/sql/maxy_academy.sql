-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2024 at 06:21 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maxy_academy`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Country` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Married` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `Name`, `Age`, `Country`, `Address`, `Married`) VALUES
(1, 'Otto Clay', 61, 6, 'Ap #897-1459 Quam Avenue', 0),
(2, 'Connor Johnston', 73, 7, 'Ap #370-4647 Dis Av.', 0),
(3, 'Lacey Hess', 29, 7, 'Ap #365-8835 Integer St.', 0),
(4, 'Timothy Henson', 78, 1, '911-5143 Luctus Ave', 0),
(5, 'Ramona Benton', 43, 5, 'Ap #614-689 Vehicula Street', 1),
(6, 'Ezra Tillman', 51, 1, 'P.O. Box 738, 7583 Quisque St.', 1),
(7, 'Dante Carter', 59, 1, 'P.O. Box 976, 6316 Lorem, St.', 0),
(8, 'Christopher Mcclure', 58, 1, '847-4303 Dictum Av.', 1),
(9, 'Ruby Rocha', 62, 2, '5212 Sagittis Ave', 0),
(10, 'Imelda Hardin', 39, 5, '719-7009 Auctor Av.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`Id`, `Name`) VALUES
(0, ''),
(1, 'United States'),
(2, 'Canada'),
(3, 'United Kingdom'),
(4, 'France'),
(5, 'Brazil'),
(6, 'China'),
(7, 'Russia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Country` (`Country`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`Country`) REFERENCES `countries` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
