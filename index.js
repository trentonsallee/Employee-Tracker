const db = require("./db");
require("console.table");

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
                name: "View all employees",
                value: ""
            },
            {
                name: "Add employee",
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
}
