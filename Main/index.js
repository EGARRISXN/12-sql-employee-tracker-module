const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// Display logo text, load main prompts
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEES"
                },
                {
                    name: "Remove Employees",
                    value: "REMOVE_EMPLOYEES"
                },
                {
                    name: "Update Employees Role",
                    value: "UPDATE_EMPLOYEES_ROLE"
                }
            ]
        }

    ])
    .then(function ({ choice }) {
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewAllEmployees();
                break;

            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewAllEmployeesByDepartment();
                break;

            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewAllEmployeesByManager();
                break;

            case "ADD_EMPLOYEES":
                addEmployees();
                break;

            case "REMOVE_EMPLOYEES":
                removeEmployees();
                break;

            case "UPDATE_EMPLOYEES_ROLE":
                updateEmployeesRole();
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
      loadMainPrompts();
    });
  }