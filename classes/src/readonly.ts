class Departments_two {
  //   private name: string;

  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployees(employee: string) {
    // Trying to change the code it will throw and error since the id property is only readOnly
    // this.id = "john";
    this.employees.push(employee);
  }

  printEmployeeData() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accountings_two = new Departments_two("di", "Accounting");

// ReadOnly
