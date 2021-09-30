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
        // Takes user text input
        type: "input",
        name: "email",
        message: "Enter Your Email Address"
      },
