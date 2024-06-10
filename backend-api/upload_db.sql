-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 04:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upload_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `description`) VALUES
(18, 'green-eco 1', '116cff7b2ad623c2066540394caa1e88.jpeg', 'http://localhost:5000/images/116cff7b2ad623c2066540394caa1e88.jpeg', '2024-06-08 07:10:24', '2024-06-08 16:42:44', 'hijau blalalallalalalalallalalalalallalalal lala l vajhfohoiefnsnv i  ehfw owytwu wuiuwtkbdj wwquha f ahufa'),
(19, 'green', 'bd6dee6a97b2c6a3af71d836b149c036.jpeg', 'http://localhost:5000/images/bd6dee6a97b2c6a3af71d836b149c036.jpeg', '2024-06-08 07:12:11', '2024-06-08 07:12:11', 'hujau bgt'),
(20, 'test', '22b227bcaf2a628a100b14fa2a15cdf9.png', 'http://localhost:5000/images/22b227bcaf2a628a100b14fa2a15cdf9.png', '2024-06-08 07:41:45', '2024-06-08 07:41:45', 'sip'),
(23, 'test aja', '4ea98fe648a0b853ab379c928b5fd0bf.jpg', 'http://localhost:5000/images/4ea98fe648a0b853ab379c928b5fd0bf.jpg', '2024-06-08 16:43:14', '2024-06-08 16:43:14', 'test aja'),
(24, '1', 'a2f444d9e2e43a5d0373b1a0d8cb2236.jpg', 'http://localhost:5000/images/a2f444d9e2e43a5d0373b1a0d8cb2236.jpg', '2024-06-09 14:01:27', '2024-06-09 14:01:27', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
