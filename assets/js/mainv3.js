console.log("Hi");

var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkAnswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 0;
var intervalOff = 0;
var intervalSpeed = 0;
var difficulty = 4; // Could also be max level
var correctAnswers = 0;

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
        correctAnswers++;
    }
    else {
        console.log("Game Over!");
        randomlyGeneratedNumbers = [];
        gameOverMessage();
    }
}

function gameOverMessage() {
    $(".game-button").addClass("gameover-button-color");
    return $("#feedback-text").html("<h2>You got it wrong!  Game Over!</h2>");
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

function getReadyMessage(){
    $("#feedback-text").html("<h2>Get Ready!</h2>");
    setTimeout(letsPlayMessage, intervalOn - 500);
}

function letsPlayMessage() {
    return $("#feedback-text").html("<h2>Memorise!</h2>");
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

    // Event Lister adds clicked buttons to array

    $(".game-button").click(function() {
        recordClickedButton(this);
        evaluatePlayerInputs(checkAnswerIndex);
        
        
        if (correctAnswers === difficulty) {
            console.log("you won the game");
            $("#feedback-text").html(`<h2>Congratulations! You won the game!</h2>`);
        } 
        
        else if (correctAnswers < gameLevel){
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

});
