// Your dependency
const { createConnection } = require("mysql2");

// Your connection
const connection = mysql.createConnection({
    // Your host
    host: "localhost",
    // Your port
    port: "3001",
    // Your username
    user: "root",
    // Your password
    password: "rootroot",
    // Your database
    database: "employee"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;   