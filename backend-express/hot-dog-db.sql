#####################################################
# ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▄░▒█ ▒█▀▀█    #
# ▒█░░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▄▄█ ░▒█░░ ▒█░ ▒█▒█▒█ ▒█░▄▄    #
# ▒█▄▄█ ▒█░▒█ ▒█▄▄▄ ▒█░▒█ ░▒█░░ ▄█▄ ▒█░░▀█ ▒█▄▄█    #
#
# ▒█▀▀▄ ░█▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█▀▀█ ░█▀▀█ ▒█▀▀▀█ ▒█▀▀▀  #
# ▒█░▒█ ▒█▄▄█ ░▒█░░ ▒█▄▄█ ▒█▀▀▄ ▒█▄▄█ ░▀▀▀▄▄ ▒█▀▀▀  #
# ▒█▄▄▀ ▒█░▒█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄  #
#####################################################
DROP SCHEMA IF EXISTS `hot-dog-db`;
CREATE SCHEMA `hot-dog-db`;
USE `hot-dog-db`;

-- -----------------------------------------------------
-- Table Employee
-- -----------------------------------------------------
CREATE TABLE `Employee` (
  employee_id INT NOT NULL,
  employee_first_name VARCHAR(45) NOT NULL,
  employee_last_name VARCHAR(45) NOT NULL,
  employee_phone VARCHAR(10)  NOT NULL,
  PRIMARY KEY (employee_id));

-- -----------------------------------------------------
-- Table Address
-- -----------------------------------------------------
CREATE TABLE `Address` (
  address_id INT NOT NULL,
  address_name VARCHAR(45) NOT NULL,
  address_cross_street VARCHAR(45) NOT NULL,
  address_city VARCHAR(45) NOT NULL,
  address_state VARCHAR(2) NOT NULL,
  address_zip INT NOT NULL,
  address_latitude  FLOAT NOT NULL,
  address_longitude FLOAT NOT NULL,
  PRIMARY KEY (address_id));

