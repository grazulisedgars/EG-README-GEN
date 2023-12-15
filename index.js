const fs = require("fs");
// const path = require('path');
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
        type: "list",
        name: "licence",
        message: "Choose a licence for your project",
        choices: ["MIT", "GNU GPL v3", "Apache 2.0", "ISC", "None"]
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
        answers.badge = generateBadge(answers.licence);
    
        console.log(answers);
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md", readmeContent);
        
    });

}

// function to generate badge based on selected licence

function generateBadge(licence) {
    if (licence === "None") {
        return " ";
    } else if (licence === "MIT") {
        return"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (licence === "GNU GPL v3") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (licence === "Apache 2.0") {
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    } else {
        return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    }
};

// function call to initialize program
init();
