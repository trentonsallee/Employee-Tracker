DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE employee
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,

CREATE TABLE role
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
 
CREATE TABLE department (
id INT Engineering PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL
);