console.log("Hi");

var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkAnswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 0;
var intervalOff = 0;
var intervalSpeed = 0;
var difficulty = 5; // Could also be max level

// Functions    
function createANumber(difficulty) {
    for (i = 1; i <= difficulty; i++) {
        var randomNumber = Math.round(Math.random() * 3) + 1;
        randomlyGeneratedNumbers.push(randomNumber);
    } 
    console.log(randomlyGeneratedNumbers);
}

function recordClickedButton(buttonClicked) {
    var clickedButton = buttonClicked;
    clickedButtons.push(clickedButton);
}

function removeCurrentColor(currentColor) {
    var removeColor = currentColor.replace(/add/g, "remove");
    setTimeout(removeColor, intervalOff);
}

function colorOneButton(num) {

    //apply color once
    var applyColor = `$('#button${randomlyGeneratedNumbers[num]}').addClass('button-color${randomlyGeneratedNumbers[num]}')`;
    setTimeout(applyColor, intervalOn);

    //remove color once
    removeCurrentColor(applyColor);
}

function highlightButtonsSequence(currentLevel, index) {
    colorOneButton(index);
    if ((index + 1) < currentLevel) {
        intervalOn += intervalSpeed;
        intervalOff += intervalSpeed;
        currentIndex++;
        colorOneButton(currentIndex);
        highlightButtonsSequence(gameLevel, currentIndex);
    }
}

function evaluatePlayerInputs(AnswerIndex) {
    if (clickedButtons[AnswerIndex].id === "button" + randomlyGeneratedNumbers[AnswerIndex]) {
        console.log("okay so far");
        checkAnswerIndex++;
    }
    else {
        console.log("Game Over!");
        randomlyGeneratedNumbers = [];
        clickedButtons = [];
    }
}

function resetGame() {
    randomlyGeneratedNumbers = [];
    clickedButtons = [];
    gameLevel = 1;
    currentIndex = 0;
    intervalOn = 1000;
    intervalOff = 1500;
    intervalSpeed = 1000;
    checkAnswerIndex = 0;
}

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Play the sequence in the array

    $("#start").click(function() {
        resetGame();
        createANumber(difficulty);
        highlightButtonsSequence(gameLevel, currentIndex);
    })

    // Event Lister adds clicked buttons to array

    $(".game-button").click(function() {
        recordClickedButton(this);
        if (gameLevel > checkAnswerIndex +1) {
            evaluatePlayerInputs(checkAnswerIndex);
        } else if(gameLevel === difficulty){
            console.log("you won the game");
            randomlyGeneratedNumbers = [];
            clickedButtons = [];
        }
        else {
            console.log("next level!");
            gameLevel++;
            clickedButtons = [];
            currentIndex = 0;
            checkAnswerIndex = 0;
            intervalOn = 1000;
            intervalOff = 1500;
            intervalSpeed = 1000;
            highlightButtonsSequence(gameLevel, currentIndex);
        }
    });

});
