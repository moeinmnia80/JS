const input = document.querySelector(".guest__input");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const checkBtn = document.getElementById("check-btn");
const newGameBtn = document.getElementById("newGame");
const guestNumber = document.getElementById("guest-number");
const duplicate = document.getElementById("duplicate");

// variables
let randomNumber = Math.floor(Math.random() * 100 + 1);
let numberOfGuess = 0;
let state = "lose";
let userValue;
let userSelectedNumbers = [];

// Type Write animation
function createTypeWriter(element, options = {}) {
  const config = {
    typeSpeed: 75,
    eraseSpeed: 35,
    pauseAfterType: 2600,
    pauseAfterErase: 150,
    cursorClass: "tc",
    ...options,
  };

  let currentIndex = 0;

  const type = (text, callback) => {
    let i = 0;
    element.innerHTML = `<span class="${config.cursorClass}"></span>`;

    const step = () => {
      element.innerHTML =
        text.slice(0, i) + `<span class="${config.cursorClass}"></span>`;
      i++;
      if (i <= text.length) setTimeout(step, config.typeSpeed);
      else if (callback) setTimeout(callback, config.pauseAfterType);
    };
    step();
  };

  const erase = (callback) => {
    let text = element.textContent;

    const step = () => {
      text = text.slice(0, -1);
      element.innerHTML = text + `<span class="${config.cursorClass}"></span>`;
      if (text.length > 0) setTimeout(step, config.eraseSpeed);
      else if (callback) setTimeout(callback, config.pauseAfterErase);
    };
    step();
  };

  const cycle = (texts) => {
    const loop = () => {
      erase(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        type(texts[currentIndex], loop);
      });
    };
    type(texts[0], loop);
  };

  return { type, erase, cycle };
}
const typewriter = createTypeWriter(document.querySelector(".guest__label"));
typewriter.cycle([
  "Please enter a number between 1 to 100",
  "then press check 😊",
]);
const checkInput = () => {
  input.value === "" ? (checkBtn.disabled = true) : (checkBtn.disabled = false);
};
// Game policy
const validation = (value) => {
  if (isNaN(value)) {
    numberOfGuess--;
    return `Please enter a valid number!`;
  } else if (userSelectedNumbers.includes(value)) {
    duplicate.classList.add("text-danger");
    numberOfGuess--;
    return `This number is repeated!`;
  } else if (+value < 1 || +value > 100) {
    numberOfGuess--;
    return `please enter a number between (0 to 100) ^_^`;
  } else {
    userSelectedNumbers.push(value);
    return true;
  }
};
const compare = (value) => {
  numberOfGuess++;

  if (randomNumber === +value) {
    createNotification("success", "you win");
    state = "win";
  } else if (randomNumber > +value) {
    createNotification("warning", "your number is smaller");
  } else {
    createNotification("warning", "your number is bigger");
  }
};
const playGame = () => {
  duplicate.classList.remove("text-danger");
  const validated = validation(userValue);
  !validated && createNotification("warning", validated);
  validated && compare(userValue);
  if (numberOfGuess === 10 && state !== "win") {
    createNotification("error", "Game Over");
    return;
  }
};
const createNotification = (status, message) => {
  const notificationBox = document.querySelector(".notification");
  notificationBox.insertAdjacentHTML(
    "beforeend",
    `
      <div class="notification__item notification--${status} border rounded-xsm p-10 fade-in">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${message}
      </div>
    `,
  );
  notificationBox.classList.add("is-show");
  const notifications = document.querySelectorAll(".notification__item");
  notifications.forEach((notification, index) => {
    const timer = setTimeout(() => {
      notification.classList.add("is-hidden");
      clearTimeout(timer);
    }, 4000);
    const timer2 = setTimeout(() => {
      notification.classList.add("d-none");
      clearTimeout(timer2);
    }, 5000);
  });
};
// Event Listener
checkBtn.addEventListener("click", (e) => {
  console.log(randomNumber);
  e.preventDefault();
  numberOfGuess < 10 && state !== "win" && playGame();
  if (numberOfGuess >= 10 || state === "win") {
    checkBtn.disabled = true;
    const timer = setTimeout(() => {
      modal.classList.remove("d-none");
      const typewriter2 = createTypeWriter(modalTitle);
      typewriter2.cycle(
        state === "win"
          ? ["Congratulations... you won", "Perfect"]
          : ["Really ...", "You'll win next time"],
      );
      clearTimeout(timer);
    }, 3000);
  } else {
    checkBtn.disabled = false;
  }
});
input.addEventListener("input", () => {
  checkInput();
  userValue = input?.value;
});
newGameBtn.addEventListener("click", () => {
  modal.classList.add("d-none");
  input.value = null;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  numberOfGuess = 0;
  guestNumber.innerText = numberOfGuess;
  checkBtn.disabled = false;
});
