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
        name: "test",
        message: "Test Instructions",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
