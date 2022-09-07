// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
    console.log(this.school);
    }

    getRole() {
        return this.role;
    }
}

const intern = new Intern();

// intern.printInfo();
intern.getSchool();
intern.getRole();

module.exports = Intern;