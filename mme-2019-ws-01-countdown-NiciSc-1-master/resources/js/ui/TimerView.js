/* eslint-env browser */

let hand = document.getElementById("hand");

class TimerView {
  // starts timer animation
  startTimer() {
    hand.classList.add("hand-animated");
  }
  // stopps timer animation
  stopTimer() {
    hand.classList.remove("hand-animated");
  }
}

export default TimerView;