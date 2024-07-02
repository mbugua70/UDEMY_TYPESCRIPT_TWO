// static methods and properties
class Departments_five {
  // in below line of code instead of using private we will use protected.
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

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

class AccountingDepartment_two extends Departments_five {
  private lastReport: string;

  //    getter method has to return something
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please the input value can't be empty");
    }
    this.addReport(value);
  }

  constructor(id: string, private report: string[]) {
    super(id, "React");
    this.lastReport = report[0];
  }

  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }
}

const employee1 = Departments_five.createEmployee("waweru");
console.log(employee1);
const accounting_two = new AccountingDepartment_two("johnd", []);
accounting_two.addReport("melan");
accounting_two.addReport("kamau");
accounting_two.mostRecentReport = "tim";
console.log(accounting_two.mostRecentReport);
