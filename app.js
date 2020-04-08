const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
let team =[];
​
// Write code to use inquirer to gather information about the development team members,
function employee() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your Name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What office are you in?"
      }
   ])
   .then(function(response){
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber );
    team.push(manager)
    newMember()
   }) 
  }
  function newMember(){
    return inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "What type of employee are you trying to enter?",
        choices: [
          "Engineer",
          "Intern",
          "Done"
        ]
      }.then(function(response){
        const employeeType = { ...employeeType };
        // Do everything else the same
        if (employeeType.Engineer = True) {
            .then(function newEngineer(){
                return inquirer.prompt([
                      {
                        type: "input",
                        name: "name",
                        message: "Enter your Name",
                      },
                      {
                        type: "input",
                        name: "id",
                        message: "Enter your ID",
                      },
                      {
                        type: "input",
                        name: "email",
                        message: "Enter your Email"
                      },
                      {
                        type: "input",
                        name: "github",
                        message: "What is their github handle?"
                      }
                ])
                .then(function(response){
                    const engineer = new Engineer(response.name, response.id, respomse.email, response.github);
                    team.push(engineer)
                    newMember()
                })
            })
        };
        if (employeeType.Intern = True) {
            .then(function newIntern(){
                return inquirer.prompt([
                      {
                        type: "input",
                        name: "name",
                        message: "Enter your Name",
                      },
                      {
                        type: "input",
                        name: "id",
                        message: "Enter your ID",
                      },
                      {
                        type: "input",
                        name: "email",
                        message: "Enter your Email"
                      },
                      {
                        type: "input",
                        name: "school",
                        message: "What school do they go to?"
                      }
                ])
                .then(function(response){
                    const intern = new Intern(response.name, response.id, respomse.email, response.github);
                    team.push(intern)
                    newMember()
                })
            })
      }
      if (employeeType.Done = true) {
      .then(render(fs.appendFile("./templates/main.html", team)))
      };
    })
    )};


  
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
