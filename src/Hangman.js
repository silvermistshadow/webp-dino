export class Hangman {
  constructor(word) {
    this.word = word;
  }

  letterMatch(letter) {
    let splitWord = this.word.split('');
    letter = letter.toLowerCase();
    let indexes = [], i;
    for (let x = 0; x<splitWord.length; x++) {
      if (splitWord[x] === letter) {
        indexes.push([x]);
        console.log(indexes);
        i = true;
      }
      else {
        i = false;
      }
    }
    return i;
  }
}
