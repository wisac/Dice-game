"use strict";

//Selecting html elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = "0";
score1El.textContent = "0";
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const newBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

let currentPlayerScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let playingGame = true;

//Hide dice on start
diceEl.classList.add("hidden");

//function that generates random numbers within a range
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//function that shows specific dies
function diceShower(number) {
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${number}.png`;
}

function switchPlayer() {
    currentPlayerScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = "0";
    // disable active player
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

    activePlayer = activePlayer === 0 ? 1 : 0; // change active player

    //set new active player
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
}


//ROLLING DICE 
rollBtn.addEventListener("click", function () {
    if (playingGame) {
        //generate random number from 1 to 6
        const numberRolled = randomGenerator(1, 6);

        //display dice corresponding to number on screen
        diceShower(numberRolled);
        console.log(numberRolled);

        //add dice to score
        if (numberRolled != 1) {
            //add number rolled to current score
            currentPlayerScore += numberRolled;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentPlayerScore;
        }
        else {
            switchPlayer();
        }
    }
});



//HOLDING SCORE
holdBtn.addEventListener("click", function () {
    if (playingGame) {
        //display active player score on main score
        totalScore[activePlayer] += currentPlayerScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

        //if score >= 100 active player wins
        if (totalScore[activePlayer] >= 100) {
            //add winner ui design
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            diceEl.classList.add("hidden");

            //add winner label to player
            document.querySelectorAll(".name")[activePlayer].textContent = "WINNER!"
            playingGame = false;
        }
        else {
            //switch user
            switchPlayer();
        }
    }
});



//RESET GAME
newBtn.addEventListener("click", function () {
    //reset total score
    totalScore[0] = 0;
    totalScore[1] = 0;

    //hide dice
    diceEl.classList.add("hidden");
    
    //remove winner class
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");

    //Remove WINNER label and reset player name
    document.querySelectorAll(".name")[activePlayer].textContent = `PLAYER ${activePlayer + 1}`;

    //reset all displayed score
    current0El.textContent = "0";
    current1El.textContent = "0";
    score0El.textContent = "0";
    score1El.textContent = "0";

    //switch player
    activePlayer = 1; // so that switchUser() will activate user 0 by changing inverting active user
    switchPlayer();

    //reset game state
    playingGame = true;

});