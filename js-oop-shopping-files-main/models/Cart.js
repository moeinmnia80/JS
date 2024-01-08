import Display from "./display.js";

class Cart extends Display {
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.toShow = [];
  }

  createCart(data, qty) {
    const cartEle = document.createElement("div");
    cartEle.classList.add("card__list-items");
    cartEle.innerHTML = this.productImage(data);
    cartEle.innerHTML += this.productInfo(data);
    cartEle.innerHTML += this.productControl(data, qty);

    this.parent.appendChild(cartEle);
  }

  productImage(data) {
    const { image, alt } = data;
    return `<img src="${image}" alt="${alt}" class="cart__list-img">`;
  }
  productInfo(data) {
    const { name, price } = data;
    return `
          <div class="cart-info">
            <h3 class="cart-info__title">${name}</h3>
            <span class="cart-info__price">$${price}</span>
          </div>
        `;
  }
  productControl(data, qty) {
    const { id } = data;
    return `
        <div class="cart-value">
            <div class="cart-value__count">
                <button id="value-decrease" data-id="${id}">-</button>
                <span id="value">${qty}</span>
                <button id="value-increase" data-id="${id}">+</button>
            </div>
            <button class="cart-value__remove" data-id="${id}">Remove</button>
        </div>
    `;
  }
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;
    if (tagName !== "BUTTON") return;
    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "Remove":
        this.remove(id);
        break;
    }
  }
  increase(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showProducts();
  }
  decrease(id) {
    const index = this.products.findIndex((p) => p.id === +id);
    this.products.splice(index, 1);
    this.showProducts();
  }
  remove(id) {
    this.products = this.products.filter((p) => p.id !== +id);
    this.showProducts();
  }
  totalPrice() {
    const total = this.products.reduce((acc, cur) => (acc += cur.price), 0);
    this.price.innerText = total;
  }
}

export default Cart;
