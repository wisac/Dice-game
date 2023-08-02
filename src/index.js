"use strict";

//Selecting html elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = "0";
score1El.textContent = "0";
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//total tracker for current
let currentScore = 0;

//Hide dice on start
const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

//function that generates random numbers within a range
function randomGenerator(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));

}

//function that shows specific dies
function diceShower(number) {
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${number}.png`;
}

//rolling roll button click and handle event
const rollBtn = document.querySelector(".btn--roll");
rollBtn.addEventListener("click", function () {
    //generate random number from 1 to 6
    const numberRolled = randomGenerator(1, 6);

    //display dice corresponding to number on screen
    diceShower(numberRolled);
    console.log(numberRolled);

    //add dice to score
    if (numberRolled != 1) {
        //add number rolled to current score
        currentScore += numberRolled;
        current0El.textContent = currentScore;
    }
    else {
        current0El.textContent = "0";
        //switch user
    }
    
});

