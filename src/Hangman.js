import { indexes } from './gvars';
export class Hangman {
  constructor(word) {
    this.word = this.getWord();
    this.guesses = 0;
    this.blankArray = this.getBlank();
  }

  getBlank() {
    return new Array(this.word.length).fill("")
  }
  getWord() {
    //Have to rewrite the tests later
    return "Dino";
  }

}
