// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('chicken', 3);
// console.log(price, tq);
console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 6);
