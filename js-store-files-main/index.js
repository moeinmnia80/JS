import { fetchData } from "./utils/httpReq.js";
import { getCookie } from "./utils/cookie.js";
import shortenText from "./utils/stringFunc.js";

let products = null;
let category = "all";
let search = "";
let shopList = JSON.parse(localStorage.getItem("shopList")) || [];

const loader = document.getElementById("loader");
const login = document.getElementById("login");
const dashboard = document.getElementById("dashboard");
const leftContainer = document.getElementById("left");
const rightContainer = document.getElementById("right");
const buttons = document.querySelectorAll(".category__button");
const searchButton = document.querySelector(".main-search__button");
const searchInput = document.getElementById("main-search-input");
const basketAmount = document.getElementById("shop-basket__count");
const init = async () => {
  const cookie = getCookie();
  if (cookie) {
    login.style.display = "none";
    dashboard.style.display = "block";
  } else {
    dashboard.style.display = " none";
  }
  products = await fetchData("products");
  showProduct(products);
  basketAmount.innerText = `${
    JSON.parse(localStorage.getItem("shopList"))?.length || 0
  }`;
};
const showProduct = (products) => {
  start();
  leftContainer.innerHTML = "";
  products.forEach((product) => {
    const title = shortenText(`${product.title}`);
    leftContainer.innerHTML += `
        <div class="main__product" data-category="${product.category}">
            <div class="product__feedback">
                <span class="feedback__rating">${product.rating.rate}<i class="fa-solid fa-star"></i></span>
                <span class="feedback__visitor">${product.rating.count}<i class="fa-solid fa-user"></i></span>
            </div>
            <div class="product-image">
                <img src="${product.image}" alt="" class="product-image__img">
            </div>
            <h3 class="product__title">${title}</h3>
            <div class="product__condition">
                <span class="condition__price">$ ${product.price}</span>
                <button class="condition__link" onclick="addedHandler(${product.id})">Buy <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    `;
  });
};
globalThis.addedHandler = async function (id) {
  products.forEach((product) => {
    if (id === product.id) {
      shopList.push(product);
    }
  });
  localStorage.setItem("shopList", JSON.stringify(shopList));
  await init();
};
const filterHandler = () => {
  let filter = products.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(search);
    } else {
      console.log(category);
      return (
        product.title.toLowerCase().includes(search) &&
        product.category.toLowerCase() === category
      );
    }
  });
  showProduct(filter);
};
const searchHandler = () => {
  search = searchInput.value.trim().toLowerCase();
  console.log(category);
  filterHandler();
  searchInput.value = "";
};
const categoryHandler = (event) => {
  category = event.target.innerText.toLowerCase();
  buttons.forEach((button) => {
    if (button.innerText.toLowerCase() === category) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  filterHandler();
};
const start = () => {
  loader.style.display = "none";
  leftContainer.style.display = "flex";
  rightContainer.style.display = "flex";
};

window.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
buttons.forEach((button) => {
  button.addEventListener("click", categoryHandler);
});
