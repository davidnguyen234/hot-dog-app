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
  address_suite INT NOT NULL,
  address_street VARCHAR(45) NOT NULL,
  address_zip INT NOT NULL,
  address_city VARCHAR(45) NOT NULL,
  address_state VARCHAR(45) NOT NULL,
  PRIMARY KEY (address_id));


-- -----------------------------------------------------
-- Table Vendor
-- -----------------------------------------------------
CREATE TABLE `Vendor` (
  vendor_id INT NOT NULL,
  employee_id INT NOT NULL,
  address_id INT NOT NULL,
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
-- Table Customer
-- -----------------------------------------------------
CREATE TABLE `Customer` (
  cust_id INT NOT NULL,
  address_id INT NOT NULL,
  cust_first_name VARCHAR(45) NOT NULL,
  cust_last_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (cust_id),
  INDEX fk_Customer_Address_idx (address_id ASC) VISIBLE,
  CONSTRAINT fk_Customer_Address FOREIGN KEY (address_id) REFERENCES Address (address_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table Order
-- -----------------------------------------------------
CREATE TABLE `Order` (
  order_id INT NOT NULL,
  vendor_id INT NOT NULL,
  cust_id INT NOT NULL,
  order_price VARCHAR(45) NOT NULL,
  order_date_time DATETIME NOT NULL,
  PRIMARY KEY (order_id),
  INDEX fk_Order_Vendor_idx (vendor_id ASC) VISIBLE,
  INDEX fk_Order_Customer_idx (cust_id ASC) VISIBLE,
  CONSTRAINT fk_Order_Vendor FOREIGN KEY (vendor_id) REFERENCES Vendor (vendor_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Order_Customer FOREIGN KEY (cust_id) REFERENCES Customer (cust_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table Payment
-- -----------------------------------------------------
CREATE TABLE `Payment` (
  payment_id INT NOT NULL,
  cust_id INT NOT NULL,
  payment_price INT NOT NULL,
  payment_date_time DATETIME NOT NULL,
  PRIMARY KEY (payment_id),
  INDEX fk_Payment_Customer_idx (cust_id ASC) VISIBLE,
  CONSTRAINT fk_Payment_Customer FOREIGN KEY (cust_id) REFERENCES Customer (cust_id)
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


INSERT `Address`
  VAlUES
  (1, 44, 'Forest Dale', 98101, 'Seattle', 'Washington'),
  (2, 100, 'Pleasure', 98114, 'Seattle', 'Washington'),
  (3, 23, 'Melby', 98101, 'Seattle', 'Washington'),
  (4, 2800, 'Sherman', 98125, 'Seattle', 'Washington'),
  (5, 101, 'Cottonwood', 98101, 'Seattle', 'Washington'),
  (6, 562, 'Rockefeller', 98122, 'Seattle', 'Washington');


INSERT `Employee`
  VALUES
  (1, 'Caprice'  , 'Gregoratti', '3123817003'),
  (2, 'Ezra'     , 'Dorbin'    , '2627518167'),
  (3, 'Meade'    , 'Marder'    , '2966668589'),
  (4, 'Teresa'   , 'Shade'     , '5319315327');

INSERT `Admin`
  VAlUES
  (100, 2); ## Ezra Dorbin

INSERT `Vendor`
  VALUES
  (101, 1, 2), ## Caprice Gregoratti at address #2
  (102, 3, 1),
  (103, 4, 6);

INSERT `Customer`
  VALUES
  (1, 2, 'Fidelity' , 'Bennis'),
  (2, 5, 'Magda'    , 'Margrie'),
  (3, 4, 'Alfons'   , 'Frearson'),
  (4, 3, 'Florri'   , 'Ormerod');

INSERT `Order`
  VALUES
  (001, 101, 1, 14.98, '2021-02-20 09:58:17'),
  (002, 103, 4, 7.99, '2021-02-20 10:26:09'),
  (003, 103, 1, 4.98, '2021-02-21 07:01:04'),
  (004, 101, 2, 14.97, '2021-02-21 01:50:38'),
  (005, 102, 4, 25.96, '2021-02-22 12:40:57'),
  (006, 101, 3, 3.97, '2021-02-24 13:34:31');

INSERT `Payment`
  VALUES
  (001, 1, 14.98, '2021-02-20 09:58:17'),
  (002, 4, 7.99, '2021-02-20 10:26:09'),
  (003, 1, 4.98, '2021-02-21 07:01:04'),
  (004, 2, 14.97, '2021-02-21 01:50:38'),
  (005, 4, 25.96, '2021-02-22 12:40:57'),
  (006, 3, 3.97, '2021-02-24 13:34:31');

INSERT `Inventory`
  VALUES
  (1, 'Hotdog', 3.00, 0.50),
  (2, 'Chips', 1.98, 0.25),
  (3, 'Soda', .99, 0.25),
  (4, 'Cookie', 1.79, 0.75);

INSERT `Vendor_has_Inventory`
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
  (103, 4, 1);
    
    


###########################################
# ▒█▀▀▀█ ░█▀▀█ ▒█▀▄▀█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   #
# ░▀▀▀▄▄ ▒█▄▄█ ▒█▒█▒█ ▒█▄▄█ ▒█░░░ ▒█▀▀▀   #
# ▒█▄▄▄█ ▒█░▒█ ▒█░░▒█ ▒█░░░ ▒█▄▄█ ▒█▄▄▄   #
#                                         #	
#▒█▀▀█ ▒█░▒█ ▒█▀▀▀ ▒█▀▀█ ▀█▀ ▒█▀▀▀ ▒█▀▀▀█ #
#▒█░▒█ ▒█░▒█ ▒█▀▀▀ ▒█▄▄▀ ▒█░ ▒█▀▀▀ ░▀▀▀▄▄ #
#░▀▀█▄ ░▀▄▄▀ ▒█▄▄▄ ▒█░▒█ ▄█▄ ▒█▄▄▄ ▒█▄▄▄█ #
###########################################