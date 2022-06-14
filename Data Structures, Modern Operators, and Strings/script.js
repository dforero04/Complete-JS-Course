'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address,
    time = '12:00',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`
    );
  },
  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(...otherIngs);
  },
};

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
// // Used to build new arrays or pass multiple values into a function
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
