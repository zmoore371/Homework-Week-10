const generateHTML = require("./lib/generateHTML");

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
                   console.log("Field blank!")
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
                    console.log("Field must be a number.")
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
                    console.log("Field cannot be blank!");
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
                    console.log("Field must be a number.");
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
        addAnother();
    })
};

const chooseRole = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose your employee's role", 
            choices: ["Engineer", "Intern"]
        }
    ])
    .then(data => {
        
        let {role} = data

        if(role === "Engineer"){
            chooseEngineer();
        } else {
            chooseIntern();
        }
    })
}

chooseEngineer = () => {
    console.log("Engineer")
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Engineer?",
            validate: nameInput => {
                if(nameInput !== null) {
                    return true;
                } else {
                    console.log("Field cannot be blank!")
                    return false;
                }
            }
         }, 
         {
             type: "input",
             name: "id",
             message: "Enter Engineer's ID number: " ,
             validate: nameInput => {
                 if(isNaN(nameInput)){
                     console.log("Field must be a number.")
                     return false;
                 } else {
                     return true;
                 }
             } 
 
         },
         {
            type: "input",
            name: "email",
            message: "What is the Engineer's Email?",
            validate: email => {
                if(email !== null) {
                    return true;    
                } else {
                    console.log("Field cannot be blank!");
                    return false; 
                }
            }

        }, {
            type: "input",
            name: "github",
            message: "What is the Engineer's Github username?",
            validate: email => {
                if(email !== null) {
                    return true;    
                } else {
                    console.log("Field cannot be blank!");
                    return false; 
                }
            }

        },
    ])
    .then(engineerInfo => {
        let {name, id, email, github} = engineerInfo;

        employee = new Engineer(name, id, email, github)
        
        console.log(employee)
        
        teamArray.push(employee)

        console.log(teamArray)
        
        addAnother()
    })

}

chooseIntern = () => {
    console.log("Intern")
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Intern?",
            validate: nameInput => {
                if(nameInput !== null) {
                    return true;
                } else {
                    console.log("Field cannot be blank!")
                    return false;
                }
            }
         }, 
         {
             type: "input",
             name: "id",
             message: "Enter Intern's ID number: " ,
             validate: nameInput => {
                 if(isNaN(nameInput)){
                     console.log("Field must be a number.")
                     return false;
                 } else {
                     return true;
                 }
             } 
 
         },
         {
            type: "input",
            name: "email",
            message: "What is the Intern's Email?",
            validate: email => {
                if(email !== null) {
                    return true;    
                } else {
                    console.log("Field cannot be blank!");
                    return false; 
                }
            }

        }, {
            type: "input",
            name: "school",
            message: "What school is the Intern attending?",
            validate: email => {
                if(email !== null) {
                    return true;    
                } else {
                    console.log("Field cannot be blank!");
                    return false; 
                }
            }

        },
    ])
    .then(internInfo => {
        let {name, id, email, school} = internInfo;

        employee = new Intern(name, id, email, school)
        
        console.log(employee)
        
        teamArray.push(employee)
        
        console.log(teamArray)
        
        addAnother()
    })
}

const addAnother = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "confirmAdd",
            message: "Would you like to add another Employee?",
            default: false
        }
    ])
    .then(data => {
        if(data.confirmAdd === true) {
            chooseRole();
        } else {
            console.log("No more employees to add")
            return teamArray
        }
    })
    .then(teamArray => {
        return generateHTML(teamArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML) 
    })
    .catch(err => {
        console.log(err)
    })
    
}


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
    // .then(addAnother)
//     .then(chooseRole)
//     .then(teamArray => {
//         return generateHTML(teamArray)
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML) 
//     })
//     .catch(err => {
//         console.log(err)
//     })
    
    
// create = () => {
//     teamArray => {
//         return generateHTML(teamArray)
//     }
//     .then(pageHTML => {
//         return writeFile(pageHTML) 
//     })
   
// }