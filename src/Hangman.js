export class Hangman {
  constructor(word) {
    this.word = word;
  }

  wordSeperator() {
    let inputWord = this.word;
    let wordArray = inputWord.split('');
    console.log(wordArray);
    return wordArray;
  }
}
