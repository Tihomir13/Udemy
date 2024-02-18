"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //else document.querySelector(".highscore").textContent =
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("📈 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else displayMessage("You lost the game");
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else displayMessage("You lost the game");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
});
