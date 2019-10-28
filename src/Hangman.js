import { indexes } from './gvars';
export class Hangman {
  constructor(word) {
    this.word = word;
    this.letterArray = new Array(this.word.length).fill("");
    this.lettersGuessed = [];
    this.correctLetters = 0;
    this.gameCounter = 6;
    this.letterAlreadyGuessed = false;
  }

  isAlreadyGuessed(letter) {
    this.letterAlreadyGuessed = this.lettersGuessed.some(letter); 
    return this.letterAlreadyGuessed;
  }

  letterMatch(letter) {
    let splitWord = this.word.split('');
    letter = letter.toLowerCase();
    let i;
    indexes.length = 0;
    for (let x = 0; x<splitWord.length; x++) {
      if (splitWord[x] === letter) {
        indexes.push(x);
        i = true;
      }
      else {
        i = false;
      }
    }
    return i;
  }

  letterCorrect() {
    if (indexes && indexes.length) {
      let splitWord = this.word.split('');
      for(let x=0; x<indexes.length; x++) {
        this.letterArray[indexes[x]] = splitWord[indexes[x]];
      }
      return this.letterArray;
    }
  }

  hangJudge(letter) {
    if (this.isAlreadyGuessed(letter) === false) {
      this.lettersGuessed.push(letter);
      if (this.letterMatch(letter)) {
        this.letterCorrect();
        this.correctLetters++
      }
      else {
        this.gameCounter--
      }
    }

  }

}
