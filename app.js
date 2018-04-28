var inquirer = require('inquirer');
var Word = require('./wordClass');
var wordList = require('./wordLists');


var trythisWord = '';
var guessedCharArray = [];
var randNum;

function playHM() {
    randNum = (Math.floor(Math.random() * wordList.length));
    trythisWord = new Word(wordList[randNum]);
    guessedCharArray = [];
    promptUser();
};

function promptUser() {
    var uInput = '';
    console.log('                   ');
    // console.log(trythisWord.wordGuessed());
    if (trythisWord.numOfGuessesLeft !== 0 && trythisWord.wordGuessed() !== true) {
        inquirer.prompt([{
                type: "input",
                name: "userInput",
                message: "Guess a Letter",
            },

        ]).then(function (inquirerResponse) {
            uInput = inquirerResponse.userInput;
            if (uInput != '' && uInput != null && guessedCharArray.indexOf(uInput) === -1) {
                guessedCharArray.push(uInput);
                if (!trythisWord.checkChar(uInput)) {
                    trythisWord.decrementGuessesLeft();
                }
            }
            trythisWord.displayWord();
            if (trythisWord.wordGuessed !== true) {
                console.log('Number of Guesses Left:' + trythisWord.numOfGuessesLeft);
                // trythisWord.displayWord();

                if (trythisWord.numOfGuessesLeft === 0) {
                    console.log('Sorry!! No Guesses Left!!');
                    console.log('Correct Word:' + wordList[randNum]);
                    return;
                } else {
                    promptUser();
                }

            } else {
                console.log("Word Guessed Correctly!!");
                // trythisWord.displayWord();
                return;
            }
        });
    }

}

playHM();