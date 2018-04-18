var ANCharacter = function( char ) {
    this.character=char;
    this.guessed=false;   
}

ANCharacter.prototype.guessedCorrectly = function() {
    this.guessed=true;
}

module.exports = ANCharacter;