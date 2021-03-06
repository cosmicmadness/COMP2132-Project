/*--------------------------------------------------------------
Description: JavaScript Main File for COMP 2132 Project
Author: Joanne Quan
---------------------------------------------------------------*/


// Get HTML elements for the keyboard keys
const keyQ = document.getElementById("Q");
const keyW = document.getElementById("W");
const keyE = document.getElementById("E");
const keyR = document.getElementById("R");
const keyT = document.getElementById("T");
const keyY = document.getElementById("Y");
const keyU = document.getElementById("U");
const keyI = document.getElementById("I");
const keyO = document.getElementById("O");
const keyP = document.getElementById("P");

const keyA = document.getElementById("A");
const keyS = document.getElementById("S");
const keyD = document.getElementById("D");
const keyF = document.getElementById("F");
const keyG = document.getElementById("G");
const keyH = document.getElementById("H");
const keyJ = document.getElementById("J");
const keyK = document.getElementById("K");
const keyL = document.getElementById("L");

const keyZ = document.getElementById("Z");
const keyX = document.getElementById("X");
const keyC = document.getElementById("C");
const keyV = document.getElementById("V");
const keyB = document.getElementById("B");
const keyN = document.getElementById("N");
const keyM = document.getElementById("M");

// Add event listeners to the keys
keyQ.addEventListener("click", guessLetter);
keyW.addEventListener("click", guessLetter);
keyE.addEventListener("click", guessLetter);
keyR.addEventListener("click", guessLetter);
keyT.addEventListener("click", guessLetter);
keyY.addEventListener("click", guessLetter);
keyU.addEventListener("click", guessLetter);
keyI.addEventListener("click", guessLetter);
keyO.addEventListener("click", guessLetter);
keyP.addEventListener("click", guessLetter);

keyA.addEventListener("click", guessLetter);
keyS.addEventListener("click", guessLetter);
keyD.addEventListener("click", guessLetter);
keyF.addEventListener("click", guessLetter);
keyG.addEventListener("click", guessLetter);
keyH.addEventListener("click", guessLetter);
keyJ.addEventListener("click", guessLetter);
keyK.addEventListener("click", guessLetter);
keyL.addEventListener("click", guessLetter);

keyZ.addEventListener("click", guessLetter);
keyX.addEventListener("click", guessLetter);
keyC.addEventListener("click", guessLetter);
keyV.addEventListener("click", guessLetter);
keyB.addEventListener("click", guessLetter);
keyN.addEventListener("click", guessLetter);
keyM.addEventListener("click", guessLetter);



// Get other HTML elements
const wordReveal = document.getElementById("guess");
const hint = document.getElementById("hint");
const numGuessesLeft = document.getElementById("numberGuesses");
const totalGuesses = document.getElementById("totalGuesses");
const playOutcome = document.getElementById("play-outcome");

// Popup
const popup = document.getElementById("popup");
const popupContainer = document.getElementById("popup-container");
const cancelButton = document.getElementById("cancel-button");
const playAgainButton = document.getElementById("play-again-button");

// Initiate some starting variables
let chosenWord = "";
let totalLife = 6;
let currentLife = 6;
totalGuesses.innerHTML = totalLife;
numGuessesLeft.innerHTML = currentLife;
let opacity = 0;
let opacityHandler;
let popupHandler;

// Keep track of how correct letters have been guessed
let numCorrectLetters = 0;
let indicesLength = 0;

// Hangman 
let hangmanImagecounter = 1;
const $hangmanImage =  $("#hangman");


/*-------------------------------------------
Start the game when the browser loads
---------------------------------------------*/
startGame();


/*-------------------------------------------
Functions
---------------------------------------------*/

// Function to draw hangman
function drawHangman(imageNumber) {
    imageSrc = "images/hangman" + imageNumber + ".png";
    $hangmanImage.attr("src", imageSrc);
}

// Function to randomly pick a word from a word bank
// Display boxes to represent the number of letters in the word
function randomWord() {
    const wordBank = ['APPLE', 'CATERPILLAR', 'EARTHQUAKE', "COMPUTER"];
    // Create hints that correspond to the words in the word bank
    const hintBank = ["A type of fruit", "A type of insect", "A natural disaster", "Technology"];
    // Randomly select word from word bank and display the same number of boxes as letters
    // Assign an ID that corresponds to the index of the loop so that they can be accessed later
    let chosenIndex = Math.floor(Math.random() * wordBank.length)
    //chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    chosenWord = wordBank[chosenIndex];
    for(i=0; i < chosenWord.length; i++) {
        wordReveal.innerHTML += `<div class="letter-container"><p class="letter" id=${i}></p></div>`;
    }
    hint.innerHTML = "Hint: " + hintBank[chosenIndex];
}

