'use strict';

/* 
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are the ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh and you're a millenial, ${firstName}`;
            console.log(str);
        }
        console.log(str);
    }
    printAge();
    return age;
}

const firstName = `Jonas`;
calcAge(1991);

console.log(this);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;


const jonas = {
    firstName: `Jonas`,
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
        
        const isMillenial = function () {
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },
    greet: () => {
        console.log(`Hey ${this.firstName}`);
    },
};

jonas.greet();
jonas.calcAge();
*/

let lastName = `Williams`;
let oldLastName = lastName;

lastName = `Davis`;

console.log(lastName, oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;

const jessicaCopy = Object.assign({}, jessica);
