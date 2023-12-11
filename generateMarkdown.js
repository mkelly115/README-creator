function selectBadge(license) {
    let badge = " "

    if (license === "MIT") {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }

    if (license === "MPL") {
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    if (license === "IBM") {
        badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    if (license === "None") {
        badge = ` `
    }

    return badge
};

function generateMarkdown(answers) {
    return `
# ${answers.projectTitle} ${selectBadge(answers.license)}

## Table of Contents:
1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [Contributing](#contributing)
5. [Test Instructions](#test)
6. [License](#license)
7. [Contact](#contact)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Test Instructions
${answers.test}

## License
${answers.license}

## Contact
You can reach out with any questions or concerns at ${answers.email},
or to [${answers.github}](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;