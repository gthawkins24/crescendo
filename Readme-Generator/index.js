// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
//const utils = require("utils")

const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
            {
                type: "input",
                message: "What is the name of your project?",
                name: "projectTitle",  
            },
            {
                type: "input",
                message: "Write a brief description of the project?",
                name: "projectDescription",
            },
            {
                type: "input",
                message: "What does the user need to know about using the repository?",
                name: "contribution",
            },
            {
                type: "input",
                message: "What are the steps required to install your project?",
                name: "Installation",
            },
            {
                type: "input",
                message: "Please provide examples of how your project could be used. Give instructions.",
                name: "Usage",
            },
            {
                type: "input",
                message: "What kind of command do you run for testing this project?",
                name: "test",
                default: "npm test",
            },
            {
                type: "list",
                message: "What licenses does the project have. Choose from the license?",
                name: "license",
                choices: ["MIT", "Apache 2.0", "GNU 3.0", "BSD 3", "CDDL 1.0","None"],
            },
            {
                type: "input",
                name: "GitHubUsername",
                message: "What is your GitHub Username?"
             },
             {
                type: "input",
                message: "What is your email address?",
                name: "emailAddress",
             }
];

// TODO: Create a function to write README file
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Md file has been created");
                }
              });  
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
