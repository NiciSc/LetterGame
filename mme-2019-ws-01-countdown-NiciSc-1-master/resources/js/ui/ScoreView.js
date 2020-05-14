/* eslint-env browser */

import Config from "../utils/Config.js";

let scoreScreen = document.getElementById("results"),
  scoreNumber = document.querySelector(".points"),
  hint = document.querySelector(".hint");

class ScoreView {

  // showes score screen and changes the score number to the accomplished score
  changeScore(score) {
    scoreNumber.innerHTML = score;
    scoreScreen.classList.remove(Config.HIDDEN);
  }

  gameWon() {
    hint.innerHTML = Config.WON_GAME;
  }

  gameLose() {
    hint.innerHTML = Config.FAILED_GAME;
  }
}

export default ScoreView;