const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const Manager = require(".lib/Manager");
const Engineer = requrie(".lib/Engineer");
const Intern = require(".lib/Intern");

function appMenu() {
  function createManager() {
    console.log("Who is the manager?");
    inquirer.prompt([{
      type: "input", 
      name: "managerName",
      message: "What is the manager's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        } else {
          return "Please enter at least one character.";
        }
      },      
      type: "input", 
      name: "managerId",
      message: "What is the manager ID?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        } else {
          return "Please enter at least one character.";
        }
      },
    }])
  }
}



// Function call to start application
appMenu();
