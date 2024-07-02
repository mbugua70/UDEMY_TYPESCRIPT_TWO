"use strict";
class Departments_four {
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
class AccountingDepartment extends Departments_four {
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
const accounting = new AccountingDepartment("johnd", []);
accounting.addReport("melan");
accounting.addReport("kamau");
accounting.mostRecentReport = "tim";
console.log(accounting.mostRecentReport);
