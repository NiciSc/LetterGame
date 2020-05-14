/* eslint-env browser */
import StartGameView from "./ui/StartGameView.js";
import LetterGeneratorView from "./ui/LetterGeneratorView.js";
import LetterGeneratorGame from "./game/LetterGeneratorGame.js";
import InputComparisonGame from "./game/InputComparisonGame.js";
import TimerView from "./ui/TimerView.js";
import TimerGame from "./game/TimerGame.js";
import ScoreView from "./ui/ScoreView.js";
import Config from "./utils/Config.js";

// variables
let startGameView,
  letterGeneratorView,
  inputComparisonGame,
  letterGeneratorGame,
  timerView,
  timerGame,
  playerInput,
  vowelButton,
  consonantButton,
  inputField = document.querySelector(".word-input"),
  scoreView;

// main function
function init() {
  // Init Elements
  initElements();
  // Setup Listener
  initListeners();
}

// inizalied Elements
function initElements() {
  startGameView = new StartGameView();
  letterGeneratorView = new LetterGeneratorView();
  inputComparisonGame = new InputComparisonGame();
  letterGeneratorGame = new LetterGeneratorGame();
  timerView = new TimerView();
  timerGame = new TimerGame();
  scoreView = new ScoreView();
}

// initialized Listeners
function initListeners() {
  startGameView.startButtonClicked();
  letterGeneratorView.buttonClicked();
  letterGeneratorView.addEventListener("letterAdded", onLetterAdded);
  letterGeneratorGame.addEventListener("lettersFilled", onLettersFilled);
  timerGame.addEventListener("timerFinished", onTimerFinished);
  inputComparisonGame.addEventListener("compareFinished", onCompareFinished);
}

function onLetterAdded(event) {
  let newLetter, letterType = event.data;

  switch (letterType) {
    case Config.LETTERTYPE.VOWEL:
      newLetter = letterGeneratorGame.getRandomVowel();
      break;
    case Config.LETTERTYPE.CONSONANT:
      newLetter = letterGeneratorGame.getRandomConsonant();
      break;
    default:
  }

  letterGeneratorGame.addLetterToArray(newLetter);
  letterGeneratorView.addLetterToView(newLetter);
}

// callback function when letters are filled
function onLettersFilled() {
  timerGame.startTimer();
  timerView.startTimer();
  buttonDisabled();
}

// callback function when timer is finished
function onTimerFinished() {
  // timer animation is stopped
  timerView.stopTimer();
  // input is disabled
  disableInput();

  // input is checked for validity
  playerInput = document.querySelector(".word-input").value.toLowerCase();
  if (letterGeneratorGame.isValidInput(playerInput) && playerInput.length !== Config.NO_INPUT) {
    inputComparisonGame.checkInWiki(playerInput);
  } else {
    scoreView.changeScore(Config.FAIL_SCORE);
    scoreView.gameLose();
    setTimeout(resetAll, Config.RESTART_GAME_TIME);
  }
}

// callback function when wiktionary check is done
function onCompareFinished(event) {
  // score is set
  let score = event.data;
  scoreView.changeScore(score);
  if (score > Config.NOT_IN_WIKI) {
    scoreView.gameWon();
  } else {
    scoreView.gameLose();
  }

  setTimeout(resetAll, Config.RESTART_GAME_TIME);
}

// buttons get disabled to not be clickable anymore
function buttonDisabled() {
  vowelButton = document.querySelector(".add-vowel");
  consonantButton = document.querySelector(".add-consonant");
  vowelButton.style.pointerEvents = "none";
  consonantButton.style.pointerEvents = "none";
}

// input field getting disabeld so input can not be changed 
function disableInput() {
  inputField.disabled = true;
}

// page is reloaded --> game is reset and can be played again
function resetAll() {
  document.location.reload();
  inputField.value = "";
}

init();