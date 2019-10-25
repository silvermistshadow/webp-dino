import { indexes } from './gvars';
export class Hangman {
  constructor(word) {
    this.word = word;
    this.letterArray = new Array(this.word.length).fill("");
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
        this.letterArray.push(splitWord[indexes[x]]);
      }
      return this.letterArray;
    }
  }

}
