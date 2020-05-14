/* eslint-env browser */
class StartGameView {

  // listens whether the start button is clicked or not. If it is clicked the method "hideMenuScreen" is executed
  startButtonClicked() {
    let startButton = document.querySelector(".button.start-game");
    startButton.addEventListener("click", this.hideMenuScreen);
  }

  // hides the MenuScreen and is executed in the method above ("startButtonClicked") when the StartButton is clicked
  hideMenuScreen() {
    let menuScreen = document.getElementById("menu-screen");
    menuScreen.style.display = "none";
  }
}

export default StartGameView;