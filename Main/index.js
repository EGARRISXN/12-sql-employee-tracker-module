// Your dependencies
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const logo = require("asciiart-logo");
require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Your connection
const db = mysql.createConnection(
    {
        // Your host
        host: "localhost",
        // Username
        user: "root",
        // Password
        password: "rootroot",
        // Database
        database: "employee_tracker_db",
    }
);

// Start the server and listen for incoming requests
app.listen(PORT, () => {

    console.log(`
    ██████████                        ████                                     
    ░░███░░░░░█                       ░░███                                     
     ░███  █ ░ █████████████  ████████ ░███   ██████  █████ ████ ██████  ██████ 
     ░██████  ░░███░░███░░███░░███░░███░███  ███░░███░░███ ░███ ███░░██████░░███
     ░███░░█   ░███ ░███ ░███ ░███ ░███░███ ░███ ░███ ░███ ░███░███████░███████ 
     ░███ ░   █░███ ░███ ░███ ░███ ░███░███ ░███ ░███ ░███ ░███░███░░░ ░███░░░  
     ███████████████░███ █████░███████ █████░░██████  ░░███████░░██████░░██████ 
    ░░░░░░░░░░░░░░░ ░░░ ░░░░░ ░███░░░ ░░░░░  ░░░░░░    ░░░░░███ ░░░░░░  ░░░░░░  
                              ░███                     ███ ░███                 
     ██████   ██████          █████                   ░░██████                  
    ░░██████ ██████          ░░░░░                     ░░░░░░                   
     ░███░█████░███   ██████  ████████    ██████    ███████  ██████  ████████   
     ░███░░███ ░███  ░░░░░███░░███░░███  ░░░░░███  ███░░███ ███░░███░░███░░███  
     ░███ ░░░  ░███   ███████ ░███ ░███   ███████ ░███ ░███░███████  ░███ ░░░   
     ░███      ░███  ███░░███ ░███ ░███  ███░░███ ░███ ░███░███░░░   ░███       
     █████     █████░░████████████ █████░░████████░░███████░░██████  █████      
    ░░░░░     ░░░░░  ░░░░░░░░░░░░ ░░░░░  ░░░░░░░░  ░░░░░███ ░░░░░░  ░░░░░       
                                                   ███ ░███                     
                                                  ░░██████                      
                                                   ░░░░░░                       
    `);

// Runs the application
MainPrompt();

});

function MainPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_ALL_EMPLOYEES"
                },
                {
                    name: "View Employees By Departments",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENTS"
                },
                {
                    name: "View Employees By Managers",
                    value: "VIEW_EMPLOYEES_BY_MANAGERS"
                },
                {
                    name: "Add Employees",
                    value: "ADD_EMPLOYEES"
                },
                {
                    name: "Remove Employees",
                    value: "REMOVE_EMPLOYEES"
                },
                {
                    name: "Update Employees Roles",
                    value: "UPDATE_EMPLOYEES_ROLES"
                },
                {
                    name: "Update Employees Departments",
                    value: "UPDATE_EMPLOYEES_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ALL_ROLES"
                },
                {
                    name: "Add Roles",
                    value: "ADD_ROLES"
                },
                {
                    name: "Remove Roles",
                    value: "REMOVE_ROLES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_ALL_DEPARTMENTS"
                },
                {
                    name: "Add Departments",
                    value: "ADD_DEPARTMENTS"
                },
                {
                    name: "Remove Departments",
                    value: "REMOVE_DEPARTMENTS"
                },
            ]
        }

    ])
    .then(function ({ choices }) {
        switch (choices) {
            case "VIEW_ALL_EMPLOYEES":
                viewAllEmployees();
                break;

            case "VIEW_EMPLOYEES_BY_DEPARTMENTS":
                viewEmployeesByDepartments();
                break;

            case "VIEW_EMPLOYEES_BY_MANAGERS":
                viewEmployeesByManagers();
                break;

            case "ADD_EMPLOYEES":
                addEmployees();
                break;

            case "REMOVE_EMPLOYEES":
                removeEmployees();
                break;

            case "UPDATE_EMPLOYEES_ROLES":
                updateEmployeesRoles();
                break;

            case "UPDATE_EMPLOYEES_DEPARTMENTS":
                updateEmployeesDepartments();
                break;

            case "VIEW_ALL_ROLES":
                viewAllRoles();
                break;

            case "ADD_ROLES":
                addRoles();
                break;

            case "REMOVE_ROLES":
                removeRoles();
                break;

            case "VIEW_ALL_DEPARTMENTS":
                viewAllRoles();
                break;

            case "ADD_DEPARTMENTS":
                addDepartments();
                break;

            case "REMOVE_DEPARTMENTS":
                removeDepartments();
                break;
        }
    });
}

function viewAllEmployees() {
    // Query the database for all employees
    connection.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        // Display the results in a table
        console.table(results);
        // Return to the main prompts
         MainPrompt();
    });
}