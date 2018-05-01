console.log("Hi");

var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkanswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 0;
var intervalOff = 0;
var intervalSpeed = 0;
var difficulty = 8; // Could also be max level
var correctAnswers = 0;

var soundsLibrary = {
    1: {
        sound: new Howl({
            src: ['assets/sounds/get-ready.mp3']
        })
    },
    2: {
        sound: new Howl({
            src: ['assets/sounds/three.mp3']
        })
    },
    3: {
        sound: new Howl({
            src: ['assets/sounds/two.mp3']
        })
    },
    4: {
        sound: new Howl({
            src: ['assets/sounds/one.mp3']
        })
    },
    5: {
        sound: new Howl({
            src: ['assets/sounds/go.mp3']
        })
    },
    6: {
        sound: new Howl({
            src: ['assets/sounds/correct-beep.mp3']
        })
    },
    7: {
        sound: new Howl({
            src: ['assets/sounds/next-level.mp3']
        })
    },
    8: {
        sound: new Howl({
            src: ['assets/sounds/game-over.mp3'],
            volume: 0.5
        })
    },
    9: {
        sound: new Howl({
            src: ['assets/sounds/winner.mp3']
        })
    },
    10: {
        sound: new Howl({
            src: ['assets/sounds/play-music.mp3'],
            loop: true,
            volume: 0.5
        })
    },
    11: {
        sound: new Howl({
            src: ['assets/sounds/final-stage.mp3'],
        })
    }
};

//Aesthetic Functions

function getReadyMessage() {
    soundsLibrary[1].sound.play();
    $("#feedback-text").html(`<h2>Get Ready for level ${gameLevel}!</h2>`);
}

function threeMessage() {
    soundsLibrary[2].sound.play();
    $("#feedback-text").html(`<h2>3</h2>`);
}

function twoMessage() {
    soundsLibrary[3].sound.play();
    $("#feedback-text").html(`<h2>2</h2>`);
}

function oneMessage() {
    soundsLibrary[4].sound.play();
    $("#feedback-text").html(`<h2>1</h2>`);
}

function memoriseMessage() {
    return $("#feedback-text").html("<h2>Memorise!</h2>");
}

function repeatMessage() {
    soundsLibrary[5].sound.play();
    $("#feedback-text").html(`<h2>Repeat!!!!!!!</h2>`);
}

function gameOverMessage() {
    soundsLibrary[8].sound.play();
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

// Starting sequence - feedback messages before start

function startSequence() {
    setTimeout(getReadyMessage, 2000);
    setTimeout(threeMessage, 4000);
    setTimeout(twoMessage, 5000);
    setTimeout(oneMessage, 6000);
    setTimeout(memoriseMessage, 7000);
    timerBeforeSequenceStarts(7);
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
    createANumber(difficulty);
    startSequence();
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

// Click timer Function - this ensures the player cannot play until the color sequence is complete

var timeLeft = 0;

function repeat() {
    timerBeforeClickingStarts(timeLeft);
}

function timerBeforeClickingStarts(countFrom) {
    timeLeft = countFrom;
    if (timeLeft < 1) {
        clearTimeout(timeLeft);
        playSinglePlayerGame(checkanswerIndex);
        repeatMessage();
    }
    else {
        timeLeft--;
        setTimeout(repeat, 1000);
    }
}

// Sequence timer Function - this ensures the player cannot play until the color sequence is complete

var seqTimeLeft = 0;

function repeat2() {
    timerBeforeSequenceStarts(seqTimeLeft);
}

function timerBeforeSequenceStarts(countFrom) {
    seqTimeLeft = countFrom;
    if (seqTimeLeft < 1) {
        clearTimeout(seqTimeLeft);
        highlightButtonsSequence(gameLevel, currentIndex);
    }
    else {
        seqTimeLeft--;
        setTimeout(repeat2, 1000);
    }
}

// This records the button the player has clicked in order

function playSinglePlayerGame(answerIndex) {
    $(".game-button").click(function() {
        recordButtonAndEvaluate(this.id, checkanswerIndex);
        $(this).addClass("button-color5");
        setTimeout(rC, 200);
    });
}

function rC() {
    return $(".game-button").removeClass("button-color5");
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
            soundsLibrary[10].sound.stop();
            soundsLibrary[9].sound.play();
            console.log("you won the game");
            $("#feedback-text").html(`<h2>Congratulations! You won the game!</h2>`);
            $("#start").text("Play again?");


            // Insert play again here...
            $(".start-box").fadeIn(2000).show();
        }

        // Check 2a - if the answer is correct but the correct answers are less than the game level, we repeat the check for the next click!

        else if (correctAnswers < gameLevel) {
            if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
                checkanswerIndex++;
                soundsLibrary[6].sound.play();
            }
        }

        // Check 2a - if the answer is correct and the correct answers are the same as the game level, we start the process again for the next level!

        else if (correctAnswers === gameLevel && difficulty - 1 === gameLevel) {
            soundsLibrary[11].sound.play();
            $("#feedback-text").html(`<h2>FINAL STAGE!</h2>`);
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

        else if (correctAnswers === gameLevel) {
            soundsLibrary[7].sound.play();
            $("#feedback-text").html(`<h2>Well done! Time for LEVEL ${gameLevel + 1} !</h2>`);
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
        soundsLibrary[10].sound.stop();
        soundsLibrary[8].sound.play();
        $("#start").text("Try again?");
        console.log("Game Over!");
        randomlyGeneratedNumbers = [];
        gameOverMessage();
        $(".start-box").fadeIn(8000).show();
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
        $(".welcome-box").fadeOut(2000).hide(2000);
        setTimeout(function() {
            $(".mode-box").fadeIn(2000).show();
        }, 1000);
    });

    $("#single-player").click(function() {
        $(".mode-box").fadeOut(2000).hide(2000);
        setTimeout(function() {
            $(".start-box").fadeIn(2000).show();
        }, 1000);
    });

    // Start the play sequence....

    $("#start").click(function() {
        $(".start-box").fadeOut(2000).hide();
        $("#feedback-text").text("Are you ready?");
        setTimeout(function() {
            $(".feedback-box").fadeIn(2000).show();
        }, 1000);

        setTimeout(resetGame, 2000);
        soundsLibrary[10].sound.play();
    });

});
