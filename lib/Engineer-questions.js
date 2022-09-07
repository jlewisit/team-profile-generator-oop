module.exports = [{
    type: "input", 
    name: "engineerName",
    message: "What is the engineer's name?",
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
    name: "engineerId",
    message: "What is the engineer ID?",
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
      message: "What is the engineer's email?",
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
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          } 
          else {
            return "Please enter at least one character.";
          }
        }
    }];