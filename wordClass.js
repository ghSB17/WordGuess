var ANCharacter = require('./ANChar');

function toANCharacterArray( wordString ){
    var anArray = [];
    for(var i=0;i<wordString.length;i++){
        var anChar = new ANCharacter(wordString[i]);
        
        if(wordString[i] === ' '){
           anChar.guessed=true;
        }
        anArray.push(anChar);
    }
    // console.log(anArray); 
    return anArray;
};


var wordObject = function( wordString ){
    this.wordArr = toANCharacterArray(wordString);
    this.numOfGuessesLeft = 10;
};

wordObject.prototype.wordGuessed = function() {
    var counter=0;
    for(var k=0;k<this.wordArr.length;k++){
        if(!this.wordArr[k].guessed)
            counter++;
    }
    // console.log('Counter:'+counter);
    if( counter>0 )
        return false;
    else
        return true;
}

wordObject.prototype.toString = function(){
    var strWord='';
    for(var j=0;j<this.wordArr.length;j++){
        if(this.wordArr[j].guessed===true){
            strWord+=' '+this.wordArr[j].character;
        } else {
            strWord+=' '+'_'
        }
    }
    return strWord;
};

wordObject.prototype.displayWord= function(){
    console.log(this.toString());
};

wordObject.prototype.checkChar= function( char ){
    var found = false;
    var pos = 0;
    for(var i=0;i<this.wordArr.length;i++){
        if( this.wordArr[i].character.toUpperCase() === char.toUpperCase() ){
            this.wordArr[i].guessed=true;
            found=true;
        }
    }
    return found;
};

wordObject.prototype.decrementGuessesLeft = function() {
    this.numOfGuessesLeft--;
}

module.exports = wordObject;