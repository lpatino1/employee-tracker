//npm packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// //importing JS files for modularization
const { isModuleNamespaceObject } = require('util/types');
//view options
const department = require('./lib/departments');
const employees = require('./lib/employees');
const roles = require('./lib/roles');
const { listenerCount } = require('process');

// //add options
const addDepartment = require('./lib/addDepartment');
const addEmployee = require('./lib/addEmployee');
const addRole = require('./lib/addRole');
const updateEmployee = require('./lib/updateEmployee');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );


//function to start the program
function start(){
    inquirer.prompt([
        {
            name: 'home',
            type: 'list',
            message:'Choose one:',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"],
        },
    ])
    .then(ans=>{
        JSON.stringify(ans);
        switch (ans.home){
            case"View all departments":              
               department(db);
               start();
                break;
            case "View all roles":
                roles(db);
                start();
                break;
            case "View all employees":
                employees(db);
                start();
                break;
            case "Add a department":
                addDepartment(db);
                start();
                break;
            case "Add a role":
                 addRole(db);
                 start();
                 break;
            case "Add an employee":
                addEmployee(db);
                start();
                break;
            case "Update an employee role":
              updateEmployee(db);
              start();
              break;
            case "Quit":
              console.log("Goodbye");
              break;
        }
    })
}



start();



module.exports = db;
