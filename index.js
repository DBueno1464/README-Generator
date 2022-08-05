import inquirer from 'inquirer';
import fs from 'fs';
import util from 'util';
import generateMarkdown from './utils/generateMarkdown.js';
// After giving the package.json the type property of 'module' we CANNOT use require anymore on ANY package so we have to update our index.js to import all our packages. In addition, the generateMarkdown function being imported here HAS to be exported in './utils/generateMarkdown.js' by using `export default...` NOT using module.exports.
//
// const fs = require('fs');
// const util = require('util');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Any installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage information?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests instructions?',
      },
      {
        type: 'list',
        name: 'license',
        choices: [ 'Tests instructions?', ]      
      },
      {
        type: 'input',
        name: 'user',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Any instructions on how to reach you?',
      },
    ]);
  };
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => { 
    promptUser()
    .then((answers) => writeFileAsync('testREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app

init();


