'use strict';

let activePlayer, currentScore, totalPlayerScore, gameActive;

const p0PlayerElement = document.querySelector('.player--0');
const p0ScoreElement = document.getElementById('score--0');
const p0CurScoreElement = document.getElementById('current--0');

const p1PlayerElement = document.querySelector('.player--1');
const p1ScoreElement = document.getElementById('score--1');
const p1CurScoreElement = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');

// Initialize game to starting conditions
const init = function () {
  activePlayer = 0;
  currentScore = 0;
  totalPlayerScore = 0;
  gameActive = true;

  p0ScoreElement.textContent = 0;
  p0CurScoreElement.textContent = 0;
  p1ScoreElement.textContent = 0;
  p1CurScoreElement.textContent = 0;

  p0PlayerElement.classList.remove('player--winner');
  p1PlayerElement.classList.remove('player--winner');
  p0PlayerElement.classList.add('player--active');
  p1PlayerElement.classList.remove('player--active');
  diceElement.classList.add('hidden');
};

init();

// Switch Player functionality
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  p0PlayerElement.classList.toggle('player--active');
  p1PlayerElement.classList.toggle('player--active');
};

// Roll dice functionality
rollDiceBtn.addEventListener('click', function () {
  if (gameActive) {
    const rollNum = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${rollNum}.png`;
    diceElement.classList.remove('hidden');

    if (rollNum !== 1) {
      currentScore += rollNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdScoreBtn.addEventListener('click', function () {
  if (gameActive) {
    totalPlayerScore =
      Number(document.getElementById(`score--${activePlayer}`).textContent) +
      Number(document.getElementById(`current--${activePlayer}`).textContent);
    document.getElementById(`score--${activePlayer}`).textContent =
      totalPlayerScore;

    if (totalPlayerScore >= 100) {
      gameActive = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);
