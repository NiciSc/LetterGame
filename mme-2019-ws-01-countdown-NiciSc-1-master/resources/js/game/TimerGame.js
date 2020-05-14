/* eslint-env browser */

import { Event, Observable } from "../utils/Observable.js";
import Config from "../utils/Config.js";

class TimerGame extends Observable {

  constructor() {
    super();
  }

  // starts the timer and sends event to stop the timer after the game time (here: 30 seconds, as defined in config)
  startTimer() {
    setTimeout(() => {
      let event = new Event("timerFinished");
      this.notifyAll(event);
    }, Config.GAME_TIME_IN_MS);
  }
}

export default TimerGame;