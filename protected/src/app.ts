// interface
// describe the structure of an object.
// we won't use it as a blueprint but as a custom
// starts with the name interface

// extending interface
// you can add more than one interface by simply seperating then with a comma

// having interface as a  function

interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(45, 6));

interface Named {
  readonly name: string;
  //   you can add optional property
  // we add optional property by adding ?
  outName?: string;
}

interface Greetable extends Named {
  // adding readOnly
  //   its not possible to add public or private
  //   readonly name: string;

  // method in interface
  greet(phrase: string): void;
}

// when initiliazing a variable to an object we will use now Person as the type of that object

let user: Greetable;

// implementing our inheritance with our class your the key word implement
// unlike class extends, you can implement more than one inheritance

class Person implements Greetable {
  name: string;
  //   age: number;
  constructor(name: string) {
    // one can also have optional property in the constructor function
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`The ${phrase} belongs to ${this.name}`);
  }
}

user = new Person("john");

user.greet("silo");

// interface allows us to define the structure of an object
