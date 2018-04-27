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
var correctAnswers = 0;

//Aesthetic Functions

function getReadyMessage() {
    $("#feedback-text").html(`<h2>Get Ready for level ${gameLevel}!</h2>`);
    setTimeout(letsPlayMessage, intervalOn - 500);
}

function letsPlayMessage() {
    return $("#feedback-text").html("<h2>Memorise!</h2>");
}


function gameOverMessage() {
    $(".game-button").addClass("gameover-button-color");
    return $("#feedback-text").html("<h2>You got it wrong!  Game Over!</h2>");
}

function colorOneButton(num) {

    //apply color once
    var applyColor = `$('#button${randomlyGeneratedNumbers[num]}').addClass('button-color${randomlyGeneratedNumbers[num]}')`;
    setTimeout(applyColor, intervalOn);

    //remove color once
    removeCurrentColor(applyColor);
}

function removeCurrentColor(currentColor) {
    var removeColor = currentColor.replace(/add/g, "remove");
    setTimeout(removeColor, intervalOff);
}

// Gameplay Functions    

function createANumber(difficulty) {
    for (i = 1; i <= difficulty; i++) {
        var randomNumber = Math.round(Math.random() * 3) + 1;
        randomlyGeneratedNumbers.push(randomNumber);
    }
    console.log(randomlyGeneratedNumbers);
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

function recordClickedButton(buttonClicked) {
    var clickedButton = buttonClicked;
    clickedButtons.push(clickedButton);
}

function evaluatePlayerInputs(AnswerIndex) {
    if (clickedButtons[AnswerIndex]) {
            if (clickedButtons[AnswerIndex].id === "button" + randomlyGeneratedNumbers[AnswerIndex]) {
                console.log("okay so far");
                checkAnswerIndex++;
                correctAnswers++;
            } else {
                console.log("Game Over!");
                randomlyGeneratedNumbers = [];
                gameOverMessage();
            }
        } else {
            console.log("remember the is a possible evaluate error here! Do i need a promise?"); // never happens on the last click?!
        }
}

function playSinglePlayerGame() {
    $(".game-button").click(function() {
        recordClickedButton(this);
        evaluatePlayerInputs(checkAnswerIndex);


        if (correctAnswers === difficulty) {
            console.log("you won the game");
            $("#feedback-text").html(`<h2>Congratulations! You won the game!</h2>`);
        }

        else if (correctAnswers < gameLevel) {
            evaluatePlayerInputs(checkAnswerIndex);
        }

        else {
            $("#feedback-text").html(`<h2>Well done! Time for level ${gameLevel + 1}!</h2>`);
            console.log("next level!");
            correctAnswers = 0;
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
}

function resetGame() {
    randomlyGeneratedNumbers = [];
    clickedButtons = [];
    gameLevel = 1;
    currentIndex = 0;
    checkAnswerIndex = 0;
    intervalOn = 1000;
    intervalOff = 1500;
    intervalSpeed = 1000;
    correctAnswers = 0;
    // Reset Colors to default
    $(".game-button").removeClass("gameover-button-color");
}

// Timer Function

var timeLeft = 0;

function repeat(){
    timerBeforeClickingStarts(timeLeft);
}

function timerBeforeClickingStarts(countFrom){
    timeLeft = countFrom;
    console.log(timeLeft);
    if(timeLeft < 1){
        clearTimeout(timeLeft);
        playSinglePlayerGame();
    } else {
    timeLeft--;
    setTimeout(repeat,1000);
    }
}

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Play the sequence in the array

    $("#start").click(function() {
        resetGame();
        getReadyMessage();
        createANumber(difficulty);
        highlightButtonsSequence(gameLevel, currentIndex);
    })
    timerBeforeClickingStarts(1 + (gameLevel * 5)); //this is in the wrong place, needs to run after sequence
});