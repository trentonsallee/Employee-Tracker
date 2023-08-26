const db = require("./db/connection");
require("console.table");
const databaseEdits = require(`./databaseEdits`);
const { prompt } = require("inquirer");


Init();

function Init() {
    console.log("Welcome")
    userPrompts();
}

function userPrompts () {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
            {
                name: "Find all employees",
                value: "FIND_ALL_EMPLOYEES"
            },
            {
                name: "Create an employee",
                value: "CREATE_EMPLOYEE"
            }, 
            {
                name: "Remove an employee",
                value: "REMOVE_EMPLOYEE"
            },
            ]
        }
    ]) .then(res => {
        let choice = res.choice;
        switch (choice) {
            case "FIND_ALL_EMPLOYEES":
              findAllEmployees();
              break;
            
            case "CREATE_EMPLOYEE":
                createEmployee();
                break;
            
            case "REMOVE_EMPLOYEE": 
                removeEmployee();
                break;
        }  
    })
}


function findAllEmployees() {
    db.findTheEmployees()
      .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
      })
      .then(() => userPrompts());
  }