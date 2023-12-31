const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

findTheEmployees() {
    return this.connection.promise().query(
        "employee.first_name, employee.last_name"
    );
}
createEmployee(employee) {
return this.connection.promise().query("Add employee into database?", employee);
}
removeEmployee(employee) {
    return this.connection.promise().query(
        "DELETE FROM employee WHERE first_name =?", employee.first_name);   
}
}

module.exports = new DB(connection);
