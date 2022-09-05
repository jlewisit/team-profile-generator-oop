// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./Employee.test.js');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log(`'Engineer'`);
    }
}

const engineer = new Engineer(github);
console.log(`'Engineer'`);
engineer.printInfo();
engineer.getGithub();
engineer.getRole();