# Employee Management System

## Description

This command-line application is an Employee Management System that allows users to manage departments, roles, and employees in a company. The application provides various options, including viewing departments, roles, and employees, adding departments, roles, and employees, and updating an employee's role.

## User Story

As a user, I want to be able to perform the following actions with the application:

1. **View All Departments**
   - When selected, the application displays a formatted table showing department names and their corresponding department IDs.

2. **View All Roles**
   - When selected, the application displays a table showing job titles, role IDs, the department to which the role belongs, and the salary for each role.

3. **View All Employees**
   - When selected, the application displays a formatted table showing employee data, including employee IDs, first names, last names, job titles, department names, salaries, and the names of the managers to whom the employees report.

4. **Add a Department**
   - When selected, the application prompts the user to enter the name of the department, and the entered department is added to the database.

5. **Add a Role**
   - When selected, the application prompts the user to enter the title, salary, and department for the role, and the role is added to the database.

6. **Add an Employee**
   - When selected, the application prompts the user to enter the employee's first name, last name, role, and manager. The entered employee information is added to the database.

7. **Update an Employee Role**
   - When selected, the application prompts the user to select an employee to update and specify their new role. The employee's role is updated in the database.

## Installation

To use this Employee Management System, you need to have [Node.js](https://nodejs.org/) and [MySQL](https://www.mysql.com/) installed on your machine.

1. Clone the repository to your local machine.

2. Navigate to the project directory and run the following command to install the required dependencies:

   ```shell
   npm install
    ```

## Database Setup

1. Create a MySQL database and schema using the provided SQL files in the `db` folder. You can do this by running the SQL scripts in your preferred MySQL client or by using a tool like phpMyAdmin.

2. Update the MySQL connection configuration in the `server.js` file with your MySQL username, password, and database information:

   ```javascript
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'your_username',
     password: 'your_password',
     database: 'your_database_name',
   });
    ```

## Usage Instructions

Follow these steps in the video to use the Employee Management System:

https://watch.screencastify.com/v/RIM2AXbeyDDVdLgqpI81 

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Resources and Technologies Used 

- [Node.js](https://nodejs.org/en/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)

