'use strict';

/////////////////////////////////////////////////
// Selecting Elements
/////////////////////////////////////////////////
// const header = document.querySelector('.header');

// returns a NodeList
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// returns HTMLCollection
// - this return type is a "live" collection
// - immediately updates when DOM is updates
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

/////////////////////////////////////////////////
// Creating and Inserting Elements
/////////////////////////////////////////////////

// Returns a DOM Element
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// you are able to add HTML elements using .innerHTML
// message.innerHTML =
// 'We use cookies for improved analytics.<button class="btn btn--close-cookie">Got it!</button>';

// - Prepend adds as first child to parents element
// header.prepend(message);
// - Append adds as last child to parents
// - This element will only appear once
// header.append(message);
// - This is how you place in multiple places
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

/////////////////////////////////////////////////
// Delete Elements
/////////////////////////////////////////////////
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
// message.remove();
// });

/////////////////////////////////////////////////
// Styling Elements
/////////////////////////////////////////////////

// This way only changes inline styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '106%';

// getComputedStyle will get all styles on an element
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

// This is how you change custom style properties in the CSS file
// document.documentElement.style.setProperty('--color-primary', 'blue');

/////////////////////////////////////////////////
// Attributes
/////////////////////////////////////////////////

// You are only able to read standard element attributes, not custom ones
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // For non-standard attributes
// console.log(logo.getAttribute('designer'));

// // Setting attributes
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// logo.setAttribute('company', 'Bankist');

// Data Attributes
// These are custom attributes within the dataset object
// console.log(logo.dataset.versionNumber);

/////////////////////////////////////////////////
// Smooth Scrolling
/////////////////////////////////////////////////
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // Returns coords based on the element
//   const s1coords = section1.getBoundingClientRect();

//   // Shows the current scroll position
//   console.log(window.scrollX);
//   console.log(window.scrollY);

//   // This is an old way to do it by calculating the appropriate value
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // More modern way to do it
//   section1.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

/////////////////////////////////////////////////
// Types of Events and Event Handlers
// - all events and info can be found here
// https://developer.mozilla.org/en-US/docs/Web/Events
/////////////////////////////////////////////////

// const h1 = document.querySelector('h1');
// // AddEventListener is mainly used because you can add multiple event listeners to the same event
// // Also, you can remove an event listener in case you don't need it anymore

// const alertH1 = function (e) {
//   alert('addEventListener: You are reading the heading!');

//   h1.removeEventListener('mouseenter', alertH1);
// };
// // -'mouseenter' is triggered when the mouse enters the elements area
// h1.addEventListener('mouseenter', alertH1);

/////////////////////////////////////////////////
// Event Propogation: Bubbling and Capturing
// - Event Propogation goes through 3 "phases"
//  -- Capturing Phase - the event travels down DOM tree to target element
//  -- Target Phase - the event reaches its target and performs the callback function
//  -- Bubbling Phase - go back up the DOM tree to the root element (document)
// - This is important to know because it is as if the event happened in all of
//  the parent elements as well
/////////////////////////////////////////////////

// - This example shows that the background color of all parent nodes change when
// the lowest link is clicked
// - Also, when each level is clicked individually, the e.target shows which
// specific element the event was called on, while the e.currentTarget shows
// which element the current event handler is attached (which is basically the this keyword).

// // Example
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // addEventListener only gets events from the bubbling phase
// //  -- However, you can add a 3rd parameter (boolean) to tell it to work during the capturing phase
// //  -- Capturing is rarely used in modern development
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link:', e.target);
//   console.log('Link:', e.currentTarget);

//   // Stop propogation
//   // This stops propogation at the current event level
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container:', e.target);
//   console.log('Container:', e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav:', e.target);
//     console.log('Nav:', e.currentTarget);
//   },
//   true
// );

/////////////////////////////////////////////////
// Event Delegation
/////////////////////////////////////////////////

// // This is the way you would implement an event handler on each link WITHOUT event delegation
// // This is adding individual event listeners to every single child element
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// // With Event Delegation, you can add an event listener to a common parent element
// // of all child elements.
// // Then determine what element originated the event.
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   // Matching strategy
//   // This is used to ignore clicks that happen outside of the desired elements
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

/////////////////////////////////////////////////
// DOM Traversing
/////////////////////////////////////////////////

// const h1 = document.querySelector('h1');

// // going down to child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // going up to parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //  -- closest is similar to querySelector, but finds parents
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // going sideways to access siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // access all siblings
// console.log(h1.parentElement.children);

//// ///////////////////////////////////////////////
//// Lifecycle DOM Events
//// ///////////////////////////////////////////////

// // DOMContentLoaded event
// // https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// // - This event is triggered once HTML is parsed and DOM tree is built
// // - In other words, it does not wait for stylesheets, images, or external content
// // - Since the <script> tag is at the bottom on the HTML file, all of the HTML
// // will already be parsed by the time the JS is being parsed
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree built');
//   console.log(e);
// });

// // load event
// // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// // - This event is triggered once everything on the page is loaded,
// // including all dependent resources such as stylesheets and images.
// window.addEventListener('load', function (e) {
//   console.log('page fully loaded');
//   console.log(e);
// });

// // beforeunload event
// // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
// // - This event is triggered when the window, document, and resources are about to be unloaded.
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   // prompts user if they want to leave the page
//   e.returnValue = '';
// });

/////////////////////////////////////////////////
// Efficient Script Loading: defer and async loading
/////////////////////////////////////////////////
// WATCH VIDEO FOR BEST, VISUAL EXPLANATION

/////////////////////////////////////////////////
// FOR MORE ADVANCED DOM FEATURES AND EVENTS, LOOK AT CODE FOR
// BANKIST HOMEPAGE
/////////////////////////////////////////////////
