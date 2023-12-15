const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Description",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Information",
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution Guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "Test Instructions",
    },
    {
        type: "input",
        name: "username",
        message: "Github username",
    },
    {
        type: "input",
        name: "email",
        message: "Email address",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("README.md has been updated successfully!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md", readmeContent);
    });

}

// function call to initialize program
init();
