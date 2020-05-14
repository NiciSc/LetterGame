/* eslint-env browser */

import Config from "../utils/Config.js";
import { Event, Observable } from "../utils/Observable.js";

// span is needed fo showing the generated random letters
let span = document.querySelectorAll(".letter"),
  vowelButton = document.querySelector(".button.add-vowel"),
  consonantButton = document.querySelector(".button.add-consonant");

class LetterGeneratorView extends Observable {

  constructor() {
    super();
  }

  // handels what happens when the vowel and consonant buttons are clicked
  buttonClicked() {
    vowelButton.addEventListener("click", this.onButtonClicked.bind(this,
      Config.LETTERTYPE.VOWEL));
    consonantButton.addEventListener("click", this.onButtonClicked.bind(this,
      Config.LETTERTYPE.CONSONANT));

  }

  // makes the letters show in the letter elements
  addLetterToView(letter) {
    for (let i = 0; i < Config.MAX_LETTERS; i++) {
      // checking if span is filled already, when empty filling it and removing empty
      if (span[i].classList.contains(Config.EMPTY)) {
        span[i].innerHTML = letter;
        span[i].classList.remove(Config.EMPTY);
        break;
      }
    }
  }

  onButtonClicked(letterType) {
    let event = new Event("letterAdded", letterType);
    this.notifyAll(event);
  }

}
export default LetterGeneratorView;