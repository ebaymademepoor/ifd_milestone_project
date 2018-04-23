// Game variables...
var numbersArray = [];
var correctAnswer = 0;
var newColor = 0;
var gameButtons = [];
var interval = 1000;

// Functions...

function captureGameButtons() {
    gameButtons = $(".game-button");
    console.log(gameButtons);
}

function colorCorrectButton(num) {
    newColor = "$('#button" + num + "').addClass('button-color" + num + "')";

    function applyNewColor() {
        setTimeout(newColor, interval += 1000);
    }
    applyNewColor();
}

function removeColor(num){
    var hideColor = newColor.replace(/add/g, "remove");
    setTimeout(hideColor, interval += 1000);
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
            $("#game-area").show(interval);
        });

        // Start Game by creating new array

        $("#start").click(function() {
            
            $(".game-button").removeClass("button-color1");
            $(".game-button").removeClass("button-color2");
            $(".game-button").removeClass("button-color3");
            $(".game-button").removeClass("button-color4");
            
            // Create the numbers that corresponde to the buttons that will be in the sequence
            numbersArray = [];
            createNumbers();

            $("#feedback-area").html("<h2>Get Ready!</h2>");
            setTimeout(letsPlayMessage, interval += 1000);

            correctAnswer = numbersArray[0];

            // match button to correct answer
            colorCorrectButton(correctAnswer);
            
            // removeColor
            removeColor(correctAnswer);
            
            // clicked a button and evaluated if the button was correct
            $(".game-button").click(function(){
                if (this.id == "button" + correctAnswer) {
                    console.log($(this));
                alert("You clicked the correct button");
                } else {
                    alert("Nope, wrong button");
                }
            })
            
        });
    }
);
