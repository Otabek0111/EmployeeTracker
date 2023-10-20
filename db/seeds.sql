-- Insert data into the 'department' table
INSERT INTO department (name)
VALUES
    ('Finance'),
    ('Marketing'),
    ('Sales');

-- Insert data into the 'role' table
INSERT INTO role (title, salary, department_id)
VALUES
     ('Financial Analyst', 45000, 1),
    ('Marketing Manager', 60000, 2),
    ('Sales Representative', 55000, 3),
    ('Software Engineer', 80000, 2),
    ('Accountant', 42000, 1);

-- Insert data into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 1, 1), -- John Smith is the manager of himself (manager_id = 1)
    ('Bill', 'Gates', 2, 1),  -- Bill Gates reports to John Smith (manager_id = 1)
    ('Alice', 'Johnson', 4, 1), -- Alice Johnson reports to John Smith (manager_id = 1)
    ('Bob', 'Miller', 3, 1),    -- Bob Miller reports to John Smith (manager_id = 1)
    ('Catherine', 'Lee', 2, 1), -- Catherine Lee reports to John Smith (manager_id = 1)
    ('David', 'Clark', 5, 2),   -- David Clark reports to Bill Gates (manager_id = 2)
    ('Emily', 'Wilson', 4, 2),   -- Emily Wilson reports to Bill Gates (manager_id = 2)
    ('Frank', 'Anderson', 3, 3); -- Frank Anderson reports to Alice Johnson (manager_id = 3)