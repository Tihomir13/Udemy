"use strict";

//Selecting Elemends
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`); //2-ri nachin za izkarvane na score
const diceEl = document.querySelector(`.dice`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);

}
//Rolling Dice functionallity

btnRoll.addEventListener(`click`, function () {
  if (playing === true) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {

      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing === true) {
    console.log(btnHold);
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      diceEl.classList.add(`hidden`);
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
      document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    }
    else
      switchPlayer();
  }
});

btnNew.addEventListener(`click`, function () {
  playing = true;
  diceEl.classList.remove(`hidden`);

  document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
  activePlayer = 0
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);

  scores[0] = 0;
  scores[1] = 0;

  document.getElementById(`score--${0}`).textContent = 0;
  document.getElementById(`score--${1}`).textContent = 0;

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer + 1}`).textContent = 0;
  currentScore = 0;
});
