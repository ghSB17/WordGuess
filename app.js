var inquirer = require('inquirer');
var HMWord = require('./wordClass');


var trythisWord = new HMWord('Any Given Sunday');
var guessedCharArray = []
promptUser();
// trythisWord.displayWord();



function playHM() {
   // var userInput=promptUser();
    console.log('playHM function:::'+userInput);
    // promptUser();
};

function promptUser() {
    var uInput = '';
    console.log(trythisWord.wordGuessed());
    if(trythisWord.numOfGuessesLeft !== 0 && trythisWord.wordGuessed() !== true ){
        inquirer.prompt([
            {
                type: "input",
                name: "userInput",
                message: "Guess a Letter",
            },
            
        ]).then( function(inquirerResponse) {
            console.log(inquirerResponse.userInput +'\n');
            uInput=inquirerResponse.userInput;
            if( guessedCharArray.indexOf(uInput) === -1 ){
                guessedCharArray.push(uInput);
                console.log(guessedCharArray);
                if( !trythisWord.checkChar(uInput) ) {
                    trythisWord.decrementGuessesLeft();
                }
            }
            trythisWord.displayWord();
            if(trythisWord.wordGuessed !== true) {
                console.log('Number of Guesses Left:'+trythisWord.numOfGuessesLeft);
                trythisWord.displayWord();
                if(  trythisWord.numOfGuessesLeft === 0) {
                    console.log('Sorry!! No Guesses Left!!');
                    return;
                } else {
                    promptUser();
                }
                
            } else {
                console.log("Word Guessed Correctly!!");
                trythisWord.displayWord();
                return;
            }
        });
    }
   
}

// } while( trythisWord.numOfGuessesLeft !== 0 && wordGuessed !== true);