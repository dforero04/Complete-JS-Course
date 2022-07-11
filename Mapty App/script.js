'use strict';
// import leaflet from 'leaflet';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputHeartrate = document.querySelector('.form__input--heartrate');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    // this.workouts = workouts;
    // this.map = map;
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not access you current location!');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    this.#map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    this._newWorkout.bind();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputHeartrate.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const checkInputValidity = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositiveNums = (...inputs) => inputs.every(inp => inp > 0);

    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type === 'running') {
      const heartrate = Number(inputHeartrate.value);
      if (
        !checkInputValidity(distance, duration, heartrate) ||
        !allPositiveNums(distance, duration, heartrate)
      )
        return alert('Inputs must be positive numbers!');

      workout = new Running([lat, lng], distance, duration, heartrate);
    }

    if (type === 'cycling') {
      const elevationGain = Number(inputElevation.value);
      if (
        !checkInputValidity(distance, duration, elevationGain) ||
        !allPositiveNums(distance, duration)
      )
        return alert('Inputs must be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }

    this.#workouts.push(workout);
    console.log(workout, this.#workouts);

    // Hide form and clear input fields
    inputHeartrate.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

class Workout {
  id = (Date.now() + '').slice(-10);
  date = new Date();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, heartrate) {
    super(coords, distance, duration);
    this.heartrate = heartrate;
    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const app = new App();
