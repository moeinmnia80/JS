import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";
import validateForm from "./utils/validation.js";

const userNameInput = document.getElementById("user-name");
const passwordInput = document.getElementById("user-pass");
const loginButton = document.getElementById("login-button");

const submitHandler = async (event) => {
  const username = userNameInput.value;
  const password = passwordInput.value;
  const valid = validateForm(username, password);
  if (!valid) return;
  const JWT_Token = await postData("auth/login", {
    username: username,
    password: password,
  });
  setCookie(JWT_Token.token);
  location.assign("index.html");
};
loginButton.addEventListener("click", submitHandler);
window.addEventListener("DOMContentLoaded", authHandler);
