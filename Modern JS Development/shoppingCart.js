// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// Named exports
export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} was added to cart.`);
};

const totalPrice = 234;
const totalQty = 12;

export { totalPrice, totalQty as tq };
