import $ from 'jquery';
import './styles.css';
import { Hangman } from './Hangman';


$(document).ready(function() {
  let hangGame = new Hangman();
  $("#word-blanks").empty();
  $("#start-button").click(async function() {
    $(".game").show();
    await hangGame.getDino();
    console.log(hangGame.blankArray); //it really should be defined by now but it's not
    $("#start-button").hide();
    for(let x = 0; x<hangGame.blankArray.length; x++) {
      $("#word-blanks").append("_")
    }
  })


})