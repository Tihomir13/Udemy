'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
    console.log(`My name is Jonas`);
}
logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // zapazvame rezultata v promenliva
console.log(appleJuice);

console.log(fruitProcessor(2, 4)); // ne zapazvame rezultata, a samo pokazvame v konzolata

///////////
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression (izrazqvane)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
// Arrow function
const calcAge3 = birthYear => 
2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear , firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, 'Tihomir'));
console.log(yearsUntilRetirement(1991, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} piece of apples 
    and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function(birthYear) {
    return new Date().getFullYear() - birthYear;
}

const yearsUntilRetirement = function (birthYear , firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0) {
        console.log(`${firstName} retires in${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }
}

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName ='Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [calcAge(years[0]), calcAge(years[1]), 
calcAge(years[years.length - 1])];
console.log(ages);

const friends = [`Michael`, `Steven`, `Peter`];

// Add elements
friends.push('Jay'); // dobavq otzad element
console.log(friends);

friends.unshift(`John`); //dobavq otpred element
console.log(friends);

// Remove elements
friends.pop(); // trie posledniq element
const popped = friends.pop();
console.log(friends);

friends.shift(); // trie parviq element
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if(friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven`);
}

const jonasArray = [
    `Jonas`,
    `Schemedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
]

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}

console.log(jonas.firstName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);


const interestedIn = prompt(`What do you want to know about Jonas? Chose between firstName, lastName, age, job, and friends`);
console.log(jonas[interestedIn]) // ako polzvame drugata notaciq (s tochkata) nqma da vzemem stoinosta ot prompta. jonas.interestedIn

if(jonas[interestedIn])
console.log(jonas[interestedIn]);
else 
console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`);

//dobavqne v obekta 2 nachina
jonas.location = `Portugal`; 
jonas[`twitter`] = `@jonasschmedtman`;
//console.log(jonas);

console.log(`${jonas.firstName} has ${jonas['friends'][length]} friends, and his best friend is called ${jonas['friends'][0]}`); // length moje s (tochka) kakto i s kvadratni skobi

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriverLicense: true,
    
    calcAge: function () {
        this.age = 2037 - this.birthYear;        
        return this.age;
    },
    
    getSumarry: function () {
        return(`${this.firstName} is a ${this.age}-year old teacher, and he ${this.hasDriverLicense ? `has`: `has no`} driver's license`);
    }
}

console.log(jonas.calcAge()); // this raboti kato jonas zashtoto sme go zadali jonas.calcAge();

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSumarry());

for (let i = 1; i <= 10; i++) {
    console.log(`lisfting weights repetition ${i}`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(new Date().getFullYear() - years[i]); //2023 - 1991 (primer)
}
console.log(ages);

console.log(jonas);
//continue and break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; //only strings
    
    console.log(jonas[i], typeof jonas[i]);
}
console.log("----------------")
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; //break with number
    
    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >=0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // random number zakraglen ot 1 do 6 (poneje ima +1, inache e ot 0 do 5)

while (dice !== 6) { // dokato e zarat e 6 se izpalnqva
    console.log(`You rolled a ${dice}`); 
    dice = Math.trunc(Math.random() * 6) + 1; 
    if(dice === 6) console.log(`Loop is about to end...`); // i kogato hvarli 6 svarshva i izliza nadpisa
}
*/