// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// Method which prints employee name
    getName() {
        console.log(`Name: ${this.area}`);
    }
// Method which prints employee id
    getId() {
        console.log(`Id: ${this.id}`);
    }
// Method which prints employee email
    getEmail() {
        console.log(`Email: ${email}`);
    }
}
module.exports = Employee;