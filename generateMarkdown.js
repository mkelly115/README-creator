function generateMarkdown(answers) {
    return `
# ${answers.projectTitle}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution Guidelines
${answers.contribution}

## Test Instructions
${answers.test}

## Github 
${answers.username}

## Contact Us
You can reach out with any questions or concerns at ${email}
`;
}

module.exports = generateMarkdown;