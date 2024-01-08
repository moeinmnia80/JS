const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let numberOfGuess = 1;
const validation = (value) => {
  if (isNaN(value)) {
    return `Please enter a valid number`;
  } else if (+value < 1 || +value > 100) {
    return `please enter a number between (0 to 100)`;
  }
};

const compare = (value) => {
  numberOfGuess++;
  if (randomNumber === +value) {
    console.log("well done");
  } else if (randomNumber > +value) {
    console.log("your number is smaller");
    playGame();
  } else {
    console.log("your number is bigger");
    playGame();
  }
};

const playGame = () => {
  const userValue = prompt("please enter a value: ");
  if (userValue === null) return;
  if (numberOfGuess >= 10) {
    console.log("Game Over");
    return;
  }
  const validated = validation(userValue);
  if (validated) {
    console.log(validated);
    return playGame();
  }
  compare(userValue);
};
// توابع ورودی هارو به رشته تبدیل میکنند دقت شود
playGame();
