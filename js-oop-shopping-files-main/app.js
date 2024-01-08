import { fetchData } from "./HttpRequest.js";
import Products from "./models/products.js";
import Cart from "./models/Cart.js";
const productNodes = document.getElementById("product");
const cartNodes = document.querySelector(".cart__list");
const totalPrice = document
  .querySelector(".cart__total-price")
  .querySelector("span");
const render = async () => {
  const productData = await fetchData();
  const cartInstance = new Cart(cartNodes, totalPrice);
  const productsInstance = new Products(
    productNodes,
    productData,
    cartInstance,
  );
  productsInstance.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
