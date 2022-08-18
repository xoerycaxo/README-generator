// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //file system
const generateMarkdown = require('./generateMarkdown')
console.log("Hello! Welcome to my README Generator!")
console.log("Answer the following questions to generate a high quality README for your project.")

// TODO: Create an array of questions for user input
const questions = [
    
    //Title
    {
    type: 'input',
    name: 'Title',
    message: 'What is the title of the project?',
    validate: your_Input => {
        if (your_Input) {
            return true;
        } else {
            console.log('Enter a title to continue!');
            return false;
        }
    }
    },

    //Description
    {
        type: 'input',
        name: 'Description',
        message: 'Add a description for your project.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Enter a description to continue!');
                return false;
            }
        }
    },

    
    //Installation
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your project?',
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log('Enter the steps of installation to continue.')
                return false;
            }
        }

    },


    //Usage Info

    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use this project?',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Enter the information on how to use this project.')
                return false;
            }
        }

    },


        //License

        {
            type: 'list',
            name: 'License',
            message: 'Choose a license that will best suit your project.',
            choices: [
                {
                    name: 'MIT',
                    value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                }, 
                {
                    name: 'Apache 2.0',
                    value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                }, 
                {
                    name: 'CC0 1.0',
                    value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
                },
                {   name: 'None',
                    value: 'None'
                }
            
            ],
            validate: your_licence => {
                if (your_licence) {
                    return true;
                } else {
                    console.log('Choose a license.')
                    return false;
                }
            }
    
        },



        //Contribution

        {
            type: 'input',
            name: 'Contribution',
            message: 'How can users contribute to this project?',
            validate: your_contribution => {
                if (your_contribution) {
                    return true;
                } else {
                    console.log('Enter the information on how users can contribute to this project.')
                    return false;
                }
            }
    
        },



        //Test

        {
            type: 'input',
            name: 'Test',
            message: 'How does the user test this project?',
            validate: your_test => {
                if (your_test) {
                    return true;
                } else {
                    console.log('Explain how the user tests this project.')
                    return false;
                }
            }
    
        },


        //GitHub Username

        {
            type: 'input',
            name: 'Github',
            message: 'What is your Github username?',
            validate: github_input => {
                if (github_input) {
                    return true;
                } else {
                    console.log('It is required you enter your Github username. Try again.')
                    return false;
                }
            }
    
        },     
        

        //Email

        {
            type: 'input',
            name: 'Email',
            message: 'Provide your email so users may be able to ask you questions.',
            validate: email_input => {
                if (email_input) {
                    return true;
                } else {
                    console.log('Enter your email.')
                    return false;
                }
            }
    
        },   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);
            }

            console.log("All done! You can now preview your README file!");
        });
    };


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};
// Function call to initialize app
init();