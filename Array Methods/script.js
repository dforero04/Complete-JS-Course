'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Array methods practice
/////////////////////////////////////////////////
// If we want to create an object that contains the sum of all deposits and all withdrawals,
// we can use the reduce() method as such:
// In the case below, the accumulator is an object holding 2 sums
// Each iteration, we return the whole object
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.transactions)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(`Deposits: ${deposits}, Withdrawals: ${withdrawals}`);

// /////////////////////////////////////////////////
// // Array fill() and Array.from()
// // - these two methods can be used to initialize new arrays of a certain length
// // - Array.from() can be useful in getting elements from the UI and putting them into
// // an array
// /////////////////////////////////////////////////
// const arr = new Array(7);
// console.log(arr);
// arr.fill(2);
// console.log(arr);
// console.log('-----------OR------------');
// const arr2 = Array.from({ length: 7 }, () => 2);
// console.log(arr2);

// /////////////////////////////////////////////////
// // Array sort() method
// // - returns a new array that is sorted based on STRING values
// // - you can pass in a function on which to sort upon
// /////////////////////////////////////////////////
// const owners = ['Jonas', 'Daniel', 'Krisina', 'John'];
// console.log(owners.sort());

// console.log(movements.sort());

// When using the sort callback function, the order of a and b is as follows:
// [b, a]
// In other words, when looking at the movements array, a is 450 and b is 200.
// if a - b returns < 0, a is less than b (SWITCH TO [A, B])
// if a - b returns > 0, a is greater than b (KEEP AS [B, A])

// This is ascending order
// console.log(
//   movements.sort((a, b) => {
//     // console.log(`A: ${a} and B: ${b}`);
//     // console.log(a - b);
//     return a - b;
//   })
// );

// /////////////////////////////////////////////////
// // Array flat() method
// // - returns a new array that "flattens" a nested array
// // - you can also specify how many levels deep you need to flatten
// /////////////////////////////////////////////////
// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const deepNestedArray = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(nestedArray.flat());
// console.log(deepNestedArray.flat());
// console.log(deepNestedArray.flat(2));

// const accountTransactions = accounts.map(acc => acc.transactions);
// console.log(accountTransactions);
// const allTransactions = accountTransactions.flat();
// console.log(allTransactions);
// const overallBalance = allTransactions.reduce((acc, val) => acc + val, 0);
// console.log(overallBalance);

// /////////////////////////////////////////////////
// // Array flatMap() method
// // - returns a new array that "flattens" a nested array and performs an operation to each element
// // - you can only do ONE level of flattening
// /////////////////////////////////////////////////
// const overallBalanceFlatMap = accounts
//   .flatMap(acc => acc.transactions)
//   .reduce((acc, val) => acc + val, 0);
// console.log(overallBalanceFlatMap);

// /////////////////////////////////////////////////
// // Array every() method
// // - return boolean if all elements in array satisfy the condition
// /////////////////////////////////////////////////
// const allDeposits = account4.transactions.every(move => move > 0);
// console.log(allDeposits);

/////////////////////////////////////////////////
// Array some() method
// - return boolean if at least one element in array satisfies the condition
// - this differs from includes() because we can add a condition to this method
/////////////////////////////////////////////////
// const anyDeposits = movements.some(move => move > 0);
// console.log(anyDeposits);

/////////////////////////////////////////////////
// Array find() method
// - return first element in array that satisfies the callback fn
/////////////////////////////////////////////////
// const firstWithdrawal = movements.find(move => move < 0);
// console.log(firstWithdrawal);

/////////////////////////////////////////////////
// Array.map()
// - Returns new array containing results of applying an operation on all original
// array elements
/////////////////////////////////////////////////
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(value => value * euroToUsd);
// console.log(movementsUSD);

// const movementsDesc = movementsUSD.map(
//   (value, index) =>
//     `Transaction ${index + 1}: You ${
//       value > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(value)}`
// );
// console.log(movementsDesc);

