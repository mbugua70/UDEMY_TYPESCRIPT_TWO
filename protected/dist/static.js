"use strict";
class Departments_five {
    static createEmployee(name) {
        return { name: name };
    }
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
class AccountingDepartment_two extends Departments_five {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please the input value can't be empty");
        }
        this.addReport(value);
    }
    constructor(id, report) {
        super(id, "React");
        this.report = report;
        this.lastReport = report[0];
    }
    addReport(text) {
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
