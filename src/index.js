"use strict";

//Selecting html elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = "0";
score1El.textContent = "0";

//Hide dice on start
const dice = document.querySelector(".dice");
dice.classList.add("hidden");
