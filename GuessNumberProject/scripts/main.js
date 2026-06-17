import { DOM } from "./dom.js";
import { createTypeWriter } from "./typewriter.js";
import { Game } from "./game.js";

// Initialize game
const game = new Game();
let userValue;

// Type Write animation for label
const typewriter = createTypeWriter(DOM.guestLabel);
typewriter.cycle([
  "Please enter a number between 1 to 100",
  "then press check 😊",
]);

// Check input validation
const checkInput = () => {
  DOM.input.value === ""
    ? (DOM.checkBtn.disabled = true)
    : (DOM.checkBtn.disabled = false);
};

// Event Listeners
DOM.checkBtn.addEventListener("click", (e) => {
  console.log({
    correctAnswer: game.randomNumber,
    userValue,
    numberOfGuess: game.numberOfGuess,
    state: game.state,
    userSelectedNumbers: game.userSelectedNumbers,
  });
  e.preventDefault();

  if (!game.isGameOver()) {
    game.play(userValue);
  }

  if (game.isGameOver()) {
    DOM.checkBtn.disabled = true;
    const timer = setTimeout(() => {
      DOM.modal.classList.remove("d-none");
      const typewriter2 = createTypeWriter(DOM.modalTitle);
      typewriter2.cycle(
        game.state === "win"
          ? ["Congratulations... you won", "Perfect"]
          : ["Really ...", "You'll win next time"],
      );
      clearTimeout(timer);
    }, 3000);
  } else {
    DOM.checkBtn.disabled = false;
  }
});

DOM.input.addEventListener("input", () => {
  checkInput();
  userValue = DOM.input?.value;
});

DOM.newGameBtn.addEventListener("click", () => {
  DOM.modal.classList.add("d-none");
  DOM.input.value = null;
  game.reset();
  DOM.guestNumber.innerText = game.numberOfGuess;
  DOM.checkBtn.disabled = false;
});
