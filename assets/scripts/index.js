const button = document.getElementById("button");
const gameBoard = new Game();

let gaming = false;

button.addEventListener("click", () => {
  if (gaming === false) {
    gameBoard.setup();
    gameBoard.run();
    button.blur();
  } else {
    window.location.reload;
  }
});
