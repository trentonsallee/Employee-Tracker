const db = require("./db");
require("console.table");
const databaseEdits = require(`./databaseEdits`);

Init();

function Init() {
    console.log()
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
            {
                name: "",
                value: ""
            },
            {
                name: "",
                value: ""
            },
            {
                name: "",
                value: ""
            },
            {
                name: "",
                value: ""
            },
            ]
        }
    ])
    .then(res => {
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
