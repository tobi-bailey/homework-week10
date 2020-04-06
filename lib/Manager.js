// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(id, name, role, email, office) {
        super(id, name, role, email);
        this.office = office;
    }
};

const manager = new Manager("???");