const mysql = require("mysql2");
const connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;