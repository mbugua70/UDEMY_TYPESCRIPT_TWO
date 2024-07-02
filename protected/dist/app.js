"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(45, 6));
let user;
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`The ${phrase} belongs to ${this.name}`);
    }
}
user = new Person("john");
user.greet("silo");
