'use strict';

/////////////////////////////////////////////////
// Pre- and Post-fix ++ operator
// - Prefix: increments a variable, then returns the variable
// - Postfix: returns the variable, then increments the variable
let x = 3;
const y = x++;
// x = 4, y = 3
console.log(x, y);

let a = 3;
const b = ++a;
// a = 4, b = 4
console.log(a, b);

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Make this look like this
// //   ⛔ Delayed Departure from FAO to TXL (11h25)
// //                 Arrival from BRU to FAO (11h45)
// //   ⛔ Delayed Departure from HEL to FAO (12h05)
// //               Departure from FAO to LIS (12h30)

// const wordArr = flights.split('+');

// for (let word of wordArr) {
//   let [status, from, to, time] = word.split(';');
//   from = from.slice(0, 3).toUpperCase();
//   to = to.slice(0, 3).toUpperCase();
//   time.replaceAll(':', 'h');
//   console.log(
//     `${status.startsWith('_Delayed') ? '⛔' : ''} ${status.replaceAll(
//       '_',
//       ''
//     )} from ${from} to ${to} (${time})`.padStart(43)
//   );
// }

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 1,
//     address,
//     time = '12:00',
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`
//     );
//   },
//   orderPizza: function (mainIng, ...otherIngs) {
//     console.log(mainIng);
//     console.log(...otherIngs);
//   },
// };

//////////////////////////////////////////
// Which Data Structure to use?
// Data can come from 3 different sources
// - From program itself (data written directly in source code)
// - From UI (Input data or data written in DOM)
// - From external sources (data fetched from web API)
//
// If we have a simple list of data, use an ARRAY or SET
// - Array
//    -- Ordered list of values
//    -- Manipulate data
// - Set
//    -- Unique values
//    -- High performance is important
//    -- To remove duplicates from array
//
// If we need key/value pairs, use an OBJECT or MAP
// - Object
//    -- It is just a more traditional approach
//    -- Easier to write and access values with . and []
//    -- When you need to include functions
//    -- When working with JSON
// - Map
//    -- Better perfornmance
//    -- Keys can be ANY data types
//    -- Easy to iterate
//    -- Easy to compute size
//////////////////////////////////////////

// ///////////////////////////////////////
// // Maps - Iteration
// //////////////////////////////////////

// // Initialize a map.
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try Again!'],
// ]);

// // // Convert Object to map
// // const hoursMap = new Map(Object.entries(restaurant.openingHours));
// // console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your Answer?'));
// const answer = 3;
// console.log(question.get(question.get('correct') === Number(answer)));

// // Convert Map to Array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////
// Maps - Fundamentals
// Key, Value pairs
//////////////////////////////////////
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'USA');
// rest.set(2, 'Italy');
// rest
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//////////////////////////////////////
// Sets
// Unordered, non-indexed, unique-valued data structure
//////////////////////////////////////
// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add('Garlic Bread'));
// orderSet.delete('Pizza');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// // Make into an Array
// const staffArray = [...new Set(staff)];
// console.log(staffArray);

//////////////////////////////////////
// Looping through objects
//////////////////////////////////////

// // Object Property NAMES
// const props = Object.keys(restaurant);
// console.log(props);

// // Object Property VALUES
// const vals = Object.values(restaurant.openingHours);
// console.log(vals);

// // Entire Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////
// Optional Chaining
//////////////////////////////////////
// Used to prevent errors if a property does not exist. It will just return undefined.
// This can work with object properties, object methods, and arrays
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open =
//     restaurant.openingHours[day]?.open ?? 'no time, because we are closed.';
//   console.log(`On ${day}, we open at ${open}`);
// }

//////////////////////////////////////
// Enhanced Object Literals
//////////////////////////////////////
// In ES6, you are able to add an object to another object by just putting the object name
// in the new object.
// Also, you do not have to declare a method within an object now. You can write a method directly.
// Lastly, you can compute property names of an object.
// const characteristics = ['height', 'weight', 'hairColor'];
// const person = {
//   name: 'Daniel',
//   age: 29,
//   welcomeMessage(string) {
//     console.log(string);
//   },
//   [characteristics[0]]: '5\'9"',
//   [characteristics[1]]: '170 lbs',
//   [characteristics[2]]: 'black',
// };

// const family = {
//   name: 'Forero',
//   person,
// };
// console.log(family);
// console.log(person.welcomeMessage('Hello!'));

//////////////////////////////////////
// // For-Of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // If you need to get the indices
// for (const [index, value] of menu.entries()) {
//   console.log(`${index}: ${value}`);
// }

//////////////////////////////////////
// Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 10,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'James',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// Nullish assignment operator
// So, if guests in rest1 was 0, it would actually be set to 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// AND assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////
// Nullish Coalescing Operator ??
// Same as && and ||, but only considers null values (null and undefined)
// Does not consider 0 or ''
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

////////////////////////////////////////
// Logical Operators || and &&
// They can 1) Use ANY data type, 2) return ANY data type, and 3)short-circuit.
// For the AND operator, short-circuit is if the first parameter is a falsy value, it will immediately fail the logical operator. Returns last value if all truthy
// console.log('--------AND---------');
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'spinach', 'chicken');
// // For the OR operator, short-circuit is if the first parameter is a truthy value, it will immediately pass the logical operator. Returns first truthy value
// console.log('---------OR---------');
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //////////////////////////////////////
// // // Rest Pattern
// // // Used to combine values into an array and combine multiple arguments of a function
// // // ... is on the left side of the assignment operator
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 2, 7, 3);
// const arr = [23, 5, 7];
// add(...arr);

// restaurant.orderPizza(
//   'chicken',
//   'steak',
//   'pepperoni',
//   'black olives',
//   'sausage'
// );

//////////////////////////////////////
// // Spread Operator
// // Used to build/combine new arrays or pass multiple values into a function
// // ... is on the right side of the assignment operator
// const arr = [7, 8, 9];
// const newArr = [5, 6, ...arr];
// console.log(newArr);
// console.log(...newArr);

// // Builds a new array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Daniel';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// // Spread operator in a function
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {
//   ...restaurant,
//   founder: 'Vito Corlene',
//   foundedIn: '1923',
// };
// console.log(newRestaurant);

// const newRestaurantCopy = { ...restaurant };
// newRestaurantCopy.name = 'New Name';
// console.log(newRestaurantCopy.name);
// console.log(restaurant.name);

///////////////////////////////////////////////
// Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//
// Renaming variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '28 Fletcher Drive',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '375 Ridgewood Drive',
//   mainIndex: 0,
// });

///////////////////////////////////////////////
// Array Destructuring
// let [one, two] = restaurant.categories;
// console.log(one, two);
// const [first, , third] = restaurant.categories;
// console.log(first, third);

// How to switch variable values
// [one, two] = [two, one];
// console.log(one, two);

// Receive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

///////////////////////////////////////////////////////////
// CODING CHALLENGE #1
//
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data.
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playerNames) {
//     for (const player of playerNames) {
//       console.log(player);
//     }
//     console.log(`Total number of goals were: ${playerNames.length}`);
//   },
// };
// //1. Create one player array for each team (variables 'players1' and 'players2').
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutingo', 'Perisic'];
// console.log(players1Final);

// //5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski', 'Kimmich'.
// // Then, call the function again with players from game.scored
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
//////////////////////////////////////////////////////////////////////////////////

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
*/

/* 1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski") */
// const entries = Object.entries(game.scored);

// for (const [index, player] of entries)
//   console.log(`Goal ${Number(index) + 1}: ${player}`);

// /* 2. Use a loop to calculate the average odd and log it to the console */
// const gameOdds = Object.values(game.odds);
// let sum = 0;
// for (const odd of gameOdds) sum += odd;
// console.log('Average odd is: ' + sum / gameOdds.length);

// /* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names */
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// /* 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// } */
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

///////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
//////////////////////////////////////////////////////////////////////////////////

/* Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
GOOD LUCK 😀 */

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64
// // was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Compute and log the following string to the console: "An event happened, on
// // average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// //  4. Loop over 'gameEvents' and log each element to the console, marking
// //  whether it's in the first half or second half (after 45 min) of the game, like this:
// //  [FIRST HALF] 17:⚽ GOAL
// for (const [key, value] of gameEvents) {
//   console.log(
//     `${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
//   );
// }

/* Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed. Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const textArea = document.querySelector('textarea');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   const string = textArea.value;
//   const wordArr = string.toLowerCase().split('\n');
//   convertWords(wordArr);
// });

// const convertWords = function (words) {
//   for (let [index, word] of words.entries()) {
//     let [first, second] = word.trim().split('_');
//     const output = first + second.replace(second[0], second[0].toUpperCase());
//     console.log(`${output.padEnd(20)}${'👌'.repeat(index + 1)}`);
//   }
// };
