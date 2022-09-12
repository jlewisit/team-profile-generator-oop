const index = require("../index.js");
const fs = require("fs");

// Manager card
function generateManager(employee) {
    for (i = 0; i < employee.length; i++) {
        if (employee[i].role === "Manager") {
            managerCardsHTML.push(employee[i].managerCard);
        }
    }
}

// Engineer card
function generateEngineer(employee) {
    for (i = 0; i < employee.length; i++) {
        if (employee[i].role === "Engineer") {
            engineerCardsHTML.push(employee[i].engineerCard);
        }
    }
}

// Intern card
function generateIntern(employee) {
    for (i = 0; i < employee.length; i++) {
        if (employee[i].role === "Intern") {
            internCardsHTML.push(employee[i].internCard);
        }
    }
}

// Arrays to hold employee cards
let managerCardsHTML = [];
let internCardsHTML = [];
let engineerCardsHTML = [];

// Generate employee card arrays
generateManager(htmlHolderArray);
generateIntern(htmlHolderArray);
generateEngineer(htmlHolderArray);

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

        <div class="card">
        //   <div class="card-header">
        //     <h2></h2>
        //   </div>
          <div class="container">
            <div id="team-cards">
            <!--Team Cards-->
            ${employeeCards}
            </div>
          </div>
        //   <div id="questions">
        //     <h2>
        //       <div id="questionText"></div>
        //     </h2>
        //     <h3>
        //       <div id="answerText"></div>
        //     </h3>
        //   </div>
        //   <div id="next"></div>
        //   <div class="card-footer"></div>
        // </div> -->

        // <div class="display-container">
        //     <div class="display-box1">
        //       <h2 id="countdown">box 1</h2>
        //       <p id="main"></p>
        //     </div>

        //     <div class="display-box2">
        //         <h2>box 2</h2>
        //         <!-- <button id="begin" class="btn">Begin Quiz</button> -->
        //     </div>

        //     <div class="display-box3">
        //         <h2>box 3</h2>
        //     </div>
        //     <div class="display-box4">
        //         <h2>box 4</h2>
        //     </div>
        </div>
    </div>
    <script src="../index.js"></script>
  </body>
</html>
`;
}

// Export to index
module.exports = html-template;