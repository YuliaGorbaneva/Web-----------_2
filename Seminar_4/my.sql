
-- create
CREATE TABLE employee (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO employee (name, dept) VALUES ('Clark', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO employee (name, dept) VALUES ('Ava', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Devid', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Tom', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Jone', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Rey', 'Sales');
INSERT INTO employee (name, dept) VALUES ('Liza', 'Sales');

-- fetch 
SELECT * FROM employee WHERE dept = 'Sales';

SELECT * FROM employee WHERE dept = 'Sales' AND id > 2;

SELECT id as ID, name as Имя 
FROM employee 
WHERE dept = 'Sales' AND id > 2
ORDER BY name DESC;

SELECT id as ID, name as Имя
FROM employee
WHERE (dept = 'Sales' AND id > 2 AND name LIKE "%a%") OR (name = 'Dave')
ORDER BY name; 
