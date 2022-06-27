'use strict';

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// In Javascript, all numbers are represented as floating point (decimal)
console.log(23 === 23.0);
// Javascript has issues with decimals, though.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
// - string must start with number
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e30', 10));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// Not a Number (NaN)
// Used to check if a value is not a number
console.log('------NaN----------');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(20 / 0));

// This is the best way to check if a value is a number
console.log('------isFinite---------');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(20 / 0));

// Check to see if value is an integer
console.log('------isInteger---------');
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(20 / 0));
