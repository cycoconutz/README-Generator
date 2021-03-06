// TODO: Include packages needed for this application
const generator = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Enter a description of the project',
    name: 'description',
},
{
    type: 'input',
    message: 'What (if any) is the command to run the project?',
    name: 'startcmd',
},
{
    type: 'input',
    message: 'Are there any installation dependencies?',
    name: 'dependencies',
},
{
    type: 'input',
    message: 'Write a brief description of what this project is used for?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Enter the names of everyone who worked on this project.',
    name: 'credit',
},
{
    type: 'list',
    message: 'Choose a license for this project',
    choices: ["Apache License 2.0", "MIT License", "GNU General Public License v2.0"],
    name: 'license',
},
{
    type: 'input',
    message: 'Enter you Github Username',
    name: 'github',
},
{
    type: 'input',
    message: 'Enter you email address',
    name: 'email',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let parsedData = `${(generator.generateMarkdown(data))}`
    fs.writeFile(fileName, parsedData, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        });
}

// Function call to initialize app
init();
