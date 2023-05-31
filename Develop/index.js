// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fileSystem = require("fs");
const utilities = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
        default: "Franko88Bit",
        validate: function (answer) {
            if (answer.length < 1 ) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }

    },
    {
        type: "input",
        message: "What is the name of your GitHub repo?",
        name: "repo",
        default: "readme-generator",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub username is required for a badge.');
            }
            return true;
        }

    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Project Title",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Write a description of your project?",
        name: "Description",
        default: "Project Description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");

            }
            return true;
        }
    },
    {
        type: "input",
        message: "If applicable, describe the steps required to install your project for the installation section.",
        name: "installation"
    },
    {
        type: "input",
        message: "provide instructions and examples of your project in use for the usage section.",
        name:"usage"
    },
    {
        type: "input",
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: "tests"
    },
    {
        type: "list",
        message: "if applicable, provide any tests written for your application and provide examples on how to run them.",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        choices: "GNU AGPAGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']",
        name: "license"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fileSystem.writeFile(fileName, data, err => { 
    if (err) {
        return console.log(err);
    }
    else {
      console.log("Success!!!! Your README.md file has been generated");
    };
     
   });
}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        const userResponses = await inquirer.createPromptModule(questions);
        console.log("your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");

        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        await writeFileAsync("ExampleREADME.md" , markdown);
    } catch (error)  {
        console.log(error);
    }
};

init();

// Function call to initialize app
 
