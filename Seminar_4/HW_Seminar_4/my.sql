
-- create
CREATE TABLE studets (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO studets (name, age, address) VALUES ('Иван', 20, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Петр', 22, 'Владимр');
INSERT INTO studets (name, age, address) VALUES ('Семен', 35, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Алекснадр', 21, 'Красноярск');
INSERT INTO studets (name, age, address) VALUES ('Мария', 30,  'Тула');
INSERT INTO studets (name, age, address) VALUES ('Лидия', 19, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Марк', 29, 'Омск');
INSERT INTO studets (name, age, address) VALUES ('Анна', 36, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Давид', 18, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Роман', 24, 'Жданов');
INSERT INTO studets (name, age, address) VALUES ('Сергей',28, 'Тула');
INSERT INTO studets (name, age, address) VALUES ('София', 29, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Дарья', 30, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Евгений', 19, 'Моска');
INSERT INTO studets (name, age, address) VALUES ('Вадим', 44, 'Моска');

-- fetch 
SELECT name as Имя 
FROM studets 
WHERE address = 'Моска' AND age >= 18 AND age < 30;