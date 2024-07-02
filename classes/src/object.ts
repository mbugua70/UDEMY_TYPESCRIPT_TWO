// Objects and Classes
// objects are instances of classes
// classes make creation of multiple similar objects

class Department {
  name: string;

  // the constructor function is used for initialization
  constructor(n: string) {
    // the name below refers either to a variable name inside our method or global name variable outside our classs
    // console.log(`Department: ${name}`);

    // hence to access a property inside our class we will use this
    this.name = n;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe();
