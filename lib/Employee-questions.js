// Populate menu choices to ask the user on what to do next.
module.exports = [
  {
     type: "list",
     name: "menuChoices",
     message: "Please choose an option below:",
     choices: ["Add an additional Manager Profile", "Add an Engineer Profile", "Add an Intern Profile", "Done generating profiles"],
     validate: menuChoicesInput => {
        if (menuChoicesInput === "Add an additional Manager Profile" || menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add an Intern Profile") {
           return true;
        }
        else if(menuChoicesInput === "Done generating profiles") {
           return true;
        }
        else {
           console.log("Please choose an option below:");
           return false;
        };
     }
  }];
// module.exports = [{
//     type: "input", 
//     name: "managerName",
//     message: "What is the manager's name?",
//     validate: (answer) => {
//       if (answer !== "") {
//         return true;
//       } 
//       else {
//         return "Please enter at least one character.";
//       }
//     }
//     },
//     {      
//     type: "input", 
//     name: "managerId",
//     message: "What is the manager ID?",
//     validate: (answer) => {
//       if (answer !== "") {
//         return true;
//       } 
//       else {
//         return "Please enter at least one character.";
//       }
//     }
//     },
//     {
//       type: "input",
//       name: "managerEmail",
//       message: "What is the manager's email?",
//       validate: (answer) => {
//         if (answer !== "") {
//           return true;
//         } 
//         else {
//           return "Please enter at least one character.";
//         }
//     }
//     },
//       {
//         type: "input",
//         name: "managerOfficeNumber",
//         message: "What is the manager's office number?",
//         validate: (answer) => {
//           if (answer !== "") {
//             return true;
//           } 
//           else {
//             return "Please enter at least one character.";
//           }
//         }
//     }];