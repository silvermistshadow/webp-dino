import { Hangman } from '../src/Hangman';

describe('Hangman', function() {
  let testWord = new Hangman("Dino")
  it('should create and store a Hangman object', function() {
    expect(testWord.word).toBe("Dino");
  });


  it('should use letterMatch to match a single letter in a word', function() {
    let testLetterMatch = testWord.letterMatch("o");
    expect(testLetterMatch).toBe(true);
  });

  it('should use letterCorrect to retrieve exactly which letters are correct and their positions', function() {
    let testLetterMatch = testWord.letterMatch("o"); //must be done in order to use the next method
    let testLetterCorrect = testWord.letterCorrect();
    expect(testLetterCorrect).toContain("o");
  }) 


})