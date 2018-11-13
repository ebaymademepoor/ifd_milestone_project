var randomlyGeneratedNumbers = [];
var clickedButtons = [];
var gameLevel = 1;
var currentIndex = 0; // where we are in the randomlyGeneratedNumbers array
var checkanswerIndex = 0; // where we are in the clickedButtons array
var intervalOn = 2000;
var intervalOff = 2500;
var intervalSpeed = 1000;
var defaultIntervalOn = 2000;
var defaultintervalOff = 2500;
var defaultintervalSpeed = 1000;
var difficulty = 10; // Could also be max level
var defaultDifficulty = 10;
var correctAnswers = 0;
var gameMode = 0;
var endGame = false;
var lastSquare = 0;
var musicVol = 0.7;
var soundVol = 0.8;
var musicStatus = true;
var soundStatus = true;

var gameOutcomes = {
    wonTheGame: function() {
        victory();
    },
    gameOver: function() {
        gameOver();
    },
    levelUp: function() {
        levelUp();
    }
};

function showResultsBox() {
    $(".mode-btn-row").show();
    setTimeout(function() {
        $(".sgb2").fadeIn(5000);
    }, 3000);
}

function victory() {
    endGame = true;
    if (gameMode === "classic") {
        soundsLibrary.aa10.sound.stop();
        $(".sgb1").fadeOut(2000);
    }
    else if (gameMode === "picture") {
        soundsLibrary.aa12.sound.stop();
        $(".sgb3").fadeOut(5000);
        $('#pic-button' + lastSquare).addClass("disappear");
    }

    randomlyGeneratedNumbers = [];
    soundsLibrary.aa9.sound.play();
    $(".game-message-top").append("<h2 class='game-win-message'>Congratulations! You won the game!</h2>");

    gameLevel = (difficulty + 1);
    appraisalOfPerformance();

    showResultsBox();

    // Play again message....
    $(".game-message-middle").html("<h2 class='middle try-again'>Try again?</h2>");
    $(".game-message-middle").hide();
    setTimeout(function() {
        $(".game-message-middle").fadeIn(2000);
    }, 3500);
    $(".game-selector-para").text("");
    $(".game-selector-header").text("");
    setTimeout(function() {
        $(".mode-box").fadeIn(3000);
    }, 4000);
}

