
function findAllEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => userPrompts());
}

module.export = findAllEmployees;