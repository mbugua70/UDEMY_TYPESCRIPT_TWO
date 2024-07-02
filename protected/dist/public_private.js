"use strict";
class Departments {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeData() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accountings = new Departments("Accounting");
accountings.addEmployees("john");
accountings.addEmployees("john doe");
accountings.addEmployees("mary");
accountings.addEmployees("wafula");
accountings.printEmployeeData();
