import { indexes } from './gvars';
export class Hangman {
  constructor(word) {
    this.word = word;

  }

  letterMatch(letter) {
    let splitWord = this.word.split('');
    letter = letter.toLowerCase();
    let i;
    indexes = [];
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
      
    }
  }

}
