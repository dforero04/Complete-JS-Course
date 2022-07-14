'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////
// AJAX
// - Asynchronous JavaScript And XML: Allows user to communicate with remote
// web servers in an asynchronous way.
/////////////////////////////////////////////////

// // Old School way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const renderCountryCard = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${+data.population} people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// // Example of Callback HELL!!
// const getCountryAndNeighborData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   // First callback
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountryCard(data);

//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();
//     // Second callback (within first callback)
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountryCard(data2, 'neighbor');
//     });
//   });
// };

// getCountryAndNeighborData('israel');

/////////////////////////////////////////////////
// Promises
// - An object that is used as a placeholder for the future result of an async operation
// - AKA: Container for a future value
// - Pro: no longer need to rely on events and callbacks passed into async functions
// to handle async results
// - AKA: Instead of nesting callbacks, we can chain promises for a sequence of async operations
// - Promise Lifecycle
//  -- Pending: Before the future value is available
//  -- Settled: Async task has finished
//      -- Fulfilled: Success (value is available)
//      -- Rejected: Failed (error)
/////////////////////////////////////////////////

// const request = fetch('https://restcountries.com/v2/name/colombia');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountryCard(data[0]);
//     });
// };

// const renderError = function (message) {
//   countriesContainer.insertAdjacentText('beforeend', message);
// };

// const getJSON = function (url, error = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${error} (${response.status})`);
//     return response.json();
//   });
// };

// // Simpler
// const getCountryData = function (country) {
// *** Put duplicate code into its own function ***
// fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(
//     response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     }
//     // Second argument of then is a rejection handler function
//     // err => alert(err)
//   )
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found!')
//     .then(data => {
//       renderCountryCard(data[0]);
//       if (!('borders' in data[0]))
//         throw new Error('No neighbor country found!');
//       const neighbor = data[0].borders[0];

//       // ALWAYS RETURN THE PROMISE, THEN HANDLE WITHIN THE CHAIN
//       // return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         'No neighbor countries found!'
//       );
//     })
//     .then(data => renderCountryCard(data, 'neighbor'))
//     // catch() catches any error in the chain
//     // throwing a new Error will pass it down to this catch()
//     .catch(err => {
//       renderError(`Something went wrong. ${err.message}. Try Again!`);
//     })
//     // finally() always happens, no matter the promise status
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('colombia');
// getCountryData('luxembourg');

/////////////////////////////////////////////////
// Handling Rejected Promises
/////////////////////////////////////////////////

// // This example is when there are no neighbor countries
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// // This example is when there is no country found
// btn.addEventListener('click', function () {
//   getCountryData('asdf');
// });

// /////////////////////////////////////////////////
// // Coding Challenge #1
// /////////////////////////////////////////////////
// // In this challenge you will build a function 'whereAmI' which renders a country
// // only based on GPS coordinates. For that, you will use a second API to geocode
// // coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// // Your tasks:
// // PART 1
// // 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// // and a longitude value ('lng') (these are GPS coordinates, examples are in test
// // data below).
// // 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// // to convert coordinates to a meaningful location, like a city and country name.
// // Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// // will be done to a URL with this format:
// // https://geocode.xyz/52.508,13.381?geoit=json.
// // 3. Once you have the data, take a look at it in the console to see all the attributes
// // that you received about the provided location. Then, using this data, log a
// // message like this to the console: “You are in Berlin, Germany”
// // 4. Chain a .catch method to the end of the promise chain and log errors to the
// // console
// // 5. This API allows you to make only 3 requests per second. If you reload fast, you
// // will get this error with code 403. This is an error with the request. Remember,
// // fetch() does not reject the promise in this case. So create an error to reject
// // the promise yourself, with a meaningful error message
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Something went wrong ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//     })
//     .catch(err => console.log(`${err.message} ⛔`));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381); // Berlin, Germany
// });
// // whereAmI(19.037, 72.873); // Sion Koliwada, India
// // whereAmI(-33.933, 18.474); // Cape Town, South Africa

