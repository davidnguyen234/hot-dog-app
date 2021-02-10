DROP SCHEMA IF EXISTS `hot-dog-db`;
CREATE SCHEMA `hot-dog-db`;
USE `hot-dog-db`;

-- -----------------------------------------------------
-- Table Employee
-- -----------------------------------------------------
CREATE TABLE Employee (
  employee_id 				INT 		      NOT NULL,
  employee_first_name VARCHAR(45) 	NOT NULL,
  employee_last_name 	VARCHAR(45)   NOT NULL,
  employee_phone 			INT 		    	NOT NULL,
  employee_salary			INT 		    	NOT NULL,
  PRIMARY KEY (employee_id));


-- -----------------------------------------------------
-- Table Address
-- -----------------------------------------------------
CREATE TABLE Address (
  address_id 	  	INT 		      NOT NULL,
  address_street 	VARCHAR(45)		NOT NULL,
  address_suite 	INT 			    NOT NULL,
  address_zip 		INT 		    	NOT NULL,
  address_city 		VARCHAR(45) 	NOT NULL,
  address_state 	VARCHAR(45) 	NOT NULL,
  PRIMARY KEY (address_id));


-- -----------------------------------------------------
-- Table Vendor
-- -----------------------------------------------------
CREATE TABLE Vendor (
  vendor_id 	  INT 	NOT NULL,
  employee_id   INT 	NOT NULL,
  address_id 	  INT 	NOT NULL,
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
CREATE TABLE Admin (
  admin_id 		  INT		NOT NULL,
  employee_id 	INT 	NOT NULL,
  PRIMARY KEY (admin_id),
  INDEX fk_Admin_Employee_idx (employee_id ASC) VISIBLE,
  CONSTRAINT fk_Admin_Employee FOREIGN KEY (employee_id) REFERENCES Employee (employee_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table Inventory
-- -----------------------------------------------------
CREATE TABLE Inventory (
  inventory_id 		INT 			    NOT NULL,
  inventory_type 	VARCHAR(45)   NOT NULL,
  inventory_price INT 			    NOT NULL,
  inventory_cost 	INT 			    NOT NULL,
  PRIMARY KEY (inventory_id));


-- -----------------------------------------------------
-- Table Customer
-- -----------------------------------------------------
CREATE TABLE Customer (
  cust_id 			    INT 			    NOT NULL,
  address_id 		    INT 			    NOT NULL,
  cust_first_name 	VARCHAR(45) 	NOT NULL,
  cust_last_name    VARCHAR(45) 	NOT NULL,
  PRIMARY KEY (cust_id),
  INDEX fk_Customer_Address_idx (address_id ASC) VISIBLE,
  CONSTRAINT fk_Customer_Address FOREIGN KEY (address_id) REFERENCES Address (address_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table Order
-- -----------------------------------------------------
CREATE TABLE `Order` (
  order_id 			    INT 			    NOT NULL,
  vendor_id 		    INT 			    NOT NULL,
  cust_id 			    INT 			    NOT NULL,
  order_price 		  VARCHAR(45)   NOT NULL,
  order_date_time   DATETIME 		   NOT NULL,
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
CREATE TABLE Payment (
  payment_id 		    	INT 	  	NOT NULL,
  cust_id 				    INT 	   	NOT NULL,
  payment_price 		  INT 		  NOT NULL,
  payment_date_time 	DATETIME 	NOT NULL,
  PRIMARY KEY (payment_id),
  INDEX fk_Payment_Customer_idx (cust_id ASC) VISIBLE,
  CONSTRAINT fk_Payment_Customer FOREIGN KEY (cust_id) REFERENCES Customer (cust_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table Vendor_has_Inventory
-- -----------------------------------------------------
CREATE TABLE Vendor_has_Inventory (
  vendor_id 		    INT 		  NOT NULL,
  inventory_id 		  INT 		  NOT NULL,
  inventory_avail 	TINYINT 	NOT NULL,
  PRIMARY KEY (vendor_id, inventory_id),
  INDEX fk_Vendor_has_Inventory_Inventory_idx (inventory_id ASC) VISIBLE,
  INDEX fk_Vendor_has_Inventory_Vendor_idx (vendor_id ASC) VISIBLE,
  CONSTRAINT fk_Vendor_has_Inventory_Vendor FOREIGN KEY (vendor_id) REFERENCES Vendor (vendor_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Vendor_has_Inventory_Inventory FOREIGN KEY (inventory_id) REFERENCES Inventory (inventory_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);