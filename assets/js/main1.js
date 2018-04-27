

function letsPlayMessage() {
    return $("#feedback-text").html("<h2>Memorise!</h2>");
}

function repeatMessage() {
    return $("#feedback-text").html("<h2>Repeat the sequence!</h2>");
}

function gameOverMessage() {
    $(".game-button").addClass("gameover-button-color");
    return $("#feedback-text").html("<h2>You got it wrong!  Game Over!</h2>");
}

function nextLevelMessage() {
    return $("#feedback-text").html(`<h2>Well done! Time for level ${gameLevel}!</h2>`);
}

function createNumbers() {
        var randomNumber = Math.round(Math.random() * 3) + 1;
        randomlyGeneratedNumbers.push(randomNumber);
}

function resetGame() {
    // Reset game level
    var gameLevel = 1;

    // Reset Colors to default
    $(".game-button").removeClass("gameover-button-color");

    // Reset interval to default
    interval = 1000;

    // Clear array
    randomlyGeneratedNumbers = []

    // Create the numbers that corresponde to the buttons that will be in the sequence
    createNumbers();

}

function increaseLevel() {
    gameLevel++;
}

$(document).ready(
    function() {

        // Script

        $("#level-display").text(`${gameLevel}`);

        // Choose a game mode

        $("#single-player").click(function() {
            $("#game-start").show(interval);
        });


        $("#start").click(function() {

            resetGame();

            $("#feedback-text").html("<h2>Get Ready!</h2>");
            setTimeout(letsPlayMessage, interval += gameSpeed);

            // Color the button that matches the correct answer (first number in the array)
            colorCorrectButton(randomlyGeneratedNumbers[0]);

            // Hide the color that has just been highlighted
            removeColor(randomlyGeneratedNumbers[0]);

            // Ask player to repeat sequence
            setTimeout(repeatMessage, interval += gameSpeed);

            // Check if button clicked is the same as the correct answer
            $(".game-button").click(function() {

                // If the button is matched....
                if (this.id === "button" + randomlyGeneratedNumbers[0]) {
                    increaseLevel();
                    nextLevelMessage();
                }

                // If it isn't matched.... game over
                else {
                    gameOverMessage();
                    $("#start").text("Start again?");
                    
                    // Clear array
                    randomlyGeneratedNumbers = [];
                }
            })

        });
    }
);