// // Lesson 257: Asynchronous Behind the Scenes: The Event Loop
// // EXAMPLE

// // Priority:
// //  1. Top Level Code (outside of any callbacks)
// //  2. Microtasks Queue (callbacks from Promises)
// //  3. Callback Queue (callbacks from timer/event listeners/etc)

// // Result:
// // 'Test start'
// // 'Test end'
// // 'Resolved promise 1'
// // '0 sec timer'
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0); // These two tasks were completed at the same time
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// // This example shows  that the setTimeout() is still dependent on the microtask queue, which holds this callback
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// /////////////////////////////////////////////////
// //Building a Promise
// /////////////////////////////////////////////////
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening.');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You LOSE!'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

// Promisifying setTimeout()
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited 1 second'));

// /////////////////////////////////////////////////
// // Promisifying the Geolocation API
// /////////////////////////////////////////////////
// // Callback-based API
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// // Promise-based API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// /////////////////////////////////////////////////
// // Coding Challenge #2
// /////////////////////////////////////////////////
// const imageSection = document.querySelector('.images');
// let img;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found!'));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// createImage('img/img-1.jpg')
//   .then(img => {
//     imageSection.append(img);
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     imageSection.append(img);
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then(img => {
//     imageSection.append(img);
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//   })
//   .catch(err => console.error('Failed to load image!'));

/////////////////////////////////////////////////
// ASYNC/AWAIT
/////////////////////////////////////////////////
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // AN ASYNC FUNCTION ALWAYS RETURNS A PROMISE
// const whereAmI = async function () {
//   try {
//     // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
//     // This new syntax is exactly the same as the above code
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     const geoFetch = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=921887219952458568891x76847`
//     );
//     if (!geoFetch.ok) throw new Error('Problem getting information!');

//     const result = await geoFetch.json();
//     const response = await fetch(
//       `https://restcountries.com/v2/name/${result.country}`
//     );
//     if (!response.ok) throw new Error('Problem getting information!');

//     const data = await response.json();
//     renderCountryCard(data[0]);
//     countriesContainer.style.opacity = 1;
//     return `You are in ${result.city}, ${result.statename}`;
//   } catch (err) {
//     console.error(err);
//     // Reject promise returned from async function
//     throw err;
//   }
// };

// /////////////////////////////////////////////////
// // Error Handling with try...catch
// /////////////////////////////////////////////////
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('This is printed FIRST!');

/////////////////////////////////////////////////
// Returning values from async functions
/////////////////////////////////////////////////
// console.log('1: Will get location');
// whereAmI()
//   .then(response => console.log(`2: ${response}`))
//   .catch(err => console.error(`2: ${err}`))
//   .finally(() => console.log('3: Finished getting location'));

// /////////////////////////////////////////////////
// // Running Promises in Parallel
// /////////////////////////////////////////////////
// const get3countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     // If one promise rejects, then the whole Promise.all() rejects!
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3countries('brazil', 'france', 'vietnam');

/////////////////////////////////////////////////
// Promise Combinators
/////////////////////////////////////////////////

// Promise.race()
// - Receives an array of Promises, then settles when the first Promise settles
// - The value of the settled Promise is the result of the Promise
// (async function () {
//   const res = await Promise.race([
//     getJSON('https://restcountries.com/v2/name/italy'),
//     getJSON('https://restcountries.com/v2/name/germany'),
//     getJSON('https://restcountries.com/v2/name/greece'),
//   ]);
//   console.log(res[0]);
// })();

// // - Promise.race() can be very useful to help with very long fetches or slow internet connections
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };
// Promise.race([
//   getJSON('https://restcountries.com/v2/name/greece'),
//   timeout(0.1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled()
// // - Receives an array of Promises, and returns an array of all results, regardless of resolved or rejected
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Hello World'),
//   Promise.reject('Error!'),
//   Promise.reject('NOO!'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // Promise.any() (ES2021)
// // -Receives an array of Promises, and returns the first resolved Promise and ignores rejected Promises
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.resolve('Hello World'),
//   Promise.reject('Error!'),
//   Promise.reject('NOO!'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
