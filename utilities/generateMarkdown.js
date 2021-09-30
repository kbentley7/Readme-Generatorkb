const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
var generateMarkdown = require('./utilities/generateMarkdown.js');

function writeToFile(filename, data) {
    fs.writerFileSync(path.join(process.cwd(),fileName), data);
}

inquirer.prompt([
    {
        // User's text input taken here
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },

    {
        // User's text input taken here
        type: "input",
        name: "email",
        message: "Enter Your Email Address"
      },
      {
         // User's text input taken here
        type: "input",
        name: "title",
        message: "What's Your Projects Name?"
        },
        {
            // User's text input taken here
            type: "input",
            name: "description",
            message: "Enter A Descrition For Your Project"
          },
          {
            // User's text input taken here
            type: "input",
            name: "installation",
            message: "Enter Your Projects Installation Instructions"
          },
        
          {
            // User's text input taken here
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
       
      {
        // User's text input taken here
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      },
      {
        // User's text input taken here
        type: "input",
        name: "tests",
        message: "Enter Test Instructions"
    },
    { 
        // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "None",
              "Apache2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "GNU Lesser General Public v2.1",
              "Mozilla Public 2.0",
              "the Unilicense"
            ]
        }
        // Where the user input is stored (data)
    ]).then(function(data) {
        // message for the user
        console.log("Generating Markdown...");
        // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
        writeToFile("README.md", generateMarkdown({...data}));  
  });
// function call to initialize program
init()
  