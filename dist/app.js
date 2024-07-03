"use strict";
var _a;
const e1 = {
    name: "max",
    previleges: ["developer"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployee(emp) {
    console.log(`Name ${emp.name}`);
    if ('previleges' in emp) {
        console.log(`Previledge ${emp.previleges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date ${emp.startDate}`);
    }
}
printEmployee(e1);
class Car {
    drive() {
        console.log("Driving a car");
    }
}
class Truck {
    drive() {
        console.log("Driving a Truck");
    }
    loadTruck(amount) {
        console.log(`Loading a drug with ${amount} of bricks`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadTruck(1000);
    }
}
useVehicle(v1);
function movingAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'horse':
            speed = animal.runningHorse;
            break;
        case "bird":
            speed = animal.flyingBird;
            break;
    }
    console.log(`A moving ${animal.type} at a speed of ${speed}`);
}
movingAnimal({ type: "bird", flyingBird: 1000 });
movingAnimal({ type: 'horse', runningHorse: 2000 });
const inputElement = document.getElementById("user-input");
console.log(inputElement);
inputElement.value = "john doe";
const errorBag = {
    email: "Not a valid Email",
    username: "Must start with a capital chaaracter"
};
const fetchedUserData = {
    user: "john doe",
    age: 23,
    job: { title: "Lodash", description: "my own work" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userOne = null;
const storedData = userOne !== null && userOne !== void 0 ? userOne : "Default";
console.log(storedData);
