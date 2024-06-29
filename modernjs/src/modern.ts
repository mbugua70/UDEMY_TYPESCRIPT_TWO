// Block scope

// The difference between let and var

if (4 > 1) {
  // the let variable declared in the if statement cannot only be used inside the if statement.
  let a = 2;
}

// console.log(a);


const add = (a: number, b: number) => a + b;

// const printOutput = (output: string | number) => console.log(output);

// The above arrow function can be written as shown below
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(2, 4));

// Rest parameter

const addTwo = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const resultTwo = addTwo(2, 4, 4, 4, 4, 5.5);
console.log(resultTwo);

// Destructuring of Arrays and Objects
// pulling items out of an array or objects
// in array element are pulled out in order
// while in object element are not pulled out in order but according to the key.

const hobbies = ["john", "mary", "ceaser", "david"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);