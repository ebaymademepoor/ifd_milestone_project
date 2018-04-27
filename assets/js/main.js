console.log("Hi");

var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkanswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 0;
var intervalOff = 0;
var intervalSpeed = 0;
var difficulty = 7; // Could also be max level
var correctAnswers = 0;

//Aesthetic Functions

function getReadyMessage() {
    $("#feedback-text").html(`<h2>Get Ready for level ${gameLevel}!</h2>`);
    setTimeout(letsPlayMessage, intervalOn);
}

function letsPlayMessage() {
    return $("#feedback-text").html("<h2>Memorise!</h2>");
}

function repeatMessage() {
    $("#feedback-text").html(`<h2>Repeat!!!!!!!</h2>`);
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

// Step 1 - When start is clicked, all game parameters are set to zero and a new game begins...

function resetGame() {

    // Reset Colors to default
    $(".game-button").removeClass("gameover-button-color");
    $(".game-button").unbind('click').click(
        function() {
            console.log('I will unbind click so it doesnt fire twice');
        }
    );
    randomlyGeneratedNumbers = [];
    clickedButtons = [];
    gameLevel = 1;
    currentIndex = 0;
    checkanswerIndex = 0;
    intervalOn = 2000;
    intervalOff = 2500;
    intervalSpeed = 1000;
    correctAnswers = 0;
    getReadyMessage();
    createANumber(difficulty);
    highlightButtonsSequence(gameLevel, currentIndex);
    console.log("Game Reset");
}

// Step 2 - this creates your new numbers array with the correct sequence

function createANumber(difficulty) {
    for (i = 1; i <= difficulty; i++) {
        var randomNumber = Math.round(Math.random() * 3) + 1;
        randomlyGeneratedNumbers.push(randomNumber);
    }
    console.log(randomlyGeneratedNumbers);
}

// Step 3 - this will highlight a color based on the array, more colors will be highlighted dependant on level
//  After all colors are highlighted, the player can play the game

function highlightButtonsSequence(currentLevel, index) {
    colorOneButton(index);
    if ((index + 1) < currentLevel) {
        intervalOn += intervalSpeed;
        intervalOff += intervalSpeed;
        currentIndex++;
        colorOneButton(currentIndex);
        highlightButtonsSequence(gameLevel, currentIndex);
    }
    else {
        timerBeforeClickingStarts((intervalOff / 1000) + 1);
    }
}

// Timer Function - this ensures the player cannot play until the color sequence is complete

var timeLeft = 0;

function repeat() {
    timerBeforeClickingStarts(timeLeft);
}

function timerBeforeClickingStarts(countFrom) {
    timeLeft = countFrom;
    if (timeLeft < 1) {
        clearTimeout(timeLeft);
        repeatMessage();
        playSinglePlayerGame(checkanswerIndex);
    }
    else {
        timeLeft--;
        setTimeout(repeat, 1000);
    }
}

// This records the button the player has clicked in order

function playSinglePlayerGame(answerIndex) {
    $(".game-button").click(function() {
        recordButtonAndEvaluate(this.id, checkanswerIndex);
    });
}

// Step 4 - Once player has clicked a button it is pushed into an array and then the logic begins dependant on the outcome

function recordButtonAndEvaluate(buttonClicked, answerIndex) {
    var clickedButton = buttonClicked;

    clickedButtons.push(clickedButton);

    console.log("clickedButton =" + clickedButton);
    console.log("Answer Index =" + answerIndex);
    console.log("checkanswerIndex =" + checkanswerIndex);
    console.log("clickedButtons =" + clickedButtons);
    console.log("currentIndex =" + currentIndex);
    console.log("randomlyGeneratedNumbers =" + randomlyGeneratedNumbers);
    console.log("correctAnswers =" + correctAnswers);
    console.log("-----------------------------------------------");

    // Check 1a - if the answer is correct we move on to evaluate what we need to do next in the game

    if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
        correctAnswers++;

        // Check 2a - if the answer is correct and the difficulty(max level) matches the correct answers, the player has won!

        if (correctAnswers === difficulty) {
            console.log("you won the game");
            $("#feedback-text").html(`<h2>Congratulations! You won the game!</h2>`);

            // Insert play again here...
            $(".sb3").fadeIn(2000).show();
        }

        // Check 2a - if the answer is correct but the correct answers are less than the game level, we repeat the check for the next click!

        else if (correctAnswers < gameLevel) {
            if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
                checkanswerIndex++;
            }
        }

        // Check 2a - if the answer is correct and the correct answers are the same as the game level, we start the process again for the next level!

        else if (correctAnswers === gameLevel) {
            $("#feedback-text").html(`<h2>Well done! Time for level ${gameLevel + 1}!</h2>`);
            console.log("next level!");
            correctAnswers = 0;
            gameLevel++;
            clickedButtons = [];
            currentIndex = 0;
            checkanswerIndex = 0;
            intervalOn = 2000;
            intervalOff = 2500;
            intervalSpeed = 1000;
            highlightButtonsSequence(gameLevel, currentIndex);
            $(".game-button").unbind('click').click(
                function() {
                    console.log('I will unbind click so it doesnt fire twice');
                }
            );
        }
    }

    // Check 1b - if the answer is incorrect the game ends

    else {
        console.log("Game Over!");
        randomlyGeneratedNumbers = [];
        gameOverMessage();
        $(".sb3").fadeIn(2000).show();
        $(".game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }
}

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Glide through the set up menus...

    // Welcome message menu...

    $(".play").click(function() {
        $(".sb1").fadeOut(2000).hide(2000);
        setTimeout(function() {
            $(".sb2").fadeIn(2000).show();
        }, 1000);
    });

    $("#single-player").click(function() {
        $(".sb2").fadeOut(2000).hide(2000);
        setTimeout(function() {
            $(".sb3").fadeIn(2000).show();
        }, 1000);
    });

    // Start the play sequence....

    $("#start").click(function() {
        $(".sb3").fadeOut(2000).hide(2000);
        setTimeout(function() {
            $(".sb4").fadeIn(2000).show();    
        }, 1000);
        
        setTimeout(resetGame, 2000);    
        
    });

});
