// You can only inherite from one class.
// super function
// calls the constructor of the base class
// you have to call your super function before doing anything with the this keyword

class Departments_three {
  private employees: string[] = [];

  // the constructor function is used for initialization

  //   shorthand for writing private and public naming
  constructor(private id: string, public name: string) {}

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeData() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// inheritance

class FrontEndDepartment extends Departments_three {
  // using extends we extends all the property and methods of the Departments_three
  // to initiate the constuctor function of the DT we will use super function

  admins: string[];
  constructor(id: string, admins: string[]) {
    // the function super will take the argument of the current constuctor function
    super(id, "React");
    this.admins = admins;
  }
}

// const accountings_three = new FrontEndDepartment("23434", "Accounting");
const accountings_three = new FrontEndDepartment("23434", ["winnie"]);

accountings_three.addEmployees("Tim");
accountings_three.addEmployees("James");
accountings_three.addEmployees("Evans");
accountings_three.printEmployeeData();
accountings_three.describe();
console.log(accountings_three);
