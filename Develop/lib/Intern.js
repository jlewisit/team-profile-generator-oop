// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require('./Employee.test');

class Intern extends Employee {
    constructor(school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
    console.log(this.school);
    }

    getRole() {
        console.log('Intern');
    }
}

const intern = new Intern();

console.log('')
intern.printInfo();
intern.getSchool();
intern.getRole();