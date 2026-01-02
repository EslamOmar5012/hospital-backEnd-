-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2026 at 03:02 PM
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
-- Database: `hospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `a_id` int(11) NOT NULL,
  `a_email` varchar(250) NOT NULL,
  `a_password` varchar(250) NOT NULL,
  `a_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`a_id`, `a_email`, `a_password`, `a_created_at`) VALUES
(20, 'slam@gmail.com', '$2b$10$F8qiMORsE6RLFMQt0N/k4OMD/0U3CcfcE0HD/hEoQjeT2h8g5BNRm', '2025-12-31 21:44:40'),
(21, 'eslam@gmail.com', '$2b$10$4ErtxgqbOUyNJ5d1F3CPr.QmCTVGj.SITZE0LjZEHo8Cbb3KyK1aK', '2025-12-31 21:46:21'),
(22, 'saleh@gmail.com', '$2b$10$4N4pfhio5e.8Bbnlk2ujguAjr3QibauNs8/aVEYnsQmUCacp8aNRS', '2026-01-01 15:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `brandnames`
--

CREATE TABLE `brandnames` (
  `d_number` int(11) DEFAULT NULL,
  `brand_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `consaltants`
--

CREATE TABLE `consaltants` (
  `c_id` int(11) NOT NULL,
  `c_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drugs`
--

CREATE TABLE `drugs` (
  `d_number` int(11) NOT NULL,
  `d_rec_dose` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drugs_records`
--

CREATE TABLE `drugs_records` (
  `drug_number` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `nurse_id` int(11) NOT NULL,
  `dosage` varchar(250) NOT NULL,
  `taken_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `examins`
--

CREATE TABLE `examins` (
  `consaltant_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nurses`
--

CREATE TABLE `nurses` (
  `n_number` int(11) NOT NULL,
  `n_name` varchar(250) NOT NULL,
  `n_address` varchar(250) NOT NULL,
  `ward_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `p_id` int(11) NOT NULL,
  `p_name` varchar(250) NOT NULL,
  `p_DOB` datetime DEFAULT NULL,
  `ward_id` int(11) DEFAULT NULL,
  `consaltant_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wards`
--

CREATE TABLE `wards` (
  `w_id` int(11) NOT NULL,
  `w_name` varchar(250) NOT NULL,
  `supervisor_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`a_id`),
  ADD UNIQUE KEY `a_email` (`a_email`);

--
-- Indexes for table `brandnames`
--
ALTER TABLE `brandnames`
  ADD KEY `d_number` (`d_number`);

--
-- Indexes for table `consaltants`
--
ALTER TABLE `consaltants`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `drugs`
--
ALTER TABLE `drugs`
  ADD PRIMARY KEY (`d_number`);

--
-- Indexes for table `drugs_records`
--
ALTER TABLE `drugs_records`
  ADD KEY `fk_dr_d` (`drug_number`),
  ADD KEY `fk_dr_p` (`patient_id`),
  ADD KEY `fk_dr_n` (`nurse_id`);

--
-- Indexes for table `examins`
--
ALTER TABLE `examins`
  ADD KEY `fk_e_c` (`consaltant_id`),
  ADD KEY `fk_e_p` (`patient_id`);

--
-- Indexes for table `nurses`
--
ALTER TABLE `nurses`
  ADD PRIMARY KEY (`n_number`),
  ADD KEY `fk_n_w` (`ward_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`p_id`),
  ADD KEY `fk_p_w` (`ward_id`),
  ADD KEY `fk_p_c` (`consaltant_id`);

--
-- Indexes for table `wards`
--
ALTER TABLE `wards`
  ADD PRIMARY KEY (`w_id`),
  ADD KEY `fk_w_n` (`supervisor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `consaltants`
--
ALTER TABLE `consaltants`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `drugs`
--
ALTER TABLE `drugs`
  MODIFY `d_number` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nurses`
--
ALTER TABLE `nurses`
  MODIFY `n_number` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wards`
--
ALTER TABLE `wards`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brandnames`
--
ALTER TABLE `brandnames`
  ADD CONSTRAINT `brandnames_ibfk_1` FOREIGN KEY (`d_number`) REFERENCES `drugs` (`d_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `drugs_records`
--
ALTER TABLE `drugs_records`
  ADD CONSTRAINT `fk_dr_d` FOREIGN KEY (`drug_number`) REFERENCES `drugs` (`d_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_dr_n` FOREIGN KEY (`nurse_id`) REFERENCES `nurses` (`n_number`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_dr_p` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `examins`
--
ALTER TABLE `examins`
  ADD CONSTRAINT `fk_e_c` FOREIGN KEY (`consaltant_id`) REFERENCES `consaltants` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_e_p` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `nurses`
--
ALTER TABLE `nurses`
  ADD CONSTRAINT `fk_n_w` FOREIGN KEY (`ward_id`) REFERENCES `wards` (`w_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `fk_p_c` FOREIGN KEY (`consaltant_id`) REFERENCES `consaltants` (`c_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_p_w` FOREIGN KEY (`ward_id`) REFERENCES `wards` (`w_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wards`
--
ALTER TABLE `wards`
  ADD CONSTRAINT `fk_w_n` FOREIGN KEY (`supervisor_id`) REFERENCES `nurses` (`n_number`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
