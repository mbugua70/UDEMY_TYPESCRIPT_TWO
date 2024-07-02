"use strict";
class Departments_three {
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
class FrontEndDepartment extends Departments_three {
    constructor(id, admins) {
        super(id, "React");
        this.admins = admins;
    }
}
const accountings_three = new FrontEndDepartment("23434", ["winnie"]);
accountings_three.addEmployees("Tim");
accountings_three.addEmployees("James");
accountings_three.addEmployees("Evans");
accountings_three.printEmployeeData();
accountings_three.describe();
console.log(accountings_three);
