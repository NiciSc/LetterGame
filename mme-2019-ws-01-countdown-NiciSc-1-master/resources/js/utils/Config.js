/* eslint-env browser */

/**
 * Configuration object for values shared by multiple components
 */

const Config = {
  // Default duration for each round
  GAME_TIME_IN_MS: 30000,
  // Vowels
  VOWELS: ["A", "E", "I", "O", "U"],
  // Consonants
  CONSONANTS: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P",
    "Q", "R", "S", "T", "V", "W", "X", "Y", "Z",
  ],
  // Total number of letters
  MAX_LETTERS: 9,
  // Fail Score
  FAIL_SCORE: 0,
  // Max Score
  SUPER_WIN_SCORE: 18,
  // restart game time
  RESTART_GAME_TIME: 3000,
  // failed Game
  FAILED_GAME: "OH NO - YOU LOST!",
  // won Game
  WON_GAME: "OH YES - YOU WON!",
  // lettertype to distinguish
  LETTERTYPE: {
    VOWEL: "vowel",
    CONSONANT: "consonant",
  },
  // empty
  EMPTY: "empty",
  //hidden
  HIDDEN: "hidden",
  // no input
  NO_INPUT: 0,
  // word not in wiktionary
  NOT_IN_WIKI: 0,
};

Object.freeze(Config);

export default Config;