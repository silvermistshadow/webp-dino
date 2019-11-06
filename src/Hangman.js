export class Hangman {
  constructor() {
    this.word;
    this.guesses = 0;
    this.blankArray;
  }
  async getDino() {
    let workAround = this; //the other thing I need to return is too deep
    let dinoWord;
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
      dinoWord = response;
      let blankWait = new Array(dinoWord.length).fill("_");
      workAround.blankArray = blankWait;
      workAround.word = response;
      return;
    }, function(error) {
      $('.showErrors').text(`There was an error retrieving a random dino: ${error.message}`);
    });
    
  }

}
