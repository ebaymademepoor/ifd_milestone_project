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
    else {
        timerBeforeClickingStarts((intervalOff / 1000) + 1);
    }
}

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

    if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
        correctAnswers++;

        if (correctAnswers === difficulty) {
            console.log("you won the game");
            $("#feedback-text").html(`<h2>Congratulations! You won the game!</h2>`);
            $(".game-start").show(1000);
        }

        else if (correctAnswers < gameLevel) {
            if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
                checkanswerIndex++;
            }
        }
        else if (correctAnswers === gameLevel) {
            $("#feedback-text").html(`<h2>Well done! Time for level ${gameLevel + 1}!</h2>`);
            console.log("next level!");
            correctAnswers = 0;
            gameLevel++;
            clickedButtons = [];
            currentIndex = 0;
            checkanswerIndex = 0;
            intervalOn = 1000;
            intervalOff = 1500;
            intervalSpeed = 1000;
            highlightButtonsSequence(gameLevel, currentIndex);
            $(".game-button").unbind('click').click(
                function() {
                    console.log('I will unbind click so it doesnt fire twice');
                }
            );
        }
    }
    else {
        console.log("Game Over!");
        randomlyGeneratedNumbers = [];
        gameOverMessage();
        $(".game-start").show(1000);
        $(".game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }

}

function playSinglePlayerGame(answerIndex) {
    $(".game-button").click(function() {
        recordButtonAndEvaluate(this.id, checkanswerIndex);
    });
}

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
    intervalOn = 1000;
    intervalOff = 1500;
    intervalSpeed = 1000;
    correctAnswers = 0;
    getReadyMessage();
    createANumber(difficulty);
    highlightButtonsSequence(gameLevel, currentIndex);
    console.log("Game Reset");
}

// Timer Function

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

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Play the sequence in the array

    $("#start").click(function() {
        resetGame();
        $(".game-start").hide(1000);
    });

});
