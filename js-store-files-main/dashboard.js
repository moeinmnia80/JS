import authHandler from "./utils/authorization.js";
import { fetchData } from "./utils/httpReq.js";
import { getCookie } from "./utils/cookie.js";

let users = null;

const loader = document.getElementById("loader");
const logoutButton = document.getElementById("logout");
const usersContainer = document.querySelector(".users");
const init = async () => {
  try {
    users = await fetchData("users");
    console.log(users);
    if (users) loader.style.display = "none";
    showUsers();
  } catch (e) {
    alert(`${e.message}`);
  }
};

const showUsers = () => {
  users.forEach((user, index) => {
    const userNumber = index + 1;
    usersContainer.innerHTML += `
      <div class="users__info">
        <div class="info__number">${userNumber}</div>
        <div class="info__name"><i class="fa-solid fa-signature"></i> Name: <div class="name__text">${
          user.name.firstname + user.name.lastname
        }</div> </div>
        <div class="info__username"><i class="fa-solid fa-user"></i> User Name: <div class="username__text">${
          user.username
        }</div></div>
        <div class="info__email"><i class="fa-solid fa-envelope"></i> E-mail: <div class="email__text">${
          user.email
        }</div></div>
        <div class="info__phone"><i class="fa-solid fa-phone"></i> Phone: <div class="phone__text">${
          user.phone
        }</div></div>
        <div class="info__address"><i class="fa-solid fa-address-book"></i> Address: <div class="address__text">${
          user.address.city
        } - ${user.address.street} - ${user.address.zipcode}</div></div>
      </div>
    `;
  });
};
const logoutHandler = () => {
  const token = getCookie();
  const date = new Date().toUTCString();
  document.cookie = `token=${token.token}; expires=${date}; path=/`;
  // document.cookie = "token=;max-age=0";
  location.assign("index.html");
};

window.addEventListener("DOMContentLoaded", authHandler);
window.addEventListener("load", init);
logoutButton.addEventListener("click", logoutHandler);
