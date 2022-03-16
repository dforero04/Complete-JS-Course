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

/* LESSON 40 - Basic Array Operations */
const friends = ["Daniel", "Trevon", "Rob"];
console.log(friends);
// Add item to the front of an array
friends.unshift("Brian");
console.log(friends);

// Remove item from the front of an array
friends.shift();
console.log(friends);
