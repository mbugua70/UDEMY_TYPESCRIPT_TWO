// Objects and Classes
// objects are instances of classes
// classes make creation of multiple similar objects

class Departments {
  private name: string;
  //   adding private to the property it means you can only access the property inside the class
  private employees: string[] = [];

  // the constructor function is used for initialization

  //   shorthand for writing private and public naming
  //   constructor (private id: string, public name: string) {}
  constructor(n: string) {
    // the name below refers either to a variable name inside our method or global name variable outside our classs
    // console.log(`Department: ${name}`);

    // hence to access a property inside our class we will use this
    this.name = n;
  }

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

const accountings = new Departments("Accounting");
// console.log(accountings);
// accounting.describe();

// const accountingCopys = { name: "DUMMY", describe: accountings.describe };

// accountingCopys.describe();

accountings.addEmployees("john");
accountings.addEmployees("john doe");
accountings.addEmployees("mary");
accountings.addEmployees("wafula");
accountings.printEmployeeData();
