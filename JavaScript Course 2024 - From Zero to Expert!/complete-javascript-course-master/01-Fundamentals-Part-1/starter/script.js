// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// let javascriptIsFun = true;
// console.log (javascriptIsFun);

// console.log (typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');


// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log (ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log (firstName + " " + lastName);

// let x = 10 + 5;

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${ year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`first line \n\second line`);

// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`Jonas`));
// console.log(typeof NAN);

// console.log(String(23), 23);

// // type coercion (avtomatichno pravi chisloto v string)
// console.log(`I am` + 23 + `years old`);
// //shte gi napravi avtomatichno v number, ne kato gorniq primer v string
// console.log(`23` - `10`- 3);
// console.log(`23`/ `2`);


// //ima li "+" i " `` " stava konkatenaciq 1(string) + 1(number) = 11 - 1 = 10 
// let n = `1` + 1;
// n = n - 1;
// console.log(n);


// 5 falsy value: 0, '', undefined, null, NaN - (vinagi sa false, kogato izpolzvame bool)

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1;

// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if(height) {
//     console.log('YAY! Height is defined');
// }
// else {
//     console.log('Height is UNDEFINED')
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your faveourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23) 
// {
//     console.log ('Cool! 23 is an amazing number')
// }

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`);
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired)

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }


// if(day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }
// else if(day === 'tuesday') 
//     console.log('Prepare theory videos');
// else if(day === wednesday || day === thursday)
//     console.log('Write code examples');
// else if(day === 'friday') 
//     console.log('Record videos');
// else if(day === 'saturday' || day === 'sunday')
//     console.log('Enjoy the weekend :D');
// else console.log('Not a valid day!');

const age = 2;
age >= 18 ? console.log(`I like to dring wine 🍷`): console.log(`I like to dring water 💧`);

console.log(`I like to drink ${age >= 18 ? "wine 🍷": "water 💧"}`);

