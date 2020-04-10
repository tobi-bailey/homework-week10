const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let team =[];

function employee(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What office are you in?"
    }
  ])
  .then(function(response){
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    team.push(manager)
    newMember()
  })
}
employee()

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
  })
  .then(function(response){
    if (response.employeeType === "Engineer") {
      newEngineer()
    }
    else if (response.employeeType === "Intern") {
      newIntern()
    }
    else if (response.employeeType === "Done"){
      renderResults()}  
  })
}
function newEngineer(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "github",
      message: "What is their github handle?"
    }
  ])
  .then(function(response){
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    team.push(engineer)
    newMember()
  })
};
function newIntern(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "school",
      message: "What school do they go to?"
    }
  ])
  .then(function(response){
    const intern = new Intern(response.name, response.id, response.email, response.school);
    team.push(intern)
    newMember()
  })
};

const directory = path.join(__dirname, "output","team.html") 
function renderResults(){
  fs.writeFileSync(directory, render(team))
};
