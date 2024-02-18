// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = `23`;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [1, -10, 25, 14, 18, 20, -5, 3, -18, 9];
const temperatures = temperatures1.concat(temperatures2);

const calctempAmpliture = function (temperatures) {
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] === 'number') continue;
    if (min > temperatures[i + 1]) {
      min = temperatures[i + 1];
    }
  }
  
  let max = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] === 'number') continue;
    if (max < temperatures[i + 1]) {
      max = temperatures[i + 1];
    }
  }
  
  const amplitude = max - min;
  console.log(amplitude);
};
calctempAmpliture(temperatures);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unut: 'celsius',
    value: prompt('Degrees celsius:'),
  };
  
  console.table(measurement);
  console.log(measurement);
  console.warn(measurement);
  console.error(measurement);
  
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());

*/

const printForecast = function (arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(` ...${arr[i]}C in ${[i + 1]} days`);
  }
  console.log(String(arr1));
};

printForecast([17, 18, 23]);
