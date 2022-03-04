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
            'SELECT role.id, role.title FROM role'
        );
    }
    // create a new employee 
    addDepartment(name) {
        return this.connection.promise().query( 
            'INSERT INTO department (name) VALUES (?)',[name]
        )
    }
    addRole(title) {
        return this.connection.promise().query( 
            'INSERT INTO role (title) VALUES (?)',employee
        )
    }
    addEmployee(title) {
        return this.connection.promise().query( 
            'INSERT INTO employees SET ?',[title]
        )
    }
}

module.exports = new DB(connection);