// Advance Typescript
// 1. intersection types
// allows us to connect other type


// 2. Type Gurds


type Admin = {
  name: string;
  previleges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}




type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  previleges: ["developer"],
  startDate: new Date()
}

type Combinable = number | string
type Numeric = number | boolean


function add (a: Combinable, b: Combinable){
  // addding type guard
  if(typeof a === "string" ||  typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const sum = add(5, 6)
// console.log(sum)


type UnKnownemployment = Employee | Admin;





function printEmployee(emp: UnKnownemployment) {
  console.log(`Name ${emp.name}`)

  // type guard

  if('previleges' in emp) {
    console.log(`Previledge ${emp.previleges}`)
  }

  if('startDate' in emp) {
    console.log(`Start Date ${emp.startDate}`)
  }
}

printEmployee(e1)

// type guard with classes

class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive () {
    console.log("Driving a Truck")
  }

  loadTruck(amount: number) {
    console.log(`Loading a drug with ${amount} of bricks`)
  }
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();


function useVehicle (vehicle: Vehicle) {
  vehicle.drive();
 if(vehicle instanceof Truck){
  vehicle.loadTruck(1000);
 }
}


useVehicle(v1)


interface Bird {
  type: 'bird'
  flyingBird: number
}

interface Horse {
  type: "horse"
  runningHorse: number
}

type Animal = Horse | Bird

// discriminated inions

function movingAnimal (animal: Animal){
  let speed;
  switch(animal.type) {
    case 'horse':
    speed = animal.runningHorse
    break;

    case "bird":
      speed = animal.flyingBird
      break;

  }

  console.log(`A moving ${animal.type} at a speed of ${speed}`)
}


movingAnimal({type: "bird", flyingBird: 1000})
movingAnimal({type: 'horse', runningHorse: 2000})


// type casting
// help you to tell typescript that some value are of a specific type

// to tell typescript that the element selected its of HTMLInputElement we will use
// method 1.

// const inputElement =  document.getElementById("user-input")! as HTMLInputElement;

const inputElement = <HTMLInputElement>document.getElementById("user-input")!
console.log(inputElement)
inputElement.value = "john doe"


interface ErrorHandler {
  [prop: string]: string
}

const errorBag: ErrorHandler = {
  email: "Not a valid Email",
  username: "Must start with a capital chaaracter"
}

// function Overloads

// optional Chaining

const fetchedUserData = {
  user: "john doe",
  age: 23,
  job: {title: "Lodash", description: "my own work"}
}


// With optional chaining operator even when a variable does not exist, it won't throw an unnecessary error
console.log(fetchedUserData?.job?.title)

// Nullish coalescing

const userOne = null;
// the two ?? question marks means if the userOne is null/undefined and not empty string then they should use the default as the value
const storedData = userOne ?? "Default"
console.log(storedData)