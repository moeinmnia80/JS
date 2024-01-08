import Display from "./display.js";

class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }
  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }
  createCard(data) {
    const card = document.createElement("div");
    card.classList.add("product-item");
    card.innerHTML = this.productImage(data);
    card.innerHTML += this.productInfo(data);

    this.parent.appendChild(card);
  }
  productImage(data) {
    const { image, alt } = data;
    return `<img alt="${alt}" src="${image}" class="product__img">`;
  }
  productInfo(data) {
    const { id, name, price } = data;
    return `
          <div class="info">
            <h3 class="info__title">${name}</h3>
            <div class="info__add">
                <span class="info__price">$${price}</span>
                <button class="info__plus" data-id="${id}">+</button>
            </div>
          </div>
        `;
  }
  // handleEvent is object that js know that میشناستش
  handleEvent() {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCard(element.dataset.id);
    }
  }
  addToCard(id) {
    const product = this.products.find((item) => item.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
