export class Hangman {
  constructor() {
    this.word = this.getWord();
    this.guesses = 0;
    this.blankArray;
    this.wordInit = 0;
  }
  getDino() {
    let workAround = this; //the other thing I need to return 
    let dinoAsync = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    dinoAsync.then(function(response) {
      let dinoWord = response;
      workAround.wordInit = 1;
      let blankWait = new Array(dinoWord.length).fill("");
      workAround.blankArray = blankWait;
      return dinoWord;

    }, function(error) {
      $('.showErrors').text(`There was an error retrieving a random dino: ${error.message}`);
    });
  }

  getWord() {
    return this.getDino();

  }

}
