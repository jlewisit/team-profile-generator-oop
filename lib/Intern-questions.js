module.exports = [{
    type: "input", 
    name: "internName",
    message: "What is the intern's name?",
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
    name: "internId",
    message: "What is the intern ID?",
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
      name: "internEmail",
      message: "What is the intern's email?",
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
        name: "internSchool",
        message: "What is the intern's school?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          } 
          else {
            return "Please enter at least one character.";
          }
        }
    }];