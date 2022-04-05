// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
let readmeInfo = [];

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'author',
      message: "What is the author's name name? (Required)",
      validate: authorInput => {
        if (authorInput) {
          return true;
        } else {
          console.log("Please enter author's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: "Enter your project's title",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project's title");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'repo',
      message: "Enter your project's repository link",
      validate: repoInput => {
        if (repoInput) {
          return true;
        } else {
          console.log("Please enter your project's repository link");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: "Enter a brief description of your project",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please a brief description of your project");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: "Describe how to install your project",
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log("Please Describe how to install your project");
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'licensing',
      message: "What kind of license does your project need?",
      choices: ["MIT", "GNU GPLv3", "none"],
      validate: licensingInput => {
        if (licensingInput) {
          return true;
        } else {
          console.log("Please choose a license");
          return false;
        }
      }
    }
])

    .then(({ author, github, title, repo, description, install, licensing }) => {
        readmeInfo.push(author, github, title, repo, description, install, licensing);
        console.log(readmeInfo);
        createMarkdown()
      })
    
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const createMarkdown = (readmeInfoPlaceholder) => {
    const markdown = generateMarkdown(readmeInfoPlaceholder);
    fs.writeFile("./generatedREADME.md", markdown, function (err) {
      if (err) throw err;
      console.log("generatedREADME.md file generated");
    });
  };

// TODO: Create a function to initialize app
function initApp() {
    questions();
}
// Function call to initialize app
initApp();
