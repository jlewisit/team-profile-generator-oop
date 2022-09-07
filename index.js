const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const Manager = require(".lib/Manager");
const Engineer = requrie(".lib/Engineer");
const Intern = require(".lib/Intern");

const employeeQuestions = require(".lib/Employee-questions");
const managerQuestions = require(".lib/Manager-questions");
const engineerQuestions = require(".lib/Engineer-questions");
const internQuestions = require(".lib/Intern-questions");

function appMenu() {
  function createManager() {
    console.log("Who is the manager?");
    inquirer.prompt([
      {
      type: "input", 
      name: "managerName",
      message: "What is the manager's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        } 
        else {
          return "Please enter at least one character.";
        }
      },
      {      
      type: "input", 
      name: "managerId",
      message: "What is the manager ID?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        } 
        else {
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          } 
          else {
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            } 
            else {
              return "Please enter at least one character.";
            }
          },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
        );

      }
  }
}



// Function call to start application
appMenu();
