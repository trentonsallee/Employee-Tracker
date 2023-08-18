use employees;

INSERT INTO employee
(first_name,  last_name, role_id)
--!need a manager key-->
VALUES
("John", "Doe", 1),
("Ashley", "Rodriguez", 2),
("Kunal", "Signh", 3),
("Sarah", "Lourd", 4),
("Mike", "Chan", 5),
("Kevin", "Tupik", 6),
("Malia", "Brown", 7),
("Tom", "Allen", 8);

INSERT INTO department
(name, department_id)
VALUES
("Sales", 1), 
("Engineering", 2),
("Finance", 3),
("Legal", 4);

INSERT INTO role
(title, salary, department_id)
VALUES
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Acount Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 3),
("Lawyer", 190000, 4);

