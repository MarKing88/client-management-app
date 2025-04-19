CREATE DATABASE client_management;

USE client_management;

CREATE TABLE clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  address TEXT,
  password VARCHAR(100)
);

CREATE TABLE meetings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  topic VARCHAR(255),
  start_time DATETIME,
  number_of_people INT,
  client_id INT,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
