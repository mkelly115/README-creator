const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); 

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'What is the description of your README?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is required for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: "input",
        message: "Enter Github username",
        name: "github"
    },
    {
        type:"input",
        message: "Enter your email adress",
        name: "email"
    },
    {
        type:"list",
        message: "Select a License",
        choices: ["MIT","IBM","MPL","None"],
        name: "license"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("README successfully created!")
    );
}

// function generateMarkdown(answers) {
//     return `
// # ${answers.projectTitle}

// ## Description
// ${answers.description}

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}

// ## Contribution Guidelines
// ${answers.contribution}

// ## Test Instructions
// ${answers.test}
// `;
// }

function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers); //Un-Comment when generator (markdown) is created
        writeToFile("README.md", markdown); 

    });
}


init();