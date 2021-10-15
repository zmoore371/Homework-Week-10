//generate html 

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
       {
           type: "input",
           name: "name",
           message: "What is the name of the Manager?",
           validate: nameInput => {
               if(nameInput !== null) {
                   return true;
               } else {
                   console.log("Manager name cannot be blank!")
                   return false;
               }
           }
        }, 
        {
            type: "input",
            name: "id",
            message: "Enter manager's ID number: " ,
            validate: nameInput => {
                if(isNaN(nameInput)){
                    console.log("Managers ID must be a number.")
                    return false;
                } else {
                    return true;
                }
            } 

        }, 
        {
            type: "input",
            name: "email",
            message: "What is the managers Email?",
            validate: email => {
                if(email !== null) {
                    return true;    
                } else {
                    console.log("Manager email cannot be blank!");
                    return false; 
                }
            }

        },
        {
            type: "input",
            name: "officeNumber",  
            message: "What is the manager's office number?",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log("Please enter office number:");
                    return false; 
                } else {
                    return true; 
                }
            }
        }   
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput    
        const manager = new Manager (name, id, email, officeNumber);
        
        teamArray.push(manager);
        console.log(manager);
    })
};


addManager();