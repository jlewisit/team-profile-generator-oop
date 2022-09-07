const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeQuestions = require("./lib/Employee-questions");
const managerQuestions = require("./lib/Manager-questions");
const engineerQuestions = require("./lib/Engineer-questions");
const internQuestions = require("./lib/Intern-questions");

// Array of team members
var teamMemberArray = [];

// Write output HTML
const writeToFile = (htmlHolderArray) => {
  return new Promise((resolve, reject) => {
    // Make output file name === team name
    outputFileName = teamMemberArray[0];

fs.writeFile( `./dist/${outputFileName}.html`, htmlHolderArray.join( "" ), function(err) {
  // If there's an error, reject the Promise and send the error to the 
  // Promise's `.catch() ` method.
  if (err) {
        reject(err);
     // Return ouf of the function here to make sure the Promise doesn't
     // accidentally execute the resolve() function as well.
     return;
    };

  // If everything went well, resolve the Promise and send the succesful
  // data to the `.then()` method.
  resolve({
        ok: true,
        message: "All done! Your output HTML file is located in the 'dist' folder."
    });
});
});
};

////////////////////////////////

// Generate HTML
function generateHtmlFile() {
  const htmlHolderArray = htmlHolder.generateHtml(teamMemberArray);
  writeToFile(htmlHolderArray);
}

// Add the intern profile to the teamMemberArray array.
function addInternProfile() {
  inquirer.prompt(internQuestions)
  .then (function(data) {
     const internName = data.internName;
     const internId = data.internId;
     const internEmail = data.internEmail;
     const internSchool = data.internSchool;
     const teamMember = new Intern(internName, internId, internEmail, internSchool);

     teamMemberArray.push(teamMember);

     // Populate the menu choices again to see what the user wants to do next.
     addNonManagerTeamMember();
  });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Add the engineer profile to the teamMemberArray array.
function addEngineerProfile() {
  inquirer.prompt(engineerQuestions)
  .then (function(data) {
     const engineerName = data.engineerName;
     const engineerId = data.engineerId;
     const engineerEmail = data.engineerEmail;
     const engineerGithubUsername = data.engineerGithubUsername;
     const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithubUsername);
     
     teamMemberArray.push(teamMember);

     // Populate the menu choices again to see what the user wants to do next.
     addNonManagerTeamMember();
  });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Populate the menu choices again to see what the user wants to do next.
// Call the appropriate function based on the user's choice.
function addNonManagerTeamMember() {
  inquirer.prompt(employeeQuestions)
  .then(function(data) {
     switch (data.menuChoices) {
        case "Add an Engineer Profile":
           addEngineerProfile();
           break;
        case "Add an Intern Profile":
           addInternProfile();
           break;
        case "Done Generating Profiles":
           generateHtmlFile();
        break;
     };
  });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Add the engineer profile to the teamMemberArray array.
function addManagerProfile() {
  inquirer.prompt(managerQuestions)
  .then(function(data) {
     const managerName = data.managerName;
     const managerId = data.managerId;
     const managerEmail = data.managerEmail;
     const managerOfficeNum = data.managerOfficeNum;
     const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNum);
     
     teamMemberArray.push(teamMember);

     // Populate the menu choices again to see what the user wants to do next.
     addNonManagerTeamMember();
  });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Start the application by displaying a welcome message.
// Then populate prompts to get the user input for the manager profile.
function init() {
  inquirer.prompt([
     {
        message: "Welcome!  Let's get started.  Please input your team name:",
        name: "teamName",
        validate: teamNameInput => {
           if (teamNameInput && teamNameInput.trim().length > 0) {
              return true;
           }
           else {
              console.log( "Input your team name:" );
              return false;
           };
        }
     }
  ])
  .then(function(data) {
     const teamName = data.teamName;
     teamMemberArray.push(teamName);
     addManagerProfile();
  });
};

////////////////////////////////////////////
////////////////////////////////////////////

// Function call to initialize application.
init();