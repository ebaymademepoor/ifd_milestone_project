describe("Game Functions", function() {

    beforeEach(function() {
        resetGame();
        randomlyGeneratedNumbers = [];
    });

    describe("Initialise", function() {
        it("should return a pass to ensure that Jasmine has initialised properly (1 + 1 = 2)", function() {
            expect(onePlusOne()).toBe(2);
        });
    });
    
    describe("Set Up", function() {
        it("should create a random number between 1 and arguement - 4 in this instance (caution - results could vary each run due to the random nature of the number generated!)", function() {
            expect(createANumber(4)).not.toBeGreaterThan(4);
            expect(createANumber(4)).not.toBeLessThan(1);
        });
        it("should create an array of numbers for classic mode equal to the game difficulty", function() {
            pushRandomNumber("classic");
            expect(randomlyGeneratedNumbers.length).toBe(defaultDifficulty);
        });
        it("should create an array of numbers 1 through 12 for picture mode", function() {
            pushRandomNumber("picture");
            expect(randomlyGeneratedNumbers.length).toBe(12);
            expect(randomlyGeneratedNumbers).toEqual(jasmine.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
        });
    });
    
    describe("Game Outcomes - classic mode", function() {
        describe("Player moves to next level", function() {
            it("Should call the levelUp method and move player to the next level, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                gameMode = "classic";
                recordButtonAndEvaluate("button" + randomlyGeneratedNumbers[0], 0);
                expect(gameOutcomes.levelUp).toHaveBeenCalled();
                expect(gameOutcomes.gameOver).not.toHaveBeenCalled();
                expect(gameOutcomes.wonTheGame).not.toHaveBeenCalled();
            });
        });
        describe("Player selects the wrong button and the game ends", function() {
            it("Should call the gameOver method and end the game, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                gameMode = "classic";
                recordButtonAndEvaluate("button" + randomlyGeneratedNumbers[1], 0);
                expect(gameOutcomes.levelUp).not.toHaveBeenCalled();
                expect(gameOutcomes.gameOver).toHaveBeenCalled();
                expect(gameOutcomes.wonTheGame).not.toHaveBeenCalled();

            });
        });
        describe("Player selects the correct button on final level and wins the game", function() {
            it("Should call the wonTheGame method and end the game, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                clickedButtons = [1, 2, 3, 4, 1, 2, 3, 4, 1];
                gameMode = "classic";
                correctAnswers = difficulty - 1;
                recordButtonAndEvaluate("button" + randomlyGeneratedNumbers[9], 9);
                expect(gameOutcomes.wonTheGame).toHaveBeenCalled();
                expect(gameOutcomes.levelUp).not.toHaveBeenCalled();
                expect(gameOutcomes.gameOver).not.toHaveBeenCalled();
            });
        });
    });
    
    describe("Game Outcomes - picture mode", function() {
        describe("Player moves to next level", function() {
            it("Should call the levelUp method and move player to the next level, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                gameMode = "picture";
                recordButtonAndEvaluate("pic-button" + randomlyGeneratedNumbers[0], 0);
                expect(gameOutcomes.levelUp).toHaveBeenCalled();
                expect(gameOutcomes.gameOver).not.toHaveBeenCalled();
                expect(gameOutcomes.wonTheGame).not.toHaveBeenCalled();
            });
        });
        describe("Player selects the wrong button and the game ends", function() {
            it("Should call the gameOver method and end the game, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                gameMode = "picture";
                recordButtonAndEvaluate("pic-button" + randomlyGeneratedNumbers[1], 0);
                expect(gameOutcomes.levelUp).not.toHaveBeenCalled();
                expect(gameOutcomes.gameOver).toHaveBeenCalled();
                expect(gameOutcomes.wonTheGame).not.toHaveBeenCalled();

            });
        });
        describe("Player selects the correct button on final level and wins the game", function() {
            it("Should call the wonTheGame method and end the game, no other outcome should be called", function() {
                spyOn(gameOutcomes, "levelUp");
                spyOn(gameOutcomes, "gameOver");
                spyOn(gameOutcomes, "wonTheGame");
                randomlyGeneratedNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
                clickedButtons = [1, 2, 3, 4, 1, 2, 3, 4, 1];
                gameMode = "picture";
                correctAnswers = difficulty - 1;
                recordButtonAndEvaluate("pic-button" + randomlyGeneratedNumbers[9], 9);
                expect(gameOutcomes.wonTheGame).toHaveBeenCalled();
                expect(gameOutcomes.levelUp).not.toHaveBeenCalled();
                expect(gameOutcomes.gameOver).not.toHaveBeenCalled();
            });
        });
    });
    
});
