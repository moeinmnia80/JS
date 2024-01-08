class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = ``;
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCart(product, qty);
    });
    this.totalPrice();
    if (this.toShow.length === 0) {
      this.parent.innerHTML = `<div class="cart__list"><h5 class="cart__list-title">Empty</h5></div>`;
    }
  }
}

export default Display;
