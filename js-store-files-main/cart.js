import getCartData from "./utils/cartData.js";
import shortenText from "./utils/stringFunc.js";
import authHandler from "./utils/authorization.js";

let qty = [];
let toShow;
let data;
let totalPrice = 0;
let discountInput;
let discountedPrice = 0;
let payAledPrice;

const loader = document.getElementById("loader");
const mainContainer = document.querySelector(".main");
const productsContainer = document.getElementById("products");
const detailContainer = document.getElementById("details");
console.dir(mainContainer);
const init = () => {
  data = getCartData() || null;
  if (data.length) {
    loader.style.display = "none";
  } else {
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
    mainContainer.style.height = "60vh";
    mainContainer.innerHTML = `
        <div class="main__notice">
            <p class="notice__text">
                The shopping cart list is empty
            </p>
        </div>
        
      `;
  }

  toShow = data.filter((p, index) => {
    return index === data.findIndex((o) => p.id === o.id);
  });
  quantity(data);
};

globalThis.removeShop = (id) => {
  data = toShow.filter((p) => {
    return p.id !== id;
  });
  localStorage.setItem("shopList", JSON.stringify(data));
  init();
};
globalThis.increase = (id) => {
  toShow.forEach((product) => {
    if (product.id === id) {
      data.push(product);
    }
  });
  localStorage.setItem("shopList", JSON.stringify(data));
  init();
};
globalThis.decrease = (id) => {
  const start = data.findIndex((p) => p.id === id);
  data.splice(start, 1);
  localStorage.setItem("shopList", JSON.stringify(data));
  init();
};
globalThis.calcPrice = (totalP) => {
  console.log(totalP);
  const discountCode = discountInput.value;
  console.log(discountCode);
  if (discountCode === "fall-2023") {
    discountedPrice = ((totalP * 20) / 100).toFixed(2);
    payAledPrice = ((totalP * 80) / 100).toFixed(2);
    console.log(payAledPrice, discountedPrice);
  } else {
    payAledPrice = totalP;
  }
  init();
};
const price = (qty) => {
  return toShow.reduce((acc, cur) => (acc += cur.price * qty), 0);
};
const quantity = (data) => {
  productsContainer.innerHTML = "";
  toShow.forEach((product) => {
    qty = data.filter((p) => product.id === p.id).length;
    totalPrice = price(qty).toFixed(2);
    console.log(totalPrice);
    createCart(product, qty, totalPrice);
  });
};
const createCart = (product, qty, totalP) => {
  const title = shortenText(product.title);
  productsContainer.innerHTML += `
        <div class="main__product">
            <div class="product__image">
                <img src="${product.image}" alt="" class="image__img">
            </div>
            <div class="product__name">
                <p class="name__text">${title}</p>
            </div>
            <div class="product__number">
                <span id="decrease" onclick="decrease(${product.id})">-</span>
                <p class="number__text">${qty}</p>
                <span id="increase" onclick="increase(${product.id})">+</span>
            </div>
            <div class="product__remove">
                <button id="remove-button" onclick="removeShop(${product.id})">Remove</button>
            </div>
        </div>
    `;
  detailContainer.innerHTML = `
      <div class="main__info">
         <div class="total__price">Total Price: <span>$${totalP}</span></div>
         <div class="info__discount">
            <label>
                <input type="text" placeholder="Please enter discount code" id="code-input">
                <button id="discount-button" onclick="calcPrice(${totalP})">Do</button>
            </label>
        </div>
        <div class="finally__price">
            <div class="price__discount">
                <p class="price__discounted">discount: </p>
                <span class="number__discount">${discountedPrice}</span>
            </div>            
            <div class="price_payable">
                <p class="price__payabled">payable: </p>
                <span class="number__payable">${payAledPrice}</span>
            </div>
        </div>
      </div>
    `;
  discountInput = document.getElementById("code-input");
};

window.addEventListener("DOMContentLoaded", authHandler);
window.addEventListener("load", init);
