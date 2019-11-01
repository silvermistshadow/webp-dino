import { Hangman } from '../src/Hangman';

describe('Hangman', function() {
  let testWord = new Hangman();
  testWord.word = "Dino";
  testWord.blankArray = new Array(testWord.word.length).fill("");

  it('should create and store a Hangman object', function() {
    expect(testWord.word).toBeDefined();
    expect(testWord.word).toMatch(/\D/);
  });


})