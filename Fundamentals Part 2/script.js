/* LESSON 10 - Values and Variables
let country = "USA";
let continent = "NA";
let population = "332.4 million";

console.log(country);
console.log(continent);
console.log(population);
*/

/* LESSON 12 - Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Daniel");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Returns object, which is a bug
console.log(typeof null);
*/

/* LESSON 14 - Basic Operators
console.log(2 ** 3);
// 2 ** 3 means 2 to the power of 3
*/

/* CODING CHALLENGE #1
const markMass = 78;
// const markMass = 95;
const markHeight = 1.69;
// const markHeight = 1.88;
const johnMass = 92;
// const johnMass = 85;
const johnHeight = 1.95;
// const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markBmi);
console.log(johnBmi);
console.log(markHigherBMI);
*/

/* LESSON 17 - Strings and Template Literals

const firstName = "Daniel";
const job = "programmer";
const birthYear = 1992;
const currentYear = 2022;

const daniel =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(daniel);

// Template Literal - must use back tick
const danielNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(danielNew);
*/

/* CODING CHALLENGE #2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`);
}
*/

/* LESSON 21 - Truthy and Falsy Values
// 5 Falsy values: 0, '', undefined, null, NaN
const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/* CODING CHALLENGE #3 */
// Data 1
// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// if (avgDolphins === avgKoalas)
//   console.log(`TIE! (${avgDolphins} to ${avgKoalas})`);
// else if (avgDolphins > avgKoalas)
//   console.log(`Dolphins Win! (${avgDolphins} to ${avgKoalas})`);
// else console.log(`Koalas Win! (${avgKoalas} to ${avgDolphins})`);

// Data Bonus 1
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

// if (avgDolphins === avgKoalas)
//   console.log(`TIE! (${avgDolphins} to ${avgKoalas})`);
// else if (avgDolphins > avgKoalas && avgDolphins >= 100)
//   console.log(`Dolphins Win! (${avgDolphins} to ${avgKoalas})`);
// else if (avgKoalas > avgDolphins && avgKoalas >= 100)
//   console.log(`Koalas Win! (${avgKoalas} to ${avgDolphins})`);
// else console.log(`No winners!`);

// Data Bonus 2
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;

// if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100)
//   console.log(`TIE! (${avgDolphins} to ${avgKoalas})`);
// else if (avgDolphins > avgKoalas && avgDolphins >= 100)
//   console.log(`Dolphins Win! (${avgDolphins} to ${avgKoalas})`);
// else if (avgKoalas > avgDolphins && avgKoalas >= 100)
//   console.log(`Koalas Win! (${avgKoalas} to ${avgDolphins})`);
// else console.log(`No winners!`);

/* CODING CHALLENGE #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }.`
);
*/
