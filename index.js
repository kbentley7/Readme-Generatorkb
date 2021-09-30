const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
var generateMarkdown = require("./utils/generateMarkdown");

function writeToFile(filename, data) {
    fs.writerFileSync(path.join(process.cwd(),fileName), data);
}

inquirer.prompt([
    {

      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },

    {
        // user's text input
        type: "input",
        name: "email",
        message: "Enter Your Email Address"
      },
      {
        // user's text input
        type: "input",
        name: "title",
        message: "What's Your Projects Name?"
        },
        {
            // User's text input
            type: "input",
            name: "description",
            message: "Enter A Descrition For Your Project"
          },
           // Takes user text input
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      },
      {
        // Takes user text input
          type: "input",
          name: "contribution",
          message: "Enter Your Project Contribution Guidelines"
      },
         // Takes user text input
         type: "input",
         name: "usage",
         message: "Enter Usage Info"
       },