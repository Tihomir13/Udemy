//'use strict';

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// const jonas = new Person(`Jonas`, 1991);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }
// console.log(jonas.__proto__.__proto__);
// let arr = new Array(1, 1, 1);
// console.log(arr);
// console.log(arr.__proto__.__proto__);







// Chalange 1
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going with ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going with ${this.speed} km/h`);
// }

// let car1 = new Car(`bmw`, 140);










// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }
// }

// const jessica = new PersonCl(`Jessica`, 1996);

// const account = {
//     owner: `Jonas`,
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movements.push(mov);
//     },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);


















// // Challange 2

// class car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going with ${this.speed} km/h`);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going with ${this.speed} km/h`);
//     }

//     get speedUS() {
//         return this.speed * 0.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const bmw = new car(`bmw`, 140);
// bmw.accelerate();
// bmw.speedUS = 200;







// //Наследяване традиционен начин

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }


// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();
// mike.calcAge();











// // Chalange 3
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const EV = function (make, speed, batteryCharge) {
//     Car.call(this, make, speed);
//     this.batteryCharge = batteryCharge;
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.batteryCharge = chargeTo;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 20;
//     this.batteryCharge -= 1;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.batteryCharge}`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.batteryCharge}`);
// }
// EV.prototype = Object.create(Car.prototype);

// const car = new EV(`Tesla`, 140, 100);
// console.log(car);
// car.accelerate();
// car.brake();
// console.log(car);











// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear
//     }
// };

// class Student extends Person {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear)
//     }
// }







// // Chalange 4

// class Car {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.batteryCharge}`);
//         return this;
//     }
// }

// class EV extends Car {
//     #batteryCharge
//     constructor(make, speed, batteryCharge) {
//         super(make, speed);
//         this.#batteryCharge = batteryCharge;
//     }

//     chargeBattery(chargeTo) {
//         this.#batteryCharge = chargeTo;
//         return this;
//     }

//     accelerate() {
//         this.speed += 20;
//         this.#batteryCharge -= 1;
//         console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.batteryCharge}`);
//         return this;
//     }

//     get speedUS() {
//         return this.speed * 0.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }


// const Tesla = new EV(`Tesla`, 200, 100);
// console.log(Tesla);
// Tesla.accelerate().brake().accelerate().chargeBattery(100).accelerate();
// console.log(Tesla.speedUS);