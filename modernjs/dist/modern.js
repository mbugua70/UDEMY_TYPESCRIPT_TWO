"use strict";
if (4 > 1) {
    let a = 2;
}
const add = (a, b) => a + b;
const printOutput = (output) => console.log(output);
printOutput(add(2, 4));
const addTwo = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const resultTwo = addTwo(2, 4, 4, 4, 4, 5.5);
console.log(resultTwo);
const hobbies = ["john", "mary", "ceaser", "david"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