-- -----------------------------------------------------
-- Table Vendor
-- -----------------------------------------------------
CREATE TABLE `Vendor` (
  vendor_id INT NOT NULL,
  vendor_phone VARCHAR(45) NOT NULL,
  vendor_hours VARCHAR(45) NOT NULL,
  employee_id INT NOT NULL,
  address_id INT NOT NULL,
  vendor_avail TINYINT NOT NULL,
  PRIMARY KEY (vendor_id),
  INDEX fk_Vendor_Employee_idx (employee_id ASC) VISIBLE,
  INDEX fk_Vendor_Address_idx (address_id ASC) VISIBLE,
  CONSTRAINT fk_Vendor_Employee FOREIGN KEY (employee_id) REFERENCES Employee (employee_id)
    ON DELETE NO ACTION 
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Vendor_Address FOREIGN KEY (address_id) REFERENCES Address (address_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table Payment
-- -----------------------------------------------------
CREATE TABLE `Payment` (
  payment_id INT NOT NULL,
  vendor_id INT NOT NULL,
  payment_price INT NOT NULL,
  payment_date_time DATETIME NOT NULL,
  PRIMARY KEY (payment_id),
    INDEX fk_Payment_Vendor_idx (vendor_id ASC) VISIBLE,
  CONSTRAINT fk_Payment_Vendor FOREIGN KEY (vendor_id) REFERENCES Vendor (vendor_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table Admin
-- -----------------------------------------------------
CREATE TABLE `Admin` (
  admin_id INT NOT NULL,
  employee_id INT NOT NULL,
  PRIMARY KEY (admin_id),
	INDEX fk_Admin_Employee_idx (employee_id ASC) VISIBLE,
  CONSTRAINT fk_Admin_Employee FOREIGN KEY (employee_id) REFERENCES Employee (employee_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table Inventory
-- -----------------------------------------------------
CREATE TABLE `Inventory` (
  inventory_id INT NOT NULL,
  inventory_type VARCHAR(45) NOT NULL,
  inventory_price INT NOT NULL,
  inventory_cost INT NOT NULL,
  PRIMARY KEY (inventory_id));

-- -----------------------------------------------------
-- Table Orders
-- -----------------------------------------------------
CREATE TABLE `Orders` (
  orders_id INT NOT NULL,
  vendor_id INT NOT NULL,
  orders_price VARCHAR(45) NOT NULL,
  orders_date_time DATETIME NOT NULL,
  orders_status TINYINT NOT NULL,
  PRIMARY KEY (orders_id),
	INDEX fk_Orders_Vendor_idx (vendor_id ASC) VISIBLE,
  CONSTRAINT fk_Orders_Vendor FOREIGN KEY (vendor_id) REFERENCES Vendor (vendor_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table Vendor_has_Inventory
-- -----------------------------------------------------
CREATE TABLE `Vendor_has_Inventory` (
  vendor_id INT NOT NULL,
  inventory_id INT NOT NULL,
  inventory_avail TINYINT NOT NULL,
  PRIMARY KEY (vendor_id, inventory_id),
	INDEX fk_Vendor_has_Inventory_Inventory_idx (inventory_id ASC) VISIBLE,
	INDEX fk_Vendor_has_Inventory_Vendor_idx (vendor_id ASC) VISIBLE,
  CONSTRAINT fk_Vendor_has_Inventory_Vendor FOREIGN KEY (vendor_id) REFERENCES Vendor (vendor_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Vendor_has_Inventory_Inventory FOREIGN KEY (inventory_id) REFERENCES Inventory (inventory_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
##############################################################
#▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█░▒█ ▒█░░░ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▄░▒█ ▒█▀▀█ #
#▒█▄▄█ ▒█░░▒█ ▒█▄▄█ ▒█░▒█ ▒█░░░ ▒█▄▄█ ░▒█░░ ▒█░ ▒█▒█▒█ ▒█░▄▄ #
#▒█░░░ ▒█▄▄▄█ ▒█░░░ ░▀▄▄▀ ▒█▄▄█ ▒█░▒█ ░▒█░░ ▄█▄ ▒█░░▀█ ▒█▄▄█ #
#
#     ▒█▀▀▄ ░█▀▀█ ▀▀█▀▀ ░█▀▀█ ▒█▀▀█ ░█▀▀█ ▒█▀▀▀█ ▒█▀▀▀       #
#     ▒█░▒█ ▒█▄▄█ ░▒█░░ ▒█▄▄█ ▒█▀▀▄ ▒█▄▄█ ░▀▀▀▄▄ ▒█▀▀▀       #
#     ▒█▄▄▀ ▒█░▒█ ░▒█░░ ▒█░▒█ ▒█▄▄█ ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄       #
##############################################################
INSERT INTO `Address`
  VAlUES
  (1, 'Capitol Hill' , 'Harvard Ave E & E Roy St' , 'Seattle' , 'WA' , 98102 , 47.6253 , -122.3222),
  (2, 'Ballard' , 'Jones Ave NW & NW 70th St' , 'Seattle' , 'WA' , 98117 , 47.6792 , -122.3860),
  (3, 'Belltown' , '3rd Ave & Bell St' , 'Seattle' , 'WA' , 98121 , 47.6147 , -122.3448),
  (4, 'Fremont' , 'Fremont Ave N & N 39th St' , 'Seattle' , 'WA' , 98103 , 47.6542 , -122.3500),
  (5, 'Sodo' , '1st Ave S & S Stacy St' , 'Seattle' , 'WA' , 98134 , 47.5830 , -122.3348),
  (6, 'Queen Anne' , 'Queen Anne Ave N & W Galer St' , 'Seattle' , 'WA' , 98109 , 47.6323 , -122.3569);

INSERT INTO `Employee`
  VALUES
  (1, 'Caprice'  , 'Gregoratti', '3123817003'),
  (2, 'Ezra'     , 'Dorbin'    , '2627518167'),
  (3, 'Meade'    , 'Marder'    , '2966668589'),
  (4, 'Teresa'   , 'Shade'     , '5319315327');

INSERT INTO `Admin`
  VAlUES
  (100, 2); ## Ezra Dorbin

INSERT INTO `Vendor`
  VALUES
  (101, '(206) 485 - 1575', '12:00 PM - 8:00 PM', 1, 2, 1), ## Caprice Gregoratti at address #2
  (102, '(206) 428 - 5727', '12:00 PM - 8:00 PM', 3, 1, 0), 
  (103, '(206) 548 - 7586', '12:00 PM - 8:00 PM', 2, 6, 1), ## 0 == (vendor is closed) 1 == (true vendor is open)
  (104, '(206) 358 - 4581', '12:00 PM - 8:00 PM', 4, 5, 1);

INSERT INTO `Orders`
  VALUES
  (001, 101, 14.98, '2021-02-20 09:58:17', 0),
  (002, 103, 7.99, '2021-02-20 10:26:09', 0),
  (003, 103, 4.98, '2021-02-21 07:01:04', 0),
  (004, 101, 14.97, '2021-02-21 01:50:38', 0),
  (005, 102, 25.96, '2021-02-22 12:40:57', 0),
  (006, 101, 3.97, '2021-02-24 13:34:31', 0);

INSERT INTO `Payment`
  VALUES
  (001, 101, 14.98, '2021-02-20 09:58:17'),
  (002, 101, 7.99, '2021-02-20 10:26:09'),
  (003, 102, 4.98, '2021-02-21 07:01:04'),
  (004, 103,  14.97, '2021-02-21 01:50:38'),
  (005, 104,  25.96, '2021-02-22 12:40:57'),
  (006, 102,  3.97, '2021-02-24 13:34:31');

INSERT INTO `Inventory`
  VALUES
  (1, 'Hotdog', 3.00, 0.50),
  (2, 'Chips', 1.98, 0.25),
  (3, 'Soda', .99, 0.25),
  (4, 'Cookie', 1.79, 0.75);

INSERT INTO `Vendor_has_Inventory`
  VALUES
  (101, 1, 1), ## 0 == false (does not have). 1 == true (does have)
  (101, 2, 1),
  (101, 3, 1),
  (101, 4, 0),
  (102, 1, 1),
  (102, 2, 1),
  (102, 3, 0),
  (102, 4, 1),
  (103, 1, 1),
  (103, 2, 1),
  (103, 3, 1),
  (103, 4, 1),
  (104, 1, 1),
  (104, 2, 1),
  (104, 3, 1),
  (104, 4, 1);
    
###########################################
# ▒█▀▀▀█ ░█▀▀█ ▒█▀▄▀█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   #
# ░▀▀▀▄▄ ▒█▄▄█ ▒█▒█▒█ ▒█▄▄█ ▒█░░░ ▒█▀▀▀   #
# ▒█▄▄▄█ ▒█░▒█ ▒█░░▒█ ▒█░░░ ▒█▄▄█ ▒█▄▄▄   #
#                                         #	
#▒█▀▀█ ▒█░▒█ ▒█▀▀▀ ▒█▀▀█ ▀█▀ ▒█▀▀▀ ▒█▀▀▀█ #
#▒█░▒█ ▒█░▒█ ▒█▀▀▀ ▒█▄▄▀ ▒█░ ▒█▀▀▀ ░▀▀▀▄▄ #
#░▀▀█▄ ░▀▄▄▀ ▒█▄▄▄ ▒█░▒█ ▄█▄ ▒█▄▄▄ ▒█▄▄▄█ #
###########################################