/////////////////////////////////////////////////
// Array.filter()
// - Returns new array containing the array elements that passed a specified test condition
/////////////////////////////////////////////////
// const deposits = movements.filter(value => value > 0);
// console.log(deposits);
// const withdrawals = movements.filter(value => value < 0);
// console.log(withdrawals);

/////////////////////////////////////////////////
// Array.reduce()
// - "reduces" all array elements down to one single value
// - arguments: callback fn, starting value
/////////////////////////////////////////////////
// const totalBalance = movements.reduce((acc, value, index) => {
//   console.log(`Iteration ${index}: ${acc}`);
//   return acc + value;
// }, 0);
// console.log(totalBalance);

// // It can be used to find the max value of an array
// const maxTransaction = movements.reduce((max, value) => {
//   return max > value ? max : value;
// }, movements[0]);
// console.log(maxTransaction);

/////////////////////////////////////////////////
// Map and Set forEach()
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Array method forEach()
/////////////////////////////////////////////////
// console.log('---------------for-of----------------');
// for (let [index, value] of movements.entries()) {
//   if (value > 0) {
//     console.log(`Transaction ${index + 1}: You deposited ${value}`);
//   } else {
//     console.log(`Transaction ${index + 1}: You withdrew ${Math.abs(value)}`);
//   }
// }

// // In the callback fn of forEach, you can pass in the current value,
// // the current index, and the whole array
// // *** YOU CANNOT BREAK OUT OF A forEach() LOOP ***
// // ** You must traverse the whole array **
// console.log('---------------forEach()----------------');
// movements.forEach(function (value, index, array) {
//   if (value > 0) {
//     console.log(`Transaction ${index + 1}: You deposited ${value}`);
//   } else {
//     console.log(`Transaction ${index + 1}: You withdrew ${Math.abs(value)}`);
//   }
// });

/////////////////////////////////////////////////
// Array method at()
/////////////////////////////////////////////////
// let test = ['a', 'b', 'c', 'd', 'e'];
// console.log(test[0]);
// console.log(test.at(0));

// // Get the last element WITHOUT knowing length
// console.log(test[test.length - 1]);
// console.log(test.at(-1));

/////////////////////////////////////////////////
// Coding Challenge #1
/////////////////////////////////////////////////
/* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] */

// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const updatedDogsJulia = dogsJulia.slice(1, -2);
//   const combinedDogs = updatedDogsJulia.concat(dogsKate);
//   combinedDogs.forEach(function (value, index) {
//     console.log(
//       `Dog number ${index + 1} is ${
//         value >= 3 ? 'an adult' : 'a puppy'
//       }, and is ${value} years old.`
//     );
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// dogsJulia = [9, 16, 6, 8, 3];
// dogsKate = [10, 5, 6, 1, 4];
// checkDogs(dogsJulia, dogsKate);

/////////////////////////////////////////////////
// Coding Challenge #2
/////////////////////////////////////////////////
/* Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const atLeast18 = humanAges.filter(age => age >= 18);
//   return atLeast18.reduce((sum, val) => sum + val, 0) / atLeast18.length;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////////////////////////////////////////////
// Coding Challenge #4
/////////////////////////////////////////////////
/* Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks: */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
dogs.map(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little.
const result = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    result.curFood > result.recommendedFood ? 'much' : 'little'
  } `
);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (lists, dog) => {
    dog.curFood > dog.recommendedFood
      ? lists.ownersEatTooMuch.push(...dog.owners)
      : lists.ownersEatTooLittle.push(...dog.owners);
    return lists;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
const checkEatingOkay = dog =>
  dog.curFood <= dog.recommendedFood * 1.1 &&
  dog.curFood >= dog.recommendedFood * 0.9;

console.log(dogs.some(checkEatingOkay));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
//  array's objects)
const dogsCopySorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopySorted);