var soundsLibrary = {
    aa1: { sound: new Howl({ src: ['assets/sounds/get-ready.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa2: { sound: new Howl({ src: ['assets/sounds/three.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa3: { sound: new Howl({ src: ['assets/sounds/two.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa4: { sound: new Howl({ src: ['assets/sounds/one.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa5: { sound: new Howl({ src: ['assets/sounds/go.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa6: { sound: new Howl({ src: ['assets/sounds/correct-beep.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa7: { sound: new Howl({ src: ['assets/sounds/next-level.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa8: { sound: new Howl({ src: ['assets/sounds/game-over.mp3', 'assets/sounds/correct-beep.mp3'], volume: musicVol }) },
    aa9: { sound: new Howl({ src: ['assets/sounds/winner.mp3', 'assets/sounds/correct-beep.mp3'], volume: musicVol }) },
    aa10: { sound: new Howl({ src: ['assets/sounds/play-music.mp3', 'assets/sounds/correct-beep.mp3'], loop: true, volume: musicVol }) },
    aa11: { sound: new Howl({ src: ['assets/sounds/final-stage.mp3', 'assets/sounds/correct-beep.mp3'], volume: soundVol }) },
    aa12: { sound: new Howl({ src: ['assets/sounds/grand-slam.mp3', 'assets/sounds/correct-beep.mp3'], loop: true, volume: musicVol }) }
};

//Aesthetic Functions

function onePlusOne() {
    return 2;
}

function getReadyMessage() {
    soundsLibrary.aa1.sound.play();
    $(".game-message-middle").html("<h2 class='game-play-message'>Get Ready for <br>LEVEL " + gameLevel + "</h2>");
}

function threeMessage() {
    soundsLibrary.aa2.sound.play();
    $(".game-message-middle").html("<h2 class='big-num'>3</h2>");
}

function twoMessage() {
    soundsLibrary.aa3.sound.play();
    $(".game-message-middle").html("<h2 class='big-num'>2</h2>");
}

function oneMessage() {
    soundsLibrary.aa4.sound.play();
    $(".game-message-middle").html("<h2 class='big-num'>1</h2>");
}

function memoriseMessage() {
    return $(".game-message-middle").html("<h2 class='game-play-message'>Memorise!</h2>");
}

function repeatMessage() {
    soundsLibrary.aa5.sound.play();
    $(".game-message-middle").html("<h2 class='game-play-message'>Repeat!!!!!!!</h2>");
}

function gameOverMessage() {
    soundsLibrary.aa8.sound.play();
    $(".game-message-top").html("<h2 class='top'>You got it wrong!<br>Game Over!</h2>");
    $(".game-message-middle").html("<h2 class='middle try-again'>Try again?</h2>");
    $(".game-message-middle").hide();
    setTimeout(function() {
        $(".game-message-middle").fadeIn(2000);
    }, 2000);
}

// These functions will flash color on then off...

function colorOneButton(num) {
    //apply color once

    if (gameMode === "classic") {

        var applyColor = "$('#button" + randomlyGeneratedNumbers[num] + "').addClass('button-color" + randomlyGeneratedNumbers[num] + "')";
        setTimeout(applyColor, intervalOn);
    } else if (gameMode === "picture") {
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
    setTimeout(getReadyMessage, 3000);
    setTimeout(threeMessage, 5000);
    setTimeout(twoMessage, 6000);
    setTimeout(oneMessage, 7000);
    setTimeout(memoriseMessage, 8000);

    timerBeforeSequenceStarts(8);
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

    $(".pic-game-button").unbind('click').click(
        function() {
            console.log('I will unbind click so it doesnt fire twice');
        }
    );

    $(".results-image").hide();

    endGame = false;
    randomlyGeneratedNumbers = [];
    clickedButtons = [];
    removePictures();
    gameLevel = 1;
    currentIndex = 0;
    checkanswerIndex = 0;
    intervalOn = defaultIntervalOn;
    intervalOff = defaultintervalOff;
    intervalSpeed = defaultintervalSpeed;
    correctAnswers = 0;
    pushRandomNumber(gameMode);
    startSequence();

    if (gameMode === "picture") {
        removeClass();
        difficulty = 12;

        var newPic = '$(".picture").addClass("pic' + randomlyGeneratedNumbers[0] + '")';

        setTimeout(newPic, 1000);
    }
}

// Step 2 - this creates your new numbers array with the correct sequence

function createANumber(highestNum) {
    var randomNumber = Math.floor(Math.random() * highestNum) + 1;
    return randomNumber;
}

function pushRandomNumber(gameMode) {
    if (gameMode === "classic") {
        for (i = 1; i <= difficulty; i++) {
            var newNumber = createANumber(4);
            randomlyGeneratedNumbers.push(newNumber);
        }
    }

    else if (gameMode === "picture") {
        if (randomlyGeneratedNumbers.length !== 12) {
            var newNumber = createANumber(12);
            if (randomlyGeneratedNumbers.indexOf(newNumber) === -1) {
                randomlyGeneratedNumbers.push(newNumber);
                pushRandomNumber("picture");
            }
            else {
                pushRandomNumber("picture");
            }
        }
        else {
            lastSquare = randomlyGeneratedNumbers[randomlyGeneratedNumbers.length - 1];
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
        if (endGame === false) {
            $(this).addClass("disappear");
        }
    });
}

function removeClass() {
    if (gameMode === "classic") {
        return $(".game-button").removeClass("button-color13");
    }
    else if (gameMode === "picture") {
        setTimeout(function() {
            $(".pic-game-button").removeClass("disappear");
        }, 500);
    }
}
// Step 4 - Once player has clicked a button it is pushed into an array and then the logic begins dependant on the outcome

function levelUp() {
    gameLevel++;
    correctAnswers = 0;
    clickedButtons = [];
    currentIndex = 0;
    checkanswerIndex = 0;
    intervalOn = defaultIntervalOn;
    intervalOff = defaultintervalOff;
    intervalSpeed = defaultintervalSpeed;
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

function recordButtonAndEvaluate(buttonClicked, answerIndex) {
    var clickedButton = buttonClicked;

    clickedButtons.push(clickedButton);
    if (endGame === false) {

        // Check 1a - if the answer is correct we move on to evaluate what we need to do next in the game

        if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
            correctAnswers++;

            // Check 2a - if the answer is correct and the difficulty(max level) matches the correct answers, the player has won!

            if (correctAnswers === difficulty) {
                gameOutcomes.wonTheGame();
            }

            // Check 2b - if the answer is correct but the correct answers are less than the game level, we repeat the check for the next click!

            else if (correctAnswers < gameLevel) {
                if (clickedButtons[answerIndex] === "button" + randomlyGeneratedNumbers[answerIndex]) {
                    checkanswerIndex++;
                    soundsLibrary.aa6.sound.play();
                }
            }

            // Check 2c - if the answer is correct and the correct answers are the same as the game level, we start the process again for the next level!

            else if (correctAnswers === gameLevel && difficulty - 1 === gameLevel) {
                gameOutcomes.levelUp();
                soundsLibrary.aa11.sound.play();
                $(".game-message-middle").html("<h2 class='game-play-message'>FINAL STAGE!</h2>");
            }

            else if (correctAnswers === gameLevel) {
                gameOutcomes.levelUp();
                soundsLibrary.aa7.sound.play();
                $(".game-message-middle").html("<h2 class='game-play-message'>Well done!<br>Time for LEVEL " + gameLevel + "</h2>");
            }
        }

        // Check 1b - if the answer is incorrect the game ends

        else {
            gameOutcomes.gameOver();
        }
    }
}

function recordButtonAndEvaluatePic(buttonClicked, answerIndex) {
    var clickedButton = buttonClicked;

    clickedButtons.push(clickedButton);
    if (endGame === false) {
        // Check 1a - if the answer is correct we move on to evaluate what we need to do next in the game

        if (clickedButtons[answerIndex] === "pic-button" + randomlyGeneratedNumbers[answerIndex]) {
            correctAnswers++;

            // Check 2a - if the answer is correct and the difficulty(max level) matches the correct answers, the player has won!

            if (correctAnswers === difficulty) {
                randomlyGeneratedNumbers = [];
                gameOutcomes.wonTheGame();
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
                gameOutcomes.levelUp();
                soundsLibrary.aa11.sound.play();
                $(".game-message-middle").html("<h2 class='game-play-message'>FINAL STAGE!</h2>");
            }

            else if (correctAnswers === gameLevel) {
                gameOutcomes.levelUp();
                soundsLibrary.aa7.sound.play();
                $(".game-message-middle").html("<h2 class='game-play-message'>Well done!<br>Time for LEVEL " + gameLevel + "</h2>");
            }
        }

        // Check 1b - if the answer is incorrect the game ends

        else {
            randomlyGeneratedNumbers = [];
            gameOutcomes.gameOver();
        }
    }
}

// Game Over Sequence....

function gameOver() {
    endGame = true;
    soundsLibrary.aa8.sound.play();

    appraisalOfPerformance();
    showResultsBox();

    gameOverMessage();

    if (gameMode === "classic") {
        soundsLibrary.aa10.sound.stop();
        $(".sgb1").fadeOut(2000);
    }
    else if (gameMode === "picture") {
        soundsLibrary.aa12.sound.stop();
        removeClass();
        $(".sgb3").fadeOut(2000);
    }

    $(".game-selector-para").text("");
    $(".game-selector-header").text("");
    setTimeout(function() {
        $(".mode-box").fadeIn(3000);
    }, 4000);
}

// Game performance evaluator

function appraisalOfPerformance() {
    $(".results-image").fadeIn(2000);
    if ((gameLevel - 1) / difficulty < 0.5) {
        $(".results-para").text("You are worse than stupid! xD");
        $(".results-image").addClass("patrick");
    }
    else if ((gameLevel - 1) / difficulty < 0.75) {
        $(".results-para").text("You are just OKAY at this..! :p");
        $(".results-image").addClass("trump");
    }
    else if ((gameLevel - 1) / difficulty < 1) {
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

function selectButtonToHighlight(btnRow, selectedBtn){
    $(btnRow + " button").removeClass('btn-on');
    $(selectedBtn).addClass('btn-on');
}

function nextAction() {
    $("button").click(function() {
        switch (this.id) {
            case "play":
                soundsLibrary.aa6.sound.play();
                $(".welcome-box").fadeOut(2000);
                setTimeout(function() {
                    $(".mode-box").fadeIn(2000);
                }, 1000);
                break;
            case "picture":
                $(".game-message-top").html("<h2><h2>");
                $(".game-message-middle").html("<h2><h2>");
                $(".game-message-bottom").html("<h2><h2>");
                soundsLibrary.aa6.sound.play();
                $(".mode-btn-row").hide();
                $(".mode-box").fadeOut(1000);
                $(".sgb1").fadeOut(2000);
                setTimeout(function() {
                    $(".start-pic-mode-box").fadeIn(2000);
                }, 1000);
                setTimeout(function() {
                    $(".sgb3").fadeIn(2000);
                }, 1000);
                break;
            case "classic":
                $(".game-message-top").html("<h2><h2>");
                $(".game-message-middle").html("<h2><h2>");
                $(".game-message-bottom").html("<h2><h2>");
                soundsLibrary.aa6.sound.play();
                $(".mode-btn-row").hide();
                $(".mode-box").fadeOut(1000);
                setTimeout(function() {
                    $(".start-box").fadeIn(2000);
                }, 1000);
                break;
            case "start":
                gameMode = "classic";
                difficulty = defaultDifficulty;
                $(".sgb1").fadeIn(2000);
                soundsLibrary.aa6.sound.play();
                $(".start-box").hide();
                $(".game-message-middle").append("<p>Are you ready?</p>");
                setTimeout(function() {
                    $(".feedback-box").fadeIn(2000);
                }, 1000);
                resetGame();
                soundsLibrary.aa10.sound.play();
                break;
            case "pic-mode-start":
                gameMode = "picture";
                $(".sgb3").fadeIn(2000);
                soundsLibrary.aa6.sound.play();
                $(".start-pic-mode-box").hide();
                $(".game-message-middle").append("<p>Are you ready?</p>");
                setTimeout(function() {
                    $(".feedback-box").fadeIn(2000);
                }, 1000);
                resetGame();
                soundsLibrary.aa12.sound.play();
                break;
            case "close-instructions":
                $('.instructions-container').hide();
                break;
            case "close-settings":
                $('.settings-container').hide();
                break;
            case "music":
                if (musicStatus == true){
                    musicStatus = false;
                    $('#music').removeClass('btn-on');
                } else {
                    musicStatus = true;
                    $('#music').addClass('btn-on');
                }
                soundsLibrary.aa8.sound.mute(!musicStatus);
                soundsLibrary.aa9.sound.mute(!musicStatus);
                soundsLibrary.aa10.sound.mute(!musicStatus);
                soundsLibrary.aa12.sound.mute(!musicStatus);
                break;
            case "sounds":
                if (soundStatus == true){
                    soundStatus = false;
                    $('#sounds').removeClass('btn-on');
                } else {
                    soundStatus = true;
                    $('#sounds').addClass('btn-on');
                }
                soundsLibrary.aa1.sound.mute(!soundStatus);
                soundsLibrary.aa2.sound.mute(!soundStatus);
                soundsLibrary.aa3.sound.mute(!soundStatus);
                soundsLibrary.aa4.sound.mute(!soundStatus);
                soundsLibrary.aa5.sound.mute(!soundStatus);
                soundsLibrary.aa6.sound.mute(!soundStatus);
                soundsLibrary.aa7.sound.mute(!soundStatus);
                soundsLibrary.aa11.sound.mute(!soundStatus);
                break;
            case "easy":
                defaultDifficulty = 6;
                selectButtonToHighlight(".difficulty", this);
                break;
            case "normal":
                defaultDifficulty = 10;
                selectButtonToHighlight(".difficulty", this);
                break;
            case "hard":
                defaultDifficulty = 15;
                selectButtonToHighlight(".difficulty", this);
                break;
            case "slow":
                defaultIntervalOn = 2000;
                defaultintervalOff = 3000;
                defaultintervalSpeed = 1500;
                selectButtonToHighlight(".speed", this);
                break;
            case "medium":
                defaultIntervalOn = 2000;
                defaultintervalOff = 2500;
                defaultintervalSpeed = 1000;
                selectButtonToHighlight(".speed", this);
                break;
            case "fast":
                defaultIntervalOn = 1000;
                defaultintervalOff = 1500;
                defaultintervalSpeed = 700;
                selectButtonToHighlight(".speed", this);
                break;  
            default:
                console.log('No action Available');
        }
    });
    
    $("i").click(function() {
        switch (this.id) {
            case "show-instructions":
                $('.instructions-container').show();
                break;
            case "show-settings":
                $('.settings-container').show();
                break;
            default:
                console.log('No action Available');
        }
})}

// Script 

$(document).ready(function() {
    console.log("ready!");

    // Logo screen displays on loadup

    setTimeout(function() {
        $(".logo").fadeOut(2000); 
    }, 4000); 

    // Next action will allow option buttons to decide which game is played and work through the menus...
    nextAction();

});