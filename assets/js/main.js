// Game variables...
var numbersArray = [];
var correctAnswer = 0;
var newColor = 0;
var gameButtons = {};

// Functions...

function captureGameButtons() {
    gameButtons = $(".game-button");
    console.log(gameButtons);
}

function createColorClass(num) {
    newColor = "$('#button" + num + "').addClass('button-color" + num + "')";

    function applyNewColor() {
        var color = newColor;
        setTimeout(color, 3500);
    }
    applyNewColor();
}

function letsPlayMessage() {
    return $("#feedback-area").html("<h2>Memorise!</h2>");
}

function createNumbers() {
    for (i = 0; i < 5; i++) {
        var randomNumber = Math.round(Math.random() * 3) + 1;
        console.log(randomNumber);
        numbersArray.push(randomNumber);
    }
}

// Script

$(document).ready(
    function() {

        // Choose a game mode
        captureGameButtons();

        $("#single-player").click(function() {
            $("#game-area").show(1000);
        });

        // Start Game by creating new array

        $("#start").click(function() {
            
            $(".game-button").removeClass("button-color1");
            $(".game-button").removeClass("button-color2");
            $(".game-button").removeClass("button-color3");
            $(".game-button").removeClass("button-color4");

            numbersArray = [];

            createNumbers();

            $("#feedback-area").html("<h2>Get Ready!</h2>");
            setTimeout(letsPlayMessage, 2000);

            correctAnswer = numbersArray[0];

            // match button to correct answer
            createColorClass(correctAnswer);
            // apply class to correct button
        });
    }
);
