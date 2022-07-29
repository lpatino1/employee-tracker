USE business_db;

INSERT INTO department(name)
VALUES 
("Finance"),
("HR"),
("Culinary");

INSERT INTO role (title, salary, department_id)
VALUES  ("chef", 60000, 3),
        ("Consultant", 120000, 2),
        ("HR specialist", 45000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Starr", 1, NULL),
        ("Noah", "Green", 2, 1);