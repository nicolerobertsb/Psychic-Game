// PSEUDO CODE

//Create array with all letter choices available for the computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesLeftText = document.getElementById("guessesLeft-text")
var guessesSoFarText = document.getElementById("guessesSoFar-text")

//Set all scores to 0 or to starting #
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = [];
var userGuess = document.onkeyup;

//Create a variable that resets certain areas
function reset() {
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var confirmPsychic = confirm("Are you a Psychic?");
if (confirmPsychic) {
    alert("Try to guess what letter I'm thinking of!");
}
else {
    alert("Oh, so you basic.");
}

//Randomize the letter the computer chooses
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

//Run the game everytime the user presses a key
document.onkeyup = function (event) {

    // Determine which key is pressed by the user
    var userGuess = event.key;
    console.log(userGuess);
    guessesSoFar.push(userGuess);


    //Create if statement that sees if user & computer chose same key
    if (userGuess === computerGuess) {
        wins++;
        alert("YOU GUESSED RIGHT!");
    }
    //Create else if for when the user & computer dont chose the same key.
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }
    else {
        alert("That was not a letter!");
    }
    //Create if for when user runs out of guesses
    if (guessesLeft === 0) {
        losses++;
        alert("YOU RAN OUT OF GUESSES! Definitely  n o t  psychic....bummer");
        reset();
    }

    winsText.textContent = " " + wins;
    lossesText.textContent = " " + losses;
    guessesLeftText.textContent = " " + guessesLeft;
    guessesSoFarText.textContent = " " + guessesSoFar;
};
