module.exports = [{
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
        }
    }];