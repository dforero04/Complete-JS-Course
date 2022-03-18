/* LESSON 32 - Activating Strict Mode
"use strict"; // Helps prevent bugs and show more clear logs for debugging

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive!");

const interface = "Audio"; // Reserved word
const private = true; // Reserved word
*/

/* LESSON 33 - Functions
function fruitProcessor(numApples, numOranges) {
  return `Juice with ${numApples} apples and ${numOranges} oranges.`;
}
console.log(fruitProcessor(3, 2));
*/

/* LESSON 34 - Function Declaration vs Expression
// Function Declaration
const age1 = calcAge1(1992); // Can call function declaration before it has been declared
console.log(age1);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1992);
console.log(age2);
*/

/* LESSON 35 - Arrow Functions
// Function Expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1992);
console.log(age2);

// Arrow Function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);
*/

/* CODING CHALLENGE #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins * 2 <= avgKoalas)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else if (avgKoalas * 2 <= avgDolphins)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else console.log("No one wins!");
}

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
*/

/* LESSON 40 - Basic Array Operations
const friends = ["Daniel", "Trevon", "Rob"];
console.log(friends);
// Add item to the front of an array
friends.unshift("Brian");
console.log(friends);

// Remove item from the front of an array
friends.shift();
console.log(friends);
*/

/* CODING CHALLENGE #2
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
*/

/* LESSON 44 - Object Methods
const daniel = {
  firstName: "Daniel",
  lastName: "Forero",
  birthYear: 1992,
  job: "programmer",
  friends: ["Patrick", "Dana", "Kyle"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(daniel.calcAge(daniel.birthYear));
// console.log(daniel["calcAge"](daniel.birthYear));
console.log(daniel.age);
*/

/* CODING CHALLENGE #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})!`
  );
} else {
  console.log(
    `Mark's BMI (${mark.bmi}) is higher than Johns's BMI (${john.bmi})!`
  );
}
*/

/* LESSON 47 - Continue and Break on FOR Loops
const daniel = [
  "Daniel",
  "Forero",
  1992,
  "programmer",
  ["Patrick", "Dana", "Kyle"],
];

console.log("---ONLY STRINGS---");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] !== "string") continue;

  console.log(daniel[i], typeof daniel[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] === "number") break;

  console.log(daniel[i], typeof daniel[i]);
}
*/

/* CODING CHALLENGE #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(totals);
*/
