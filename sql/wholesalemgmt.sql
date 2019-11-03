-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2019 at 01:12 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wholesalemgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `username` varchar(15) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`username`, `password`) VALUES
('Jeff', 'pass');

-- --------------------------------------------------------

--
-- Table structure for table `buys`
--

CREATE TABLE `buys` (
  `buy_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer`
--

CREATE TABLE `manufacturer` (
  `manu_id` int(13) NOT NULL,
  `mname` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone_no` int(12) NOT NULL,
  `category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturer`
--

INSERT INTO `manufacturer` (`manu_id`, `mname`, `address`, `phone_no`, `category`) VALUES
(1, 'Britannia', 'Gurgaon', 44444, 'Food'),
(2, 'Amul', 'Gujarat', 333333, 'Dairy'),
(3, 'Parle', 'Mumbai', 22222, 'Food'),
(4, 'Jeff', 'fgfg', 786, 'High End');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `pay_id` int(13) NOT NULL,
  `product_id` int(13) NOT NULL,
  `retail_id` int(13) NOT NULL,
  `manu_id` int(13) NOT NULL,
  `amount` int(25) NOT NULL,
  `isPaid` tinyint(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(13) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `buying_price` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `pname`, `buying_price`, `selling_price`, `quantity`, `category`) VALUES
(1, 'JimJam', 8, 10, 10000, 'Supermarket'),
(2, 'Cheeslings', 10, 12, 1000, 'Supermarket'),
(3, 'Strawberry Icecream', 20, 25, 10000, 'Supermarket'),
(4, 'Everyday Milk Powder', 100, 125, 1000, 'Supermarket'),
(5, 'Goodday Biscuit', 20, 25, 1000, 'Supermarket'),
(11, 'Gravity', 700, 800, 42, 'High End');

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

CREATE TABLE `retailer` (
  `retailer_id` int(13) NOT NULL,
  `rname` varchar(30) NOT NULL,
  `balance` int(30) NOT NULL,
  `phone_no` int(12) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `retailer`
--

INSERT INTO `retailer` (`retailer_id`, `rname`, `balance`, `phone_no`, `category`) VALUES
(1, 'Magsons', 30000, 999999, 'Supermarket'),
(2, 'Borkars', 50000, 888888, 'Supermarket'),
(3, 'KMart', 10000, 7777777, 'Green Grocery'),
(4, 'Mall De Goa', 300000, 666666, 'High End Consumer'),
(5, 'Caculo Mall', 100000, 55555555, 'High End Consumer'),
(7, 'Jeff', 454, 6767, 'High End'),
(8, 'gghg', 454, 65656, 'High End');

-- --------------------------------------------------------

--
-- Table structure for table `supplies`
--

CREATE TABLE `supplies` (
  `supply_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`manu_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`pay_id`),
  ADD KEY `retail_id` (`retail_id`),
  ADD KEY `payment_ibfk_1` (`product_id`),
  ADD KEY `payment_ibfk_3` (`manu_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `retailer`
--
ALTER TABLE `retailer`
  ADD PRIMARY KEY (`retailer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `manu_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `retailer`
--
ALTER TABLE `retailer`
  MODIFY `retailer_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`retail_id`) REFERENCES `retailer` (`retailer_id`),
  ADD CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`manu_id`) REFERENCES `manufacturer` (`manu_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
