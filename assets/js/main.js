var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkanswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 0;
var intervalOff = 0;
var intervalSpeed = 0;
var difficulty = 10; // Could also be max level
var defaultDifficulty = 10;
var correctAnswers = 0;
var gameMode = 0;

var soundsLibrary = {
    aa1: { sound: new Howl({ src: ['assets/sounds/get-ready.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa2: { sound: new Howl({ src: ['assets/sounds/three.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa3: { sound: new Howl({ src: ['assets/sounds/two.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa4: { sound: new Howl({ src: ['assets/sounds/one.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa5: { sound: new Howl({ src: ['assets/sounds/go.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa6: { sound: new Howl({ src: ['assets/sounds/correct-beep.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa7: { sound: new Howl({ src: ['assets/sounds/next-level.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa8: { sound: new Howl({ src: ['assets/sounds/game-over.mp3', 'assets/sounds/correct-beep.mp3'], volume: 0.8 }) },
    aa9: { sound: new Howl({ src: ['assets/sounds/winner.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa10: { sound: new Howl({ src: ['assets/sounds/play-music.mp3', 'assets/sounds/correct-beep.mp3'], loop: true, volume: 0.8 }) },
    aa11: { sound: new Howl({ src: ['assets/sounds/final-stage.mp3', 'assets/sounds/correct-beep.mp3'] }) },
    aa12: { sound: new Howl({ src: ['assets/sounds/grand-slam.mp3', 'assets/sounds/correct-beep.mp3'], loop: true, volume: 0.8 }) }
};

//Aesthetic Functions

function getReadyMessage() {
    soundsLibrary.aa1.sound.play();
    $("#feedback-text").html("<h2 class='game-play-message'>Get Ready for <br>LEVEL " + gameLevel + "</h2>");
}

function threeMessage() {
    soundsLibrary.aa2.sound.play();
    $("#feedback-text").html("<h2 class='big-num'>3</h2>");
}

function twoMessage() {
    soundsLibrary.aa3.sound.play();
    $("#feedback-text").html("<h2 class='big-num'>2</h2>");
}

function oneMessage() {
    soundsLibrary.aa4.sound.play();
    $("#feedback-text").html("<h2 class='big-num'>1</h2>");
}

function memoriseMessage() {
    return $("#feedback-text").html("<h2 class='game-play-message'>Memorise!</h2>");
}

function repeatMessage() {
    soundsLibrary.aa5.sound.play();
    $("#feedback-text").html("<h2 class='game-play-message'>Repeat!!!!!!!</h2>");
}

function gameOverMessage() {
    soundsLibrary.aa8.sound.play();
    return $("#feedback-text").html("<h2 class='top'>You got it wrong!<br class='game-play-message'>Game Over!</h2>");
}

// These functions will flash color on then off...

function colorOneButton(num) {
    //apply color once

    if (gameMode === "classic") {

        var applyColor = "$('#button" + randomlyGeneratedNumbers[num] + "').addClass('button-color" + randomlyGeneratedNumbers[num] + "')";
        setTimeout(applyColor, intervalOn);
    }
    else if (gameMode === "picture") {
        var applyColor = "$('#pic-button" + randomlyGeneratedNumbers[num] + "').addClass('pb13')";
        setTimeout(applyColor, intervalOn);
    }
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
    $(".game-button").unbind('click').click(
        function() {
            console.log('I will unbind click so it doesnt fire twice');
        }
    );

    $(".results-image").hide();

    randomlyGeneratedNumbers = [];
    clickedButtons = [];
    removePictures();
    gameLevel = 1;
    currentIndex = 0;
    checkanswerIndex = 0;
    intervalOn = 2000;
    intervalOff = 2500;
    intervalSpeed = 1000;
    correctAnswers = 0;
    createANumber(difficulty);
    console.log("Game Reset");

    if (gameMode === "classic") {
        startSequence();
    }
    else if (gameMode === "picture") {
        removeClass();
        difficulty = 12;

        var newPic = '$(".picture").addClass("pic' + randomlyGeneratedNumbers[0] + '")';

        setTimeout(newPic, 1000);
        startSequence();
    }
}

// Step 2 - this creates your new numbers array with the correct sequence

function createANumber(difficulty) {
    if (gameMode === "classic") {
        for (i = 1; i <= difficulty; i++) {
            randomNumber = Math.round(Math.random() * 3) + 1;
            randomlyGeneratedNumbers.push(randomNumber);
        }
    }

    else if (gameMode === "picture") {
        if (randomlyGeneratedNumbers.length !== 12) {
            randomNumber = Math.round(Math.random() * 11) + 1;
            if (randomlyGeneratedNumbers.indexOf(randomNumber) === -1) {
                randomlyGeneratedNumbers.push(randomNumber);
                createANumber();
            }
            else {
                createANumber();
            }
        }
        else {
            console.log(randomlyGeneratedNumbers);
        }
    }
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
        repeatMessage();
        if (gameMode === "classic") {
            playClassicGame(checkanswerIndex);
        }
        else if (gameMode === "picture") {
            playPictureGame(checkanswerIndex);
        }
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

function playClassicGame(answerIndex) {
    $(".game-button").click(function() {
        recordButtonAndEvaluate(this.id, checkanswerIndex);
        $(this).addClass("button-color13");
        setTimeout(removeClass, 200);
    });
}

function playPictureGame(answerIndex) {
    $(".pic-game-button").click(function() {
        recordButtonAndEvaluatePic(this.id, checkanswerIndex);
        $(this).addClass("dissapear");
    });
}

function removeClass() {
    if (gameMode === "classic") {
        return $(".game-button").removeClass("button-color13");
    }
    else if (gameMode === "picture") {
        setTimeout(function() {
            $(".pic-game-button").removeClass("dissapear");
        }, 500);
    }
}
// Step 4 - Once player has clicked a button it is pushed into an array and then the logic begins dependant on the outcome

function levelUp() {
    gameLevel++;
    console.log("next level!");
    correctAnswers = 0;
    clickedButtons = [];
    currentIndex = 0;
    checkanswerIndex = 0;
    intervalOn = 2000;
    intervalOff = 2500;
    intervalSpeed = 1000;
    highlightButtonsSequence(gameLevel, currentIndex);
    
    if (gameMode === "classic") {
        $(".game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }
    else if (gameMode === "picture") {
        removeClass();
        $(".pic-game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }
}

function gameCompleted() {
    if (correctAnswers === difficulty) {
        if (gameMode === "classic") {
            soundsLibrary.aa10.sound.stop();
            $(".sgb1").fadeOut(2000);
        }
        else if (gameMode === "picture") {
            soundsLibrary.aa12.sound.stop();
            $(".sgb3").fadeOut(5000);
        }

        soundsLibrary.aa9.sound.play();
        console.log("you won the game");
        $("#feedback-text").html("<h2 class='game-win-message'>Congratulations! You won the game!</h2>");

        appraisalOfPerformance();

        setTimeout(function() {
            $(".sgb2").fadeIn(2000);
        }, 5000);


        // Play again message....
        $(".game-selector-para").text("");
        $(".game-selector-header").text("");
        setTimeout(function() {
            $(".mode-box").fadeIn(2000);
        }, 2000);

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

    // Check 1a - if the answer is correct we move on to evaluate what we need to do next in the game

    if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
        correctAnswers++;

        // Check 2a - if the answer is correct and the difficulty(max level) matches the correct answers, the player has won!

        if (correctAnswers === difficulty) {
            gameCompleted();
        }

        // Check 2a - if the answer is correct but the correct answers are less than the game level, we repeat the check for the next click!

        else if (correctAnswers < gameLevel) {
            if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
                checkanswerIndex++;
                soundsLibrary.aa6.sound.play();
            }
        }

        // Check 2a - if the answer is correct and the correct answers are the same as the game level, we start the process again for the next level!

        else if (correctAnswers === gameLevel && difficulty - 1 === gameLevel) {
            levelUp();
            soundsLibrary.aa11.sound.play();
            $("#feedback-text").html("<h2 class='game-play-message'>FINAL STAGE!</h2>");
        }

        else if (correctAnswers === gameLevel) {
            levelUp();
            soundsLibrary.aa7.sound.play();
            $("#feedback-text").html("<h2 class='game-play-message'>Well done!<br>Time for LEVEL " + gameLevel + "</h2>");
        }
    }

    // Check 1b - if the answer is incorrect the game ends

    else {
        gameOver();
    }
}

function recordButtonAndEvaluatePic(buttonClicked, answerIndex) {
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

    if (clickedButtons[answerIndex] === "pic-button" + randomlyGeneratedNumbers[answerIndex]) {
        correctAnswers++;

        // Check 2a - if the answer is correct and the difficulty(max level) matches the correct answers, the player has won!

        if (correctAnswers === difficulty) {
            gameCompleted();
        }

        // Check 2a - if the answer is correct but the correct answers are less than the game level, we repeat the check for the next click!

        else if (correctAnswers < gameLevel) {
            if (clickedButtons[answerIndex] === "pic-button" + randomlyGeneratedNumbers[answerIndex]) {
                checkanswerIndex++;
                soundsLibrary.aa6.sound.play();
            }
        }

        // Check 2a - if the answer is correct and the correct answers are the same as the game level, we start the process again for the next level!

        else if (correctAnswers === gameLevel && difficulty - 1 === gameLevel) {
            levelUp();
            soundsLibrary.aa11.sound.play();
            $("#feedback-text").html("<h2 class='game-play-message'>FINAL STAGE!</h2>");
        }

        else if (correctAnswers === gameLevel) {
            levelUp();
            soundsLibrary.aa7.sound.play();
            $("#feedback-text").html("<h2 class='game-play-message'>Well done!<br>Time for LEVEL " + gameLevel + "</h2>");
        }
    }

    // Check 1b - if the answer is incorrect the game ends

    else {
        gameOver();
    }
}

// Game Over Sequence....

function gameOver() {
    soundsLibrary.aa8.sound.play();

    setTimeout(function() {
        $(".sgb2").fadeIn(2000);
    }, 2000);

    appraisalOfPerformance();

    console.log("Game Over!");
    randomlyGeneratedNumbers = [];
    gameOverMessage();

    if (gameMode === "classic") {
        soundsLibrary.aa10.sound.stop();
        $(".sgb1").fadeOut(2000);
        $(".game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }
    else if (gameMode === "picture") {
        soundsLibrary.aa12.sound.stop();
        removeClass();
        $(".sgb3").fadeOut(2000);
        $(".pic-game-button").unbind('click').click(
            function() {
                console.log('I will unbind click so it doesnt fire twice');
            }
        );
    }

    // Add try again in here.........................
    $(".game-selector-para").text("");
    $(".game-selector-header").text("");
    setTimeout(function() {
        $(".mode-box").fadeIn(2000);
    }, 4000);
}

// Game performance evaluator

function appraisalOfPerformance() {
    $(".results-image").fadeIn(2000);
    if (gameLevel / difficulty < 0.5) {
        $(".results-para").text("You are worse than stupid! xD");
        $(".results-image").addClass("patrick");
    }
    else if (gameLevel / difficulty < 0.75) {
        $(".results-para").text("You are just OKAY at this..! :p");
        $(".results-image").addClass("trump");
    }
    else if (gameLevel / difficulty < 1) {
        $(".results-para").text("Not bad, keep trying! :D");
        $(".results-image").addClass("clever");
    }
    else {
        $(".results-para").text("You are the brainiest guy I know! xD");
        $(".results-image").addClass("einstein");
    }
}

function removePictures() {
    $(".results-image").removeClass("patrick");
    $(".results-image").removeClass("trump");
    $(".results-image").removeClass("clever");
    $(".results-image").removeClass("einstein");
    for (i = 1; i < 13; i++) {
        var removePicClass = '$(".picture").removeClass("pic' + i + '")';
        setTimeout(removePicClass, 500);
    }
}

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Logo displays on loadup
    
    soundsLibrary.aa9.sound.play();
    setTimeout(function() {
        $(".logo").fadeOut(2000);
    }, 5000);

    // Glide through the set up menus...

    // Welcome message menu...

    $(".play").click(function() {
        soundsLibrary.aa6.sound.play();
        $(".welcome-box").fadeOut(2000);
        setTimeout(function() {
            $(".mode-box").fadeIn(2000);
        }, 1000);
    });

    // Pick Mode...

    $("#picture").click(function() {
        $("#feedback-text").html("<h2 class='top'><h2>");
        soundsLibrary.aa6.sound.play();
        $(".mode-box").fadeOut(2000);
        $(".sgb1").fadeOut(2000);
        setTimeout(function() {
            $(".start-pic-mode-box").fadeIn(2000);
        }, 1000);
        setTimeout(function() {
            $(".sgb3").fadeIn(2000);
        }, 1000);
    });

    $("#classic").click(function() {
        $("#feedback-text").html("<h2 class='top'><h2>");
        soundsLibrary.aa6.sound.play();
        $(".mode-box").fadeOut(2000);
        setTimeout(function() {
            $(".start-box").fadeIn(2000);
        }, 1000);
    });


    // Start the play sequence....

    // Classic Mode

    $("#start").click(function() {
        gameMode = "classic";
        difficulty = defaultDifficulty;
        $(".sgb1").fadeIn(2000);
        soundsLibrary.aa6.sound.play();
        $(".start-box").fadeOut(2000);
        $("#feedback-text").text("Are you ready?");
        setTimeout(function() {
            $(".feedback-box").fadeIn(2000);
        }, 1000);
        setTimeout(resetGame, 2000);
        soundsLibrary.aa10.sound.play();
    });

    // Picture Mode

    $("#pic-mode-start").click(function() {
        gameMode = "picture";
        $(".sgb3").fadeIn(2000);
        soundsLibrary.aa6.sound.play();
        $(".start-pic-mode-box").fadeOut(2000);
        $("#feedback-text").text("Are you ready?");
        setTimeout(function() {
            $(".feedback-box").fadeIn(2000);
        }, 1000);
        setTimeout(resetGame, 2000);
        soundsLibrary.aa12.sound.play();
    });
});