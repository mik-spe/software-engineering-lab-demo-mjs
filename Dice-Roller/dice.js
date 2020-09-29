// This file contains the function that rolls the six-sided dice.

function rollDice() 
{
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
}