import { Hangman } from '../src/Hangman';

describe('Hangman', function() {
  let testWord = new Hangman();
  it('should create and store a Hangman object', function() {
    expect(testWord.word).toMatch(/\D/);
  });


})