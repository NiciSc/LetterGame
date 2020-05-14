/* eslint-env browser */
import Client from "../wiktionary/Wiktionary.js";
import Config from "../utils/Config.js";
import { Event, Observable } from "../utils/Observable.js";

let wiktionary = new Client(),
  score;

class InputComparisonGame extends Observable {

  constructor() {
    super();
    this.context = this;
  }

  // using the wiktionary to check if the word exists in the (english) vocabulary
  checkInWiki(word) {
    wiktionary.setLang("en");
    wiktionary.assertWordExist(word)
      .then(() => {
        if (word.length === Config.MAX_LETTERS) {
          score = Config.SUPER_WIN_SCORE;
        } else {
          score = word.length;
        }
        let event = new Event("compareFinished", score);
        this.notifyAll(event);
      }).catch(() => {
        score = Config.FAIL_SCORE;

        // sending an event, that the compare is finished and the score is sent with it
        let event = new Event("compareFinished", score);
        this.notifyAll(event);
      });

  }

}
export default InputComparisonGame;