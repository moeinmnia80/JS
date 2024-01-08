const buttons = document.querySelectorAll(".gallery__button");
const searchInput = document.getElementById("search__input");
const products = document.querySelectorAll(".product__items");
const searchInputPrice = document.querySelector(".gallery__search-price");
const searchButton = document.querySelector(".gallery__search-price__button");
const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
};
const selection = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  // const {filter} = event.target.dataset
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "flex";
    } else {
      filter === category
        ? (product.style.display = " flex")
        : (product.style.display = "none");
    }
  });
};
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
};
const searchPriceHandler = (event) => {
  const searchPriceValue = +searchInputPrice.value;
  console.log(searchPriceValue);
  products.forEach((product) => {
    const productValue = +product.children[2].innerText.split(" ")[1];
    if (!searchPriceValue) {
      product.style.display = " flex";
    } else {
      searchPriceValue === productValue
        ? (product.style.display = "flex")
        : (product.style.display = "none");
    }
  });
};
const start = () => {
  searchInput.addEventListener("keyup", searchHandler);
  buttons.forEach((button) => {
    button.addEventListener("click", selection);
  });

  searchButton.addEventListener("click", searchPriceHandler);
};
window.addEventListener("load", start);
