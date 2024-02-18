//1 LECTURE: Functions
const describeCountry = function (country, population, capitalCity) {
    return (`${country} has ${population} milion people and its capital city is ${capitalCity}`)
}

const Bulgaria = describeCountry('Bulgaria', 6, 'Sofia');
const Germany = describeCountry('Germany', 83, 'Berlin');
const Finland = describeCountry('Finland', 6, 'Helsinki');

console.log(Bulgaria, Germany, Finland)

//2 LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const China = console.log(percentageOfWorld1(1441));
const Bulgaria1 = console.log(percentageOfWorld1(6));
const Germany1 = console.log(percentageOfWorld1(83));

console.log('--------------------------------------------');

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}

const China1 = console.log(percentageOfWorld2(1441));
const Bulgaria11 = console.log(percentageOfWorld2(6));
const Germany11 = console.log(percentageOfWorld2(83));

console.log('--------------------------------------------');
//3 LECTURE: Arrow Functions 

const percentageOfWorld3 = population => {
    return (population / 7900) * 100
}

const China11 = console.log(percentageOfWorld3(1441));
const Bulgaria111 = console.log(percentageOfWorld3(6));
const Germany111 = console.log(percentageOfWorld3(83));

console.log('--------------------------------------------');

//4 LECTURE: Functions Calling Other Functions

const describePopulation = function (country, population) {
    return (`${country} has ${population} milion people, which is ${percentageOfWorld3(population)}`);
}

const China2 = console.log(describePopulation('China', 1441));
const Bulgaria2 = console.log(describePopulation('Bulgaria', 6));
const Germany2 = console.log(describePopulation('Germany', 83));

//5 LECTURE: Introduction to Arrays

let population1 = [1441, 6, 83, 23]

if (population1.length === 4) {
    console.log(true);
}

let percentages = [percentageOfWorld1(1441), percentageOfWorld1(6), percentageOfWorld1(83), percentageOfWorld1(23)]

//6 LECTURE: Basic Array Operations (Methods)

let neighbours = [`Romania`, `Makedonia`];

neighbours.push(`Utopia`);
//neighbours.shift(3);
neighbours.pop(`Utopia`);

console.log(neighbours);

if (neighbours.includes(`Germany`) == false) {
    console.log(`Probably not a central European country :D`);
}

let i = neighbours.indexOf('Romania');

neighbours[i] = `Republic of Romania`;

// neighbours[neightbours.indexOf(`Romania`)] = `Republic of Romania`; //drugo reshenie
console.log(neighbours);

//7 LECTURE: Introduction to Objects

let myCountry = {
    country: `Bulgaria`,
    capital: `Sofia`,
    language: `bulgarian`,
    population: 6,
    neighbours: [`Romania`, `Makedonia`],
    isIsland: false,

    describe: function () {
        console.log(`${this.country} has ${this.population} milion ${this.language} speaking people, 
${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        if (neighbours.lengths === 0)
            myCountry = true;
            else 
            myCountry = false;
    }
}
//8 LECTURE: Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language} speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

    myCountry.population += 2;
    console.log(myCountry.population);

    myCountry[`population`] -= 2;
    console.log(myCountry.population);

//9 LECTURE: Object Methods

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

//10 LECTURE: Iteration: The for Loop

for(let i=0; i<=50; i++)
console.log(`Vote number ${i} is currently voting`)

//11 LECTURE: Looping Arrays, Breaking and Continuing

let percentages2 = [];
for(let i=0; i<=population1.length-1; i++) {
    percentages2[i] = percentageOfWorld1(population1[i]);

    if(percentages2[i] === percentages[i]) continue;
}

console.log(percentages2);

//11 LECTURE: Looping Backwards and Loops in Loops 

const listOfNeighbours = 
[['Canada', 'Mexico'], 
['Spain'], 
['Norway', 'Sweden', 'Russia']];

for(let i=0; i<listOfNeighbours.length; i++) {
    for(let p=0; p<listOfNeighbours[i].length; p++){ // p< ot indexa na parviq element demek 2 sled tova 1 i posle 3 
        console.log(`Neighbour: ${listOfNeighbours[i][p]}`); // parvo izpisva 1,1 sled tova 1 2,|2,1|3,1|3,2|3,3|
    }
}

//12 LECTURE: The while Loop

let percentages3 = [];
let i1 = 0;
while(i1<=population1.length) {
    percentages3[i1] = percentageOfWorld1(population1[i1]);
    i1++;
    if(percentages3[i1] === percentages[i1]) break;
}

console.log(percentages3);