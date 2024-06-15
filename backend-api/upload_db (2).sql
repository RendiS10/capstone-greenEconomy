-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 14, 2024 at 12:38 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

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
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `description`) VALUES
(1, '2z', '76c41d8905adabc2e53716ba90d01d05.png', 'http://localhost:5000/images/76c41d8905adabc2e53716ba90d01d05.png', '2024-06-10 04:10:11', '2024-06-11 06:01:33', '2 sip');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `description`) VALUES
(18, 'green-eco 1', 'ae96c81c6039af92e5eeb97d7499d620.png', 'http://localhost:5000/images/ae96c81c6039af92e5eeb97d7499d620.png', '2024-06-08 07:10:24', '2024-06-11 06:01:03', 'hijau blalalallalalalalallalalalalallalalal lala l vajhfohoiefnsnv i  ehfw owytwu wuiuwtkbdj wwquha f ahuf'),
(19, 'green.', '2d28e29d69dd22ed058a091e8ec0f405.png', 'http://localhost:5000/images/2d28e29d69dd22ed058a091e8ec0f405.png', '2024-06-08 07:12:11', '2024-06-12 09:56:27', 'hijau bgt.'),
(20, 'test', '22b227bcaf2a628a100b14fa2a15cdf9.png', 'http://localhost:5000/images/22b227bcaf2a628a100b14fa2a15cdf9.png', '2024-06-08 07:41:45', '2024-06-08 07:41:45', 'sip'),
(23, 'test aja', '4ea98fe648a0b853ab379c928b5fd0bf.jpg', 'http://localhost:5000/images/4ea98fe648a0b853ab379c928b5fd0bf.jpg', '2024-06-08 16:43:14', '2024-06-08 16:43:14', 'test aja');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', '2024-06-14 12:14:42', '2024-06-14 12:14:42'),
(2, 'john_doe', 'john_doe', '2024-06-14 12:32:39', '2024-06-14 12:32:39'),
(3, 'jane_smith', 'jane_smith', '2024-06-14 12:32:39', '2024-06-14 12:32:39'),
(4, 'alice_wonderland', 'alice_wonderland', '2024-06-14 12:32:39', '2024-06-14 12:32:39');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
