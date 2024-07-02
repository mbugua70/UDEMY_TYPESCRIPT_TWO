// protected

class Departments_three {
  // in below line of code instead of using private we will use protected.
  protected employees: string[] = [];

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

  addEmployees(name: string): void {
    if (name === "mary" || name === "james") {
      return;
    }
    this.employees.push(name);
  }
}

// const accountings_three = new FrontEndDepartment("23434", "Accounting");
const accountings_three = new FrontEndDepartment("23434", ["winnie"]);

// accountings_three.addEmployees("Tim");
// accountings_three.addEmployees("James");
// accountings_three.addEmployees("Evans");
accountings_three.printEmployeeData();
accountings_three.describe();

accountings_three.addEmployees("james");
accountings_three.addEmployees("mary");

accountings_three.addEmployees("njoroge");
console.log(accountings_three);
