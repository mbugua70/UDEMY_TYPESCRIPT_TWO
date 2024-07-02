"use strict";
class Departments_two {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
const accountings_two = new Departments_two("di", "Accounting");
