const fs = require("fs");
const index = require("../index");
const Manager = require("./Manager");

// Generate team HTML
const generate = (teamArray) => {
// Creating cards for each employee by role
// Manager card
console.log("Here on html-template");
// Arrays to hold employee cards
let managerCardHTML = [];
let internCardHTML = [];
let engineerCardHTML = [];

function generateManager(employee) {
    for (i = 0; i < employee.length; i++) {
        if ([i] instanceof Manager) {
            managerCardHTML.push(employee[i].managerCard);
            console.log("We're at Manager card HTML");
        }
    }
}
// Engineer card
function generateEngineer(employee) {
    for (i = 0; i < employee.length; i++) {
        if (employee[i].role === "Engineer") {
            engineerCardHTML.push(employee[i].engineerCard);
            console.log("We're at Engineer card HTML");
        }
    }
}
// Intern card
function generateIntern(employee) {
    for (i = 0; i < employee.length; i++) {
        if (employee[i].role === "Intern") {
            internCardHTML.push(employee[i].internCard);
            console.log("We're at Intern card HTML");
        }
    }
}


// Generate employee card arrays
generateManager(teamArray);
generateIntern(teamArray);
generateEngineer(teamArray);

// HTML page
const generateTeamPage = function (employeeCards) {
    return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/style.css" />
  </head>
  <body>
    <div class="wrapper">
        <header>
          <h1>My Team</h1>
        </header>

        <section class="card">
          <div class="container">
            ${managerCardHTML.join("")}
          </div>

            <div id="team-cards">
            <!--Team Cards-->
            ${employeeCards}
            </div>
          </div>
        </div>
    </div>
    <script src="../index.js"></script>
  </body>
</html>
`;
}
let data = generateTeamPage();
return data;
}



// Export to index
module.exports = generate;