const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
// check winner
const checkWinner = (player, computer) => {
  // game policy
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissor" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "rock" ? "computer" : "player";
  }
};
const showResult = (result) => {
  if (result === "player") {
    console.log("you win");
    playerScore++;
  } else if (result === "computer") {
    console.log("you lose");
    computerScore++;
  } else {
    console.log("It's a tie");
  }
  console.log(`Your Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log("-------------------");
};
const playGame = () => {
  // player choice
  const playerChoice = prompt("choose one of rock , paper or scissor");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`Your Choice: ${playerChoice.toLowerCase()}`);
  } else {
    console.log("You cheated!");
    return; // برای اینکه دیگه ادامه پیدا نکنه برنامه
    // چون داخل تابع هست از ریترن استفاده کردیم
    // و باید بدونیم یکی از کاربردهای ریترن این هستش متوقف کردن تابع
  }
  // computer choice
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer Choice: ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  if (playerScore === 5 || computerScore === 5) {
    return playerScore === 5
      ? console.log("player winner")
      : console.log("computer winner");
  }
  playGame(); // برای اینکه هی پشت سرهم اجرا بشه
  // ما اجازه اینکارو داریم که تابعی رو درون خودش هم فراخوانی کنیم
};
playGame();
