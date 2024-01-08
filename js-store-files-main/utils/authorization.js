import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;
  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    console.log(cookie, url);
    location.assign("index.html");
    return false;
  } else if (!cookie && url.includes("cart")) {
    location.assign("auth.html");
  }
};

export default authHandler;
