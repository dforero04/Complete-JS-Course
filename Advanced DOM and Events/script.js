'use strict';

/////////////////////////////////////////////////
// Selecting Elements
/////////////////////////////////////////////////
const header = document.querySelector('.header');

// returns a NodeList
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// returns HTMLCollection
// - this return type is a "live" collection
// - immediately updates when DOM is updates
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

/////////////////////////////////////////////////
// Creating and Inserting Elements
/////////////////////////////////////////////////

// Returns a DOM Element
const message = document.createElement('div');
message.classList.add('cookie-message');
// you are able to add HTML elements using .innerHTML
message.innerHTML =
  'We use cookies for improved analytics.<button class="btn btn--close-cookie">Got it!</button>';

// - Prepend adds as first child to parents element
// header.prepend(message);
// - Append adds as last child to parents
// - This element will only appear once
header.append(message);
// - This is how you place in multiple places
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

/////////////////////////////////////////////////
// Delete Elements
/////////////////////////////////////////////////
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

/////////////////////////////////////////////////
// Styling Elements
/////////////////////////////////////////////////

// This way only changes inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '106%';

// getComputedStyle will get all styles on an element
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

// This is how you change custom style properties in the CSS file
// document.documentElement.style.setProperty('--color-primary', 'blue');

/////////////////////////////////////////////////
// Attributes
/////////////////////////////////////////////////

// You are only able to read standard element attributes, not custom ones
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// For non-standard attributes
console.log(logo.getAttribute('designer'));

// Setting attributes
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
logo.setAttribute('company', 'Bankist');

// Data Attributes
// These are custom attributes within the dataset object
console.log(logo.dataset.versionNumber);
