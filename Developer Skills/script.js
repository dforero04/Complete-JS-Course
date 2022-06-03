// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Practice problem-solving problem
// PROBLEM:
// We work for a company building a smart home
// thermometer. Our most recent task is this:
// "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind
// that sometimes there might be a sensor error"

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem
// - What is temp amplitude?
// Answer: difference between the highest and lowest temp
// - How to compute the max and min temperatures?
// - What does a sensor error look like? what to do?
// Answer: string 'error'
//
// Break up into sub-problems
// - How to ignore errors?
// - Find max value in array?
// - Find min value in array?
// - Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max - min);
//   return max - min;
// };
// calcTempAmplitude(temperatures);

//////////////////////////////////////////
// Coding Challenge #1
//////////////////////////////////////////

/*
Given an array of forecasted maximum temps,
the thermometer displays a string with these temps.

Example: [17, 21, 24] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above
to the console.
*/

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let res = '... ';
  for (let i = 0; i < temps.length; i++) {
    res = res.concat(`${temps[i]}°C in ${i + 1} days ... `);
  }
  return res;
};

console.log(printForecast(test1));
console.log(printForecast(test2));
