//Exporting module
// console.log('Exporting module');

// const shippingCost = 10;
export const cart = [];

// Named exports
export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} was added to cart.`);
};

// const totalPrice = 234;
// const totalQty = 12;

// // Named exports
// export { totalPrice, totalQty as tq };

// // Default Exports
// - Usually used to export one thing per module
// - Export value itself, not a variable
// export default function (product, qty) {
//   cart.push({ product, qty });
//   console.log(`${qty} ${product} was added to cart.`);
// }

// // Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');
