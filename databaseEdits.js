
function findAllEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => userPrompts());
}

function removeEmployee() {
    db.findAllEmployees()
      .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
          name: `${first_name} ${last_name}`,
          value: id
        }));
      })}

 function createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    function addEmployee() {
        prompt([
          {
            name: "first_name",
            message: "What is the employee's first name?"
          },
          {
            name: "last_name",
            message: "What is the employee's last name?"
          }
        ])
          .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;
          })
        }

module.export = findAllEmployees;