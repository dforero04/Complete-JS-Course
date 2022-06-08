'use strict';
let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    setMessage('⛔ No Number!');

    // When the guess is correct
  } else if (guess === answer) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    setMessage('🎉 CORRECT NUMBER!');
    document.querySelector('.number').textContent = answer;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is not correct
  } else if (guess !== answer) {
    score--;
    if (score <= 0) {
      setMessage('☹️ You Lose!');
      document.querySelector('.score').textContent = 0;
    } else {
      setMessage(guess > answer ? '📈 Too High' : '📉 Too Low');
      document.querySelector('.score').textContent = score;
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  setMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
