// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require('./Employee.test');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log('Manager');
    }
}

const intern = new Intern();

console.log('')
intern.printInfo();
intern.getRole();