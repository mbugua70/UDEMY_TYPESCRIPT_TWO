"use strict";
let studentOne;
studentOne = {
    name: "melan",
    age: 28,
    greet(phrase) {
        console.log(`The ${phrase} belongs to ${this.name}`);
    },
};
studentOne.greet("silo");
