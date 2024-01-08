const score = document.querySelector(".score__questions");
const userName = document.getElementById("player-name");
const saveButton = document.getElementById("save-data");
const loader = document.getElementById("loader");
const scoreBox = document.querySelector(".score");
const informationBox = document.querySelector(".player__information");
const scoreGame = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const getData = () => {
  score.innerText = scoreGame;
  loader.style.display = "none";
  scoreBox.style.display = "block";
  informationBox.style.display = "flex";
};

const saveData = () => {
  if (!userName.value || !score) {
    alert("Invalid username or score");
  } else {
    const scorePlayer = {
      username: userName.value,
      score: scoreGame,
    };
    highScores.push(scorePlayer);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    userName.value = "";
    localStorage.removeItem("scores");
    window.location.assign("index.html");
  }
};
window.addEventListener("load", getData);
saveButton.addEventListener("click", saveData);
