"use strict";

//Selecting html elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = "0";
score1El.textContent = "0";

//Hide dice on start
const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

const rollBtn = document.querySelector(".btn--roll");
rollBtn.addEventListener("click", function () {
    const numberPlayed = randomGenerator(1, 6);
    diceShower(numberPlayed);
    console.log(numberPlayed);
});

function randomGenerator(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
  
}

function diceShower(number) {
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${number}.png`;
}