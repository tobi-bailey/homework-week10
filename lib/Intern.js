// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee{
    constructor(id, name, role, email, school) {
        super(id, name, role, email);
        this.school = school;
    }
};

const intern = new Intern("???");
