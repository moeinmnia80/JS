"use strict";
import formatData from "./helper.js";
const CORRECT_BONUS = 10;
const level = localStorage.getItem("level") || "medium";
const URL = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;
const loader = document.getElementById("loader");
const questionBox = document.querySelector(".content__questions");
const questionText = document.getElementById("question");
const answerText = document.querySelectorAll(".answer");
const nextButton = document.getElementById("condition-next");
const finishButton = document.getElementById("condition-finish");
const scoreText = document.getElementById("question-score");
const questionNumber = document.getElementById("question-number");
const error = document.getElementById("error");
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccepted = true;

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    formattedData = formatData(result.results);
    start();
  } catch (err) {
    loader.style.display = "none";
    error.style.display = "block";
  }
};
const showQuestion = (data) => {
  questionNumber.innerText = questionIndex + 1;
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.innerText = question;
  answerText.forEach((button, index) => {
    button.innerText = answers[index];
  });
  console.log(correctAnswer);
};
const checkAnswer = (event, index) => {
  if (!isAccepted) return;
  isAccepted = false;

  const isCorrect = index === correctAnswer;
  if (isCorrect) {
    event.target.classList.add("correct");
    score += CORRECT_BONUS;
    scoreText.innerText = score;
  } else {
    event.target.classList.add("incorrect");
    answerText[correctAnswer].classList.add("correct");
  }
};
const nextHandler = () => {
  questionIndex += 1;
  if (questionIndex < 10) {
    isAccepted = true;
    removeClasses();
    showQuestion();
  } else {
    localStorage.setItem("score", JSON.stringify(score));
    window.location.assign("end.html");
    // we can use of finishHandler()
  }
};
const removeClasses = () => {
  answerText.forEach((button) => {
    button.classList.remove("correct", "incorrect");
  });
};
const finishHandler = () => {
  localStorage.setItem("score", JSON.stringify(score));
  window.location.assign("end.html");
};
const start = () => {
  showQuestion();
  loader.style.display = "none";
  questionBox.style.display = "block";
};
window.addEventListener("load", fetchData);
answerText.forEach((button, index) => {
  button.addEventListener("click", (event) => checkAnswer(event, index));
});
nextButton.addEventListener("click", nextHandler);
finishButton.addEventListener("click", finishHandler);
