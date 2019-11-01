import $ from 'jquery';
import './styles.css';
import { Hangman } from './Hangman';


$(document).ready(function() {
  let hangGame = new Hangman();
  $("#start-button").click(async function() {
    $(".game").show();
    await hangGame.getDino();
    console.log(hangGame.word);
  })


})