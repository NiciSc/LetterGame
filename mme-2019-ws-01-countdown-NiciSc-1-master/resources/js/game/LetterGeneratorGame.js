/* eslint-env browser */

import Config from "../utils/Config.js";
import { Observable, Event } from "../utils/Observable.js";

let letters = [];

class LetterGeneratorGame extends Observable {

  constructor() {
    super();
  }

  // Getter for random vowel
  getRandomVowel() {
    let randomVowel = Config.VOWELS[Math.floor(Math.random() * Config.VOWELS
      .length)];
    return randomVowel;
  }

  // Getter for random consonant
  getRandomConsonant() {
    let randomConsonant = Config.CONSONANTS[Math.floor(Math.random() * Config
      .CONSONANTS.length)];
    return randomConsonant;

  }

  // stores random letters into array, as long as it is not full
  addLetterToArray(letter) {
    if (letters.length < Config.MAX_LETTERS) {
      letters.push(letter.toLowerCase());
    }
    if (letters.length === Config.MAX_LETTERS) {
      let letterEvent = new Event("lettersFilled");
      this.notifyAll(letterEvent);
    }
  }

  // checks if the user input only consists of allowed letters of the array
  isValidInput(word) {
    for (let i = 0; i < word.length; i++) {
      let inputLetter = word.charAt(i);
      if (letters.includes(inputLetter)) {
        let index = letters.indexOf(inputLetter);
        letters.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  }

}

export default LetterGeneratorGame;