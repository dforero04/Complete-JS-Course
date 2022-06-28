'use strict';

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// // In Javascript, all numbers are represented as floating point (decimal)
// console.log(23 === 23.0);
// // Javascript has issues with decimals, though.
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// // - string must start with number
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30', 10));

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// // Not a Number (NaN)
// // Used to check if a value is not a number
// console.log('------NaN----------');
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(20 / 0));

// // This is the best way to check if a value is a number
// console.log('------isFinite---------');
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(20 / 0));

// // Check to see if value is an integer
// console.log('------isInteger---------');
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(20 / 0));

// // Rounding Decimals to specific decimal point values
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// // Numeric Separators
// // - basically an underscore that makes larger numbers easier to read
// const diameterEarth = 287_345_000_000;
// console.log(diameterEarth);

// // BigInt
// // - used to store numbers of any size
// console.log(1234123134523452345123424564567090459694596n);
// console.log(BigInt(12341234));

// const bigInt = 9459645687456934993468934569n;
// const num = 4;
// console.log(bigInt * BigInt(num));

// console.log(20n == 20);
// console.log(20n === 20);

// // Dates and Times
// const now = new Date();
// console.log(now);

// console.log(new Date('Dec 10 1992'));
// console.log(new Date(2022, 5, 28, 14, 30, 5));

// // Uses your timezone
// console.log(new Date(0));

// const future = new Date(2033, 4, 1, 14, 14, 14);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// // Day of week
// console.log(future.getDay());
// // Day of month
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toUTCString());
