"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(Logging_Name) {
    return function (constructor) {
        console.log(Logging_Name);
        console.log(constructor);
    };
}
function creatingTemplate(template, hookId) {
    return function (originalConstructor) {
        const tempEl = document.getElementById(hookId);
        const p = new originalConstructor();
        if (tempEl) {
            tempEl.innerHTML = template;
            tempEl.querySelector("h1").textContent = p.name;
        }
        return class extends originalConstructor {
        };
    };
}
let Person = class Person {
    constructor(a) {
        this.name = "John";
        console.log("Creating a new person object....");
    }
};
Person = __decorate([
    creatingTemplate("<h1>The decorator function</h1>", "template_id"),
    Logger("JOHN DOE")
], Person);
const pers = new Person("john");
console.log(pers);
function Log(target, productName) {
    console.log("Logging decorator exercute with property");
    console.log(target, productName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor and Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Descriptor");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Paramter Descriptor");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid value, the number entered must be positive");
        }
    }
    constructor(t, p) {
        this._price = p;
        this.title = t;
    }
    addPrice(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "_price", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "addPrice", null);
