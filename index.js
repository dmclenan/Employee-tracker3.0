const { prompt } = require("inquirer");
const db = require("./db");


function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: [
                {
                    name: "view All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Quit",
                    value: "Quit"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choice;
        console.log(res)
        switch (choices) {
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'ADD_DEPARTMENT':
                addDept();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'UPDATE_EMPLOYEE_ROLE':
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    })
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("/n");
            console.table(employees)
        })
        .then(() => mainMenu());
}

function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("/n");
            console.table(roles)
        })
        .then(() => mainMenu());
}

function viewDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("/n");
            console.table(departments)
        })
        .then(() => mainMenu());
}

function addEmployee() {
    prompt([
            {
                type: "input",
                message: "Enter the employee's first name",
                name: "firstName"
            },
            {
                type: "input",
                message: "Enter the employee's last name",
                name: "lastName"
            },
            {
                type: "input",
                message: "Enter the employee's role ID",
                name: "addEmployRole"
            },
            {
                type: "input",
                message: "Enter the employee's manager ID",
                name: "addEmployMan"
            }
        ])
}
function addDept() {
    prompt({
            type: "input",
            message: "Enter the name of the new department",
            name: "newDept"
        })
}
function addRole() {
    prompt([
            {
                type: "input",
                message: "Enter the employee's title",
                name: "roleTitle"
            },
            {
                type: "input",
                message: "Enter the employee's salary",
                name: "roleSalary"
            },
            {
                type: "input",
                message: "Enter the employee's department ID",
                name: "roleDept"
            }
        ])
}
function updateEmployeeRole() {
    prompt([
            {
                type: "input",
                message: "Enter the employee's ID you want to be updated",
                name: "updateEmploy"
            },
            {
                type: "input",
                message: "Enter the new role ID for that employee",
                name: "newRole"
            }
        ])

}
function quit() {
    console.log("goodbye!");
    process.exit();
};


mainMenu();