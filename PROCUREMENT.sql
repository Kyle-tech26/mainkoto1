CREATE TABLE `supplies_request_form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `employee_id` varchar(50) DEFAULT NULL,
  `office_designation` varchar(50) DEFAULT NULL,
  `item` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `supplier_name` varchar(100) DEFAULT NULL,
  `supplier_company` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
