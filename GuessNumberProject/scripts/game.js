import { createNotification } from "./notification.js";

export class Game {
  constructor() {
    this.randomNumber = Math.floor(Math.random() * 100 + 1);
    this.numberOfGuess = 0;
    this.state = "lose";
    this.userSelectedNumbers = [];
  }

  validation(value) {
    if (isNaN(value)) {
      this.numberOfGuess--;
      return `Please enter a valid number!`;
    } else if (this.userSelectedNumbers.includes(value)) {
      this.numberOfGuess--;
      return `This number is repeated!`;
    } else if (+value < 1 || +value > 100) {
      this.numberOfGuess--;
      return `please enter a number between (0 to 100) ^_^`;
    } else {
      this.userSelectedNumbers.push(value);
      return true;
    }
  }

  compare(value) {
    this.numberOfGuess++;

    if (this.randomNumber === +value) {
      createNotification("success", "you win");
      this.state = "win";
    } else if (this.randomNumber > +value) {
      createNotification("warning", "your number is smaller");
    } else {
      createNotification("warning", "your number is bigger");
    }
  }

  play(userValue) {
    const validated = this.validation(userValue);

    if (!validated) {
      createNotification("warning", validated);
    } else {
      this.compare(userValue);
    }

    if (this.numberOfGuess === 10 && this.state !== "win") {
      createNotification("error", "Game Over");
    }
  }

  reset() {
    this.randomNumber = Math.floor(Math.random() * 100 + 1);
    this.numberOfGuess = 0;
    this.state = "lose";
    this.userSelectedNumbers = [];
  }

  isGameOver() {
    return this.numberOfGuess >= 10 || this.state === "win";
  }
}
