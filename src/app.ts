// Decorator
// is basically a function
// we assign decorator using example @Decorator

function Logger(Logging_Name: string) {
  return function (constructor: Function) {
    console.log(Logging_Name);
    console.log(constructor);
  };
}

function creatingTemplate(template: string, hookId: string) {
  // the underscore below is used to tell typescript that you are aware of the arguement pass but you won't use it
  // return function (_: Function) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("the main template class object");
    // const tempEl = document.getElementById(hookId)! as HTMLInputElement;
    // const p = new originalConstructor();
    // //  console.log(p)
    // if (tempEl) {
    //   tempEl.innerHTML = template;
    //   tempEl.querySelector("h1")!.textContent = p.name;
    // }
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("new class object");
        const tempEl = document.getElementById(hookId)! as HTMLInputElement;
        // const p = new originalConstructor();
        //  console.log(p)
        if (tempEl) {
          tempEl.innerHTML = template;
          tempEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// Initializing the decorator function
// @Logger("John doe")
@creatingTemplate("<h1>The decorator function</h1>", "template_id")
@Logger("JOHN DOE")
class Person {
  name: string = "John";

  constructor(a: string) {
    console.log("Creating a new person object....");
  }
}

const pers = new Person("john");
console.log(pers);

// decorators factories allows us to return decorator functions
// you can dynamically pass argument to the function
// the actual decorator function exercute bottom up

// property decorators

function Log(target: any, productName: string | Symbol) {
  console.log("Logging decorator exercute with property");
  console.log(target, productName);
}

// accessor descriptor

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor and Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Descriptor");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Paramter Descriptor");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  private _price: number;
  title: string;

  // setter
  // accessor decriptor
  // the accessor decriptor can be used to return the something
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid value, the number entered must be positive");
    }
  }

  constructor(t: string, p: number) {
    this._price = p;
    this.title = t;
  }

  // the method decorator below can be used to return something.

  @Log3
  addPrice(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFn = originalMethod.bind(this);
      return bindFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works ";

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const buttonEl = document.querySelector("button")!;
console.log(buttonEl);
buttonEl.addEventListener("click", () => {
  p.showMessage();
});

// decorators for validation

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};
// the property validation function gets two arguements

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ["required"],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    // [propName]: ["positive"],
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function Validate(obj: any) {
  const objectValidorfun = registeredValidators[obj.constructor.name];

  if (!objectValidorfun) {
    return true;
  }

  for (const prop in objectValidorfun) {
    for (const validator of objectValidorfun[prop]) {
      switch (validator) {
        case "required":
          return !!obj[prop];
        case "positive":
          return obj[prop] > 0;
      }
    }
  }
  return true;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }
}

const form = document.querySelector("form")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const newCourse = new Course(title, price);

  if (!Validate(newCourse)) {
    alert("Validation failed");
  }
  console.log(newCourse);
});