
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me at [GitHub](https://github.com/${answers.githubUsername}) or via email at ${answers.email}.
`;

        writeToFile("README.md", readmeContent);
        console.log("README.md generated successfully.");
    });
}
// TODO: Create a function to initialize app
init();