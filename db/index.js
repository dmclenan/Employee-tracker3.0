const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
findAllEmployees() {
    return this.connection.promise().query(
        'SELECT * FROM employees'
    );
}
findAllDepartments() {
    return this.connection.promise().query(
        'SELECT department.id, department.name FROM department;'
    );
}

findAllRoles() {
    return this.connection.promise().query(
        'SELECT role.id, role.name FROM role;'
    );
}
// create a new employee 



}

module.exports = new DB(connection);