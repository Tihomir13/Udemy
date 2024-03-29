//1 LECTURE: Values and Variables
const country = "Bulgaria";
const continent = "Europe";
let population = 6.52;

console.log(country, ",", continent, ",", population);

//2 LECTURE: Data Types
//3 LECTURE: let, const and var
const isIsland = false;
const language = "bulgarian";

console.log(typeof isIsland, population, country, language);

//4 LECTURE: Basic Operators
//5 LECTURE: Strings and Template Literals
console.log(`if my country split in half ${population / 2} milions`);
console.log(population++);
console.log(`Bulgaria has more population than Finalnd? ${population > 6}`);
console.log(`Bulgaria has more population than average country ${population > 33}`);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//6 LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
}
else console.log(`${country}'s population is ${33 - population} below average`);

//7 LECTURE: Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

//8 LECTURE: Equality Operators: == vs. ===
let numNeighbours;
//numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1)
    console.log(`Only 1 border`);
else if (numNeighbours > 1)
    console.log(`More than 1 border`);
else console.log(`No borders`);

//9 LECTURE: Logical Operators

if (language === `english` && population <= 50 && isIsland === false) {
    console.log(`You should live in ${country} :)`);
}
else console.log(`${country} does not meet your criteria :( `);

//10 LECTURE: The switch Statement

switch (language) {
    case `chinase`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
        break;
}

//11 LECTURE: The Conditional (Ternary) Operator

population > 33 ? console.log(`${country}'s population is above average`) :
    console.log(`${country}'s population is below average!`);
