'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountryCard = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

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

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

// Simpler
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => response.json()
      // Second argument of then is a rejection handler function
      // err => alert(err)
    )
    .then(data => {
      renderCountryCard(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) return;

      // ALWAYS RETURN THE PROMISE, THEN HANDLE WITHIN THE CHAIN
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountryCard(data, 'neighbor'))
    // catch() catches any error in the chain
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong. ${err.message}. Try Again!`);
    })
    // finally() always happens, no matter the promise status
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('colombia');
// getCountryData('luxembourg');

/////////////////////////////////////////////////
// Handling Rejected Promises
/////////////////////////////////////////////////
btn.addEventListener('click', function () {
  getCountryData('luxembourg');
});
