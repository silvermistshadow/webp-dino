export class Hangman {
  constructor(word) {
    this.word = word;
  }

  letterMatch(letter) {
    let splitWord = this.word.split('');
    letter = letter.toLowerCase();
    for (let x = 0; x<splitWord.length; x++) {
      if (splitWord.includes(letter)) {
        return true;
      }
    }
  }
  
}
