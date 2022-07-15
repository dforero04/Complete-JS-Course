// Importing module
// console.log('Importing module');

// Named Imports
// - Named imports need to be in curly braces
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('chicken', 3);
// console.log(price, tq);

// // Also Named Imports
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 6);
// console.log(ShoppingCart.totalPrice);

// Import Default
import { addToCart, cart } from './shoppingCart.js';
addToCart('eggs', 18);
addToCart('chicken', 5);
addToCart('bread', 2);
console.log(cart);

// // ** Important ES2022 Update: You can now use await in top-level code inside of a module **
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// // This will not return the data. It will return a promise
// const lastPost = getLastPost();
// console.log(lastPost);

// // Use of top-level await!
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// // Importing Modules wait for imported modules to finish resolving promises
// // Check blocking code in shoppingCart.js

// // Implementation of Module Pattern
// // - This was used before ES6 Modules were added to the language
// // - This still encapsulates private data and functionality, and expose a public API
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 234;
//   const totalQty = 123;
//   const addToCart = function (product, qty) {
//     cart.push({ product, qty });
//     console.log(`${qty} ${product} was added to cart.`);
//   };

//   return { addToCart, cart, totalPrice, totalQty };
// })();

// ShoppingCart2.addToCart('apples', 2);
// ShoppingCart2.addToCart('oranges', 3);
// console.log(ShoppingCart2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'chicken', quantity: 4 },
    { product: 'eggs', quantity: 18 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
