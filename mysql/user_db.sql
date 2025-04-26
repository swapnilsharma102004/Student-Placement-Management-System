-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2025 at 06:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `USN` varchar(20) NOT NULL,
  `Domain` text NOT NULL,
  `CV` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `USN`, `Domain`, `CV`) VALUES
(1, '1AY22CS152', 'Java', 'uploads/2_VECTOR CALUCULUS.pdf'),
(2, '1AY22CS161', 'frontend developer', 'uploads/scr (5) (1).pdf'),
(17, '1AY22CS217', 'frontend developer', 'uploads/BCS502-module-1-pdf.pdf'),
(18, '1AY22CS100', 'ghar', 'uploads/BCS502-module-1-pdf.pdf'),
(19, '1AY22CS152', 'adwds', 'uploads/2_VECTOR CALUCULUS.pdf'),
(20, '1AY22CS198', 'asbyd', 'uploads/Ch2_Practice.pdf'),
(21, '1AY22CS198', 'cooking', 'uploads/Ch2_Practice.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `interviews`
--

CREATE TABLE `interviews` (
  `id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `interview_date` date NOT NULL,
  `interview_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interviews`
--

INSERT INTO `interviews` (`id`, `student_name`, `interview_date`, `interview_time`) VALUES
(1, 'Swapnil Sharma', '2024-12-18', '23:20:00'),
(2, 'Sana K S', '2025-01-03', '18:12:00'),
(3, 'Rishikesh Raj', '2025-01-11', '16:07:00'),
(4, 'Swapnil Sharma', '2025-04-27', '17:29:00');

-- --------------------------------------------------------

--
-- Table structure for table `job_openings`
--

CREATE TABLE `job_openings` (
  `id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_description` text NOT NULL,
  `eligibility` text NOT NULL,
  `deadline` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_openings`
--

INSERT INTO `job_openings` (`id`, `job_title`, `job_description`, `eligibility`, `deadline`) VALUES
(2, 'SDE1', 'frontend developer', 'reactjs, javascript', '2024-12-25'),
(11, 'SDE2', 'software engineer', 'java', '2024-12-24'),
(12, 'SDE3', 'frontend developer', 'minor nahi hona chahiye', '2025-01-02'),
(13, 'PAKODE wali', 'cooking ', 'cg', '2025-01-04'),
(14, 'jhfocuhp', 'ouhacuh', 'pijdcoij', '2025-03-22'),
(15, 'kbergjn', 'ljbiyg', 'ib9yg', '2025-04-26');

-- --------------------------------------------------------

--
-- Table structure for table `user_form`
--

CREATE TABLE `user_form` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_form`
--

INSERT INTO `user_form` (`id`, `name`, `email`, `password`, `user_type`) VALUES
(1, 'swapnil sharma', 'swapnil102004@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'user'),
(2, 'sana ks', 'sana@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'admin'),
(3, 'rishi', 'rishi@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'user'),
(4, 'om', 'omdesai@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'admin'),
(10, 'khushi', 'kumari@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'user'),
(11, 'Divya ', 'divya@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'user'),
(12, 'veena', 'veena@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'user'),
(13, 'tarun', 'tarun@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interviews`
--
ALTER TABLE `interviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_openings`
--
ALTER TABLE `job_openings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_form`
--
ALTER TABLE `user_form`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `interviews`
--
ALTER TABLE `interviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `job_openings`
--
ALTER TABLE `job_openings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user_form`
--
ALTER TABLE `user_form`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
