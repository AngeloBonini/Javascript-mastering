class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
// aula 15- implementing inheritance, 4min17seg; --->

class ElementAttribute {
  cosntructor(attrNmae, attrValue) {
    this.name = attrNmae;
    this.value = attrValue;
  }
}
class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
  createRootElement(tag, cssClasses, attributes) {
    const rootElem = document.createElement(tag);
    if (cssClasses) {
      rootElem.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElem.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElem);
    return rootElem;
  }
}

class ShoppingCart extends Component {
  items = [];
  set cartValues(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, CurItem) => prevValue + CurItem.price,
      0
    );
    return sum;
  }
  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updateditems = [...this.items];
    updateditems.push(product);
    this.cartValues = updateditems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId)
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item')
    // prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    // return prodEl; 
  }
}

class ProductList extends Component {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor(renderHookId) {
    super(renderHookId)
  }

  render() {
  document.createElement("ul", 'product-list', [new ElementAttribute('id', 'prod-list ')] );
    // prodList.id = 'prod-list';
    // prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      // const prodEl = productItem.render();
      // prodList.append(prodEl);
      productItem.render();
    }
    // return prodList;
  }
}
class ShopPage {
  render() {
    // const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList('app');
     productList.render();
    // renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new ShopPage();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
