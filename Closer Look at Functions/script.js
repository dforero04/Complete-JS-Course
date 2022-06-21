'use strict';
///////////////////////////////////////////////////////
// Closures
// A closure gives a function access to all the variables of its parent function, even after that
// parent function has returned. The function keeps a reference to its outer scope, which preserves
// the scope chain throughout time.
///////////////////////////////////////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// // More closure examples

// // Global scope
// let f;

// const g = function () {
//   const a = 23;
//   // Function scope
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// // Even after g finishes execution, f can still access the variable a
// g();
// f();

// // Re-assigning f function
// h();
// f();

// // Example 2
// const boardPassengers = function (num, waitTime) {
//   const perGroup = num / 3;

//   // the callback is still able to use the parent function, even after the timeout
//   setTimeout(function () {
//     console.log(`We are now boarding all ${num} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, waitTime * 1000);

//   console.log(`Will start boarding in ${waitTime} seconds.`);
// };

// boardPassengers(180, 3);

///////////////////////////////////////////////////////
// // Immediately Invoked Function Expression (IIFE)
// // A function that is only called and ran once.
// // It can be helpful to create "private" variables
///////////////////////////////////////////////////////

// (function () {
//   console.log('This will never be called again');
// })();

// (() => console.log('This will also never be called again'))();

// // Default Parameters
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199.99) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('DL123');
// createBooking('DL123', 3, 399.99);
// createBooking('DL123', undefined, 45);

//////////////////////////////////////////
// First-Class vs Higher-Order Functions
//////////////////////////////////////////
// First-class functions are "simple" values
// Examples
// - Store a function in a variable
//  -- const add = function(a, b) { return a + b; }
// - Pass functions as arguments to OTHER functions
//  -- btn.addEventListener('click', showModal);
// - Return functions FROM functions
// - Call methods on functions
//  -- counter.inc.BIND(someOtherObject);
//////////////////////////////////////////
// Higher-order functions receive another function as an argument or
// returns a new function, or both
//////////////////////////////////////////

// const oneWord = function (string) {
//   return string.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (string) {
//   const [first, ...others] = string.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order Function
// const transformer = function (string, fn) {
//   console.log(`Original string: ${string}`);
//   console.log(`Transformed string: ${fn(string)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// console.log('-----------------------------');
// transformer('Javascript is the best!', oneWord);

// // Function returning a function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // Arrow function syntax
// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Daniel');
// greeterHey('Krisina');
// greet('Bye')('Daniel');

//////////////////////////////////////////
// The call and apply methods
//////////////////////////////////////////

// const delta = {
//   airline: 'Delta',
//   iataCode: 'DL',
//   bookings: [],
//   book(flightNum, passName) {
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passName });
//     console.log(
//       `${passName} booked a seat on ${this.airline}: Flight ${this.iataCode}${flightNum}`
//     );
//   },
// };

// delta.book(123, 'Daniel Forero');
// delta.book(123, 'Krisina Forero');
// console.log(delta.bookings);

// const american = {
//   airline: 'American Airlines',
//   iataCode: 'AA',
//   bookings: [],
// };

// const book = delta.book;

// // the call() method allows you to include an appropriate this keyword
// // In other words, it allows you to manually manipulate the this keyword
// book.call(american, '234', 'Brian Forero');
// book.call(delta, 123, 'Kalina Forero');

// // the apply() method allows you to pass in an array of data
// // However, this is not used very much anymore since you can use the spread operator
// const flightData = [564, 'Tyler Durden'];
// book.apply(delta, flightData);

// book.call(delta, ...flightData);

// // Bind method
// // You are able to create specific functions based on specific objects
// const bookAA = book.bind(american);
// bookAA(345, 'Jason Bourne');

// const bookDL123 = book.bind(delta, 123);
// bookDL123('Harry Potter');

// // With Event Listeners
// delta.planes = 300;
// delta.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // In order to add an object to an event handler, you must use bind
// document
//   .querySelector('.buy')
//   .addEventListener('click', delta.buyPlane.bind(delta));

// // // Partial Application
// // // You are able to preset some values

// // // Example using bind
// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addStTax = addTax.bind(null, 0.25);
// // console.log(addStTax(100));

// // Example using a function returning a function
// const addTax = function (rate) {
//   return function (value) {
//     console.log(
//       `With a ${rate} tax rate, the total is ${value + value * rate}`
//     );
//   };
// };
// const addStTax = addTax(0.25);
// addStTax(1000);

/* Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let test = false,
//       val;
//     while (!test) {
//       val = Number(
//         prompt(
//           `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//         )
//       );

//       if (val < 0 || val > 3) alert('You must choose between 0 - 3!');
//       else {
//         test = true;
//         this.answers[val]++;
//       }
//     }
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') console.log(this.answers);
//     else if (type === 'string')
//       console.log(`Poll results are ${this.answers.join(', ')}.`);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// The inner function is a closure, and therefore you are able to continuously
// change the color of the 'h1' element
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color === 'red'
      ? (header.style.color = 'blue')
      : (header.style.color = 'red');
  });
})();
