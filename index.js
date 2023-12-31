const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'Add MySQL username',
      // Add MySQL password here
      password: 'Add MySQL password here',
      database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
  );

  const startProgramm = async () => { 
    try {
      const selection = await inquirer.prompt([{
        name: "selections",
        type: "list",
        message: "What would you like to do? ",    
        choices: [
                  "View All Employees", //done
                  "Add Employees",      //done
                  "Update Employee Role", //done
                  "View All Roles",     //done
                  "Add Role",           //done
                  "View All Departments", //done
                  "Add Department",     //done
                  "Delete Department",  //done
                  "Delete Role",        //done
                  "Delete Employee",    //done
                  "Quit"                //done
                ],
    }])
    const selected = selection.selections;

    switch (selected) {
      case "View All Employees": 

      db.promise().query("SELECT * FROM employee")
      .then(function([response]) {
        console.log('\n');
        console.table(response);
        console.log('\n'+ "Move up and down to reveal more choices");
        startProgramm();
      });

      break;

      case "View All Roles": 
      db.promise().query("SELECT * FROM role")
      .then(function([response]) {
        console.log('\n');
        console.table(response);
        console.log('\n'+ "Move up and down to reveal more choices");
        startProgramm();
      });
      break;

      case "View All Departments": 
      db.promise().query("SELECT * FROM department")
      .then(function([response]) {
        console.log('\n');
        console.table(response);
        console.log('\n'+ "Move up and down to reveal more choices");
        startProgramm();
      });
      break;

      case "Add Employees": 
      console.log("Add Employees selected");
      const addEmployeeInfo = await inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter employee's first name: "
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter employee's last name: "
        },
        {
          name: "roleID",
          type: "input",
          message: "Enter employee's role ID "
        },
        {
          name: "managerID",
          type: "input",
          message: "Enter employee's manager ID"
        }
      ]);
      db.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",[
        addEmployeeInfo.firstName,
        addEmployeeInfo.lastName,
        addEmployeeInfo.roleID,
        addEmployeeInfo.managerID
      ])
      .then(function([response]) {
        console.log('\n Employee added');
        return db.promise().query("SELECT * FROM employee");
      })
      .then(function([response]) {
        console.log('\n');
        console.table(response);
        console.log('\n'+ "Move up and down to reveal more choices");
        startProgramm();
      })
      .catch(function(err) {
        console.error("Error: " + err.message);
        startProgramm();
      });
      break;

      case "Add Role":
        console.log("Add Role selected");
        const addRoleInfo = await inquirer.prompt([
          {
            name: "title",
            type: "input",
            message: "Enter role title: "
          },
          {
            name: "salary",
            type: "input",
            message: "Enter role salary: "
          },
          {
            name: "departmentID",
            type: "input",
            message: "Enter role department ID "
          }
        ]);
        db.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",[
          addRoleInfo.title,
          addRoleInfo.salary,
          addRoleInfo.departmentID
        ])
        .then(function([response]) {
          console.log('\n Role added');
          return db.promise().query("SELECT * FROM role");
        })
        .then(function([response]) {  
          console.log('\n');
          console.table(response);
          console.log('\n'+ "Move up and down to reveal more choices");
          startProgramm();
        })
        .catch(function(err) {
          console.error("Error: " + err.message);
          startProgramm();
        });
        break;

        case "Add Department":
          console.log("Add Department selected");
          const addDepartmentInfo = await inquirer.prompt([
            {
              name: "name",
              type: "input",
              message: "Enter department name: "
            }
          ]);
        
          // Check if the department already exists
          db.promise()
            .query("SELECT id FROM department WHERE name = ?", [addDepartmentInfo.name])
            .then(function ([results]) {
              if (results.length > 0) {
                console.log(`Department '${addDepartmentInfo.name}' already exists.`);
              } else {
                // Insert the new department into the database
                return db.promise().query("INSERT INTO department (name) VALUES (?)", [addDepartmentInfo.name]);
              }
            })
            .then(function () {
              console.log('\nDepartment added');
              return db.promise().query("SELECT * FROM department");
            })
            .then(function ([response]) {
              console.log('\n');
              console.table(response);
              console.log('\n' + 'Move up and down to reveal more choices');
              startProgramm();
            })
            .catch(function (err) {
              console.error("Error: " + err.message);
              startProgramm();
            });
          break;
        

      case "Delete Department":
        console.log("Delete Department selected");
        const deleteDepartmentInfo = await inquirer.prompt([
          {
            name: "departmentID",
            type: "input",
            message: "Enter department ID: "
          }
        ]);
        db.promise().query("DELETE FROM department WHERE id = ?",[
          deleteDepartmentInfo.departmentID
        ])
        .then(function([response]) {
          console.log('\n Department deleted');
          return db.promise().query("SELECT * FROM department");
        })
        .then(function([response]) {  
          console.log('\n');
          console.table(response);
          console.log('\n'+ "Move up and down to reveal more choices");
          startProgramm();
        })
        .catch(function(err) {
          console.error("Error: " + err.message);
          startProgramm();
        });
        break;

      case "Delete Role": 
        console.log("Delete Role selected");
        const deleteRoleInfo = await inquirer.prompt([
          {
            name: "roleID",
            type: "input",
            message: "Enter role ID: "
          }
        ]);
        db.promise().query("DELETE FROM role WHERE id = ?",[
          deleteRoleInfo.roleID
        ])
        .then(function([response]) {
          console.log('\n Role deleted');
          return db.promise().query("SELECT * FROM role");
        })
        .then(function([response]) {  
          console.log('\n');
          console.table(response);
          console.log('\n'+ "Move up and down to reveal more choices");
          startProgramm();
        })
        .catch(function(err) {
          console.error("Error: " + err.message);
          startProgramm();
        });
        break;

      case "Quit": 
        console.log('Exiting the program. Thank you!');
        db.end();
      break;


      case "Delete Employee":
        console.log("Delete Employee selected");
        const deleteEmployeeInfo = await inquirer.prompt([
          {
            name: "employeeID",
            type: "input",
            message: "Enter employee ID: "
          }
        ]);
        db.promise().query("DELETE FROM employee WHERE id = ?",[
          deleteEmployeeInfo.employeeID
        ])
        .then(function([response]) {
          console.log('\n Employee deleted');
          return db.promise().query("SELECT * FROM employee");
        })
        .then(function([response]) {  
          console.log('\n');
          console.table(response);
          console.log('\n'+ "Move up and down to reveal more choices");
          startProgramm();
        })
        .catch(function(err) {
          console.error("Error: " + err.message);
          startProgramm();
        });
        break;
      
      default : 
        console.log("Exiting");
        db.end();
      return;
    }
    } catch (err) {
      console.log(err);
    }
  }

  startProgramm();