// Function to reset the game
function startGame() {
    hangmanImagecounter = 1;
    drawHangman(1);
    totalLife = 6;
    currentLife = 6;
    numCorrectLetters = 0;
    totalGuesses.innerHTML = totalLife;
    numGuessesLeft.innerHTML = currentLife;
    wordReveal.innerHTML = "";

    // Enable all keys
    keyA.disabled = false;
    keyB.disabled = false;
    keyC.disabled = false;
    keyD.disabled = false;
    keyE.disabled = false;
    keyF.disabled = false;
    keyG.disabled = false;
    keyH.disabled = false;
    keyI.disabled = false;
    keyJ.disabled = false;
    keyK.disabled = false;
    keyL.disabled = false;
    keyM.disabled = false;
    keyN.disabled = false;
    keyO.disabled = false;
    keyP.disabled = false;
    keyQ.disabled = false;
    keyR.disabled = false;
    keyS.disabled = false;
    keyT.disabled = false;
    keyU.disabled = false;
    keyV.disabled = false;
    keyW.disabled = false;
    keyX.disabled = false;
    keyY.disabled = false;
    keyZ.disabled = false;

    // Change key colors
    keyA.style.color = "white";
    keyB.style.color = "white";
    keyC.style.color = "white";
    keyD.style.color = "white";
    keyE.style.color = "white";
    keyF.style.color = "white";
    keyG.style.color = "white";
    keyH.style.color = "white";
    keyI.style.color = "white";
    keyJ.style.color = "white";
    keyK.style.color = "white";
    keyL.style.color = "white";
    keyM.style.color = "white";
    keyN.style.color = "white";
    keyO.style.color = "white";
    keyP.style.color = "white";
    keyQ.style.color = "white";
    keyR.style.color = "white";
    keyS.style.color = "white";
    keyT.style.color = "white";
    keyU.style.color = "white";
    keyV.style.color = "white";
    keyW.style.color = "white";
    keyX.style.color = "white";
    keyY.style.color = "white";
    keyZ.style.color = "white";


    // Run the randomWord function to select a word for the game
    randomWord();
}

// Function to check if the guess was correct
function guessLetter() {
    let guessedLetter = this.id;
    if(chosenWord.includes(guessedLetter)) {
        revealLetter(guessedLetter);
        disableKey(guessedLetter);
    } else {
        hangmanImagecounter++;
        reduceLife();
        drawHangman(hangmanImagecounter);
        disableKey(guessedLetter);
    }
}

// Function to get all occurences of a letter
function findIndexOfLetter(letter, chosenWord) {
    const indices = [];
    for(i=0; i < chosenWord.length; i++) {
        if(chosenWord[i] === letter) {
            indices.push(i);
        }
    }
    return indices;
}


// Function to reveal the correct letters
function revealLetter(guessedLetter) {
    let indices = findIndexOfLetter(guessedLetter, chosenWord);
    // Keep track of how many letters were guessed correctly
    numCorrectLetters = numCorrectLetters + indices.length;
    indices.forEach(function( index ){
        let letterAtIndex = chosenWord[index];
        document.getElementById(index).innerHTML = letterAtIndex;
    });
    // If the number of correctly guessed letters equals the length of the word, display a message to tell the player they won
    if(numCorrectLetters == chosenWord.length) {
        displayGameOverMessage("win");
        
    }
}

// Function to reduce a "life" if the user guesses wrong
function reduceLife() {
    currentLife--;
    numGuessesLeft.innerHTML = currentLife;
    if(currentLife == 0){
        endGame();
    }
}

// Function to disable the incorrect keys
function disableKey(guessedLetter) {
    const keyToDisable = document.getElementById(guessedLetter);
    keyToDisable.disabled = true;
    keyToDisable.style.color = "black";
}

// Function to end the game
function endGame() {
    displayGameOverMessage("lose");
}


// Function to display a Game Over message
function displayGameOverMessage(outcome) {
    if(outcome=="win") {
        playOutcome.innerHTML = "You Win!";
    } else {
        playOutcome.innerHTML = "You Lost!";
    }

    popupContainer.style.display = "block";
    opacityHandler = setInterval(function(){
        opacity = opacity + 0.05;
        popup.style.opacity = opacity;
        if(opacity >= 1.00){
            clearInterval(opacityHandler);
        }
    }, 50);
}


// Click the close button to dismiss the popup, but don't restart the game
// Keep the popup container on the screen so the user can't interact with any elements
cancelButton.addEventListener("click", function() {
    clearTimeout(popupHandler);
    clearInterval(opacityHandler);
    popup.style.opacity = 0;
});

// Click the Play Again button to start the game again
playAgainButton.addEventListener("click", function() {
    clearTimeout(popupHandler);
    clearInterval(opacityHandler);
    popup.style.opacity = 0;
    popupContainer.style.display = "none";
    startGame();
});