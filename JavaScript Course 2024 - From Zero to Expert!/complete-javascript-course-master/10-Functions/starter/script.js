'use strict';

// const bookings = [];
// const creeateBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking);
//     booking.push(booking);
// }

// creeateBooking(`LH123`, 1, 1);

// const flight = `LG234`;
// const jonas = {
//     name: `Jonas Schmedtmann`,
//     passport: `24739479284`
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = `LH999`;
//     passenger.name = `Mr. ` + passenger.name;

//     if (passenger.passport === `24739479284`)
//         alert(`Check in`)
//     else
//         alert(`Wrong passport!`);
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);


// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }
// transformer(`JavaScript is the best!`, upperFirstWord);
// console.log(`---------------------`);
// transformer(`JavaScript is the best!`, oneWord);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet(`Hey`);

// greeterHey(`Jonas`);
// greeterHey(`Steven`);

// greet(`Hello`)(`Jonas`);

// const lufthansa = {
//     airLine: `Lufthansa`,
//     iataCode: `LH`,
//     bookings: [],
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airLine} 
//             flight ${this.iataCode} ${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name })
//     }
// };

// lufthansa.book(239, `Jonas Schmedtmann`);
// lufthansa.book(635, `John Smith`);

// const eurowings = {
//     name: `Eurowings`,
//     iataCode: `EW`,
//     bookings: [],
// };

// const book = lufthansa.book;

// book(23, `Sarah Williams`);

// //Event Listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(10, 0.23); //default values
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100)); // rate 
// console.log(addVAT(23)); 

// const runOnce = function () {
//     console.log(`This will never run again`);
// };
// runOnce();

// (function () {
//     console.log(`This will never run again`);

// })();

// (() => console.log(`This will ALSO never run again`))();

// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passangers`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);



// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f();
// h();
// f();
// f();
// g();
// f();



//example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);

}

boardPassengers(180, 3);
