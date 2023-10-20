const mysql = require('mysql2');
// const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
  
  db.promise().query("SELECT * FROM department")
  .then(function([response]) {
    console.table(response);
  } ).catch(function(err){
    console.log(err);
  })

const selection {
    
}
