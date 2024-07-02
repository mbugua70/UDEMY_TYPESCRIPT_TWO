// interface
// describe the structure of an object.
// we won't use it as a blueprint but as a custom
// starts with the name interface

interface Person {
  name: string;
  age: number;

  // method in interface
  greet(phrase: string): void;
}

// when initiliazing a variable to an object we will use now Person as the type of that object

let studentOne: Person;

studentOne = {
  name: "melan",
  age: 28,

  greet(phrase: string) {
    console.log(`The ${phrase} belongs to ${this.name}`);
  },
};

studentOne.greet("silo");

// interface allows us to define the structure of an object
