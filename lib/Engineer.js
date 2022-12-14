// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        return this.role;
    }
}

const engineer = new Engineer();

// engineer.printInfo();
engineer.getGithub();
engineer.getRole();

module.exports = Engineer;