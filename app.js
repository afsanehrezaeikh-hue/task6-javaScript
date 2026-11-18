const products = [
  {
    id: "card1",
    image: "./assets/image/bag.webp",
    description: "LIFESTYLE ",
    category: "Urban Backpack",
    text: "made for wherever you go",
    price: "$35",
  },
  {
    id: "card2",
    image: "./assets/image/watch.jpg",
    description: "ACCESSORIES ",
    category: "Classic Wristwatch",
    text: "Timeless looks for every day",
    price: "$120",
  },
  {
    id: "card3",
    image: "./assets/image/shose.avif",
    description: "FOOTWEAR ",
    category: "Every Sneakers",
    text: "Fresh sleps,edorless style",
    price: "$80",
  },
  {
    id: "card4",
    image: "./assets/image/headphone.avif",
    description: "AUDIO ",
    category: "Wireless Headphones",
    text: "Rich sound, all-day comfort ",
    price: "$50",
  },
];

let shopCart = [];
const container = document.getElementById("container");
products.forEach(function (product) {
  let card = document.createElement("div");
  card.classList.add("card");
  let img = document.createElement("img");
  img.src = product.image;
  img.classList.add("img-card");
  card.appendChild(img);
  let description = document.createElement("p");
  description.textContent = product.description;
  description.classList.add("text-card");
  card.appendChild(description);
  let category = document.createElement("span");
  category.textContent = product.category;
  category.classList.add("text-card-span");
  card.appendChild(category);
  let text = document.createElement("p");
  text.textContent = product.text;
  text.classList.add("text-titel");
  card.appendChild(text);
  let pricebButton = document.createElement("div");
  pricebButton.classList.add("price-button");
  card.appendChild(pricebButton);
  let price = document.createElement("span");
  price.textContent = product.price;
  price.classList.add("text-card-price");
  pricebButton.appendChild(price);
  let button = document.createElement("button");
  button.classList.add("text-card-price-button");
  button.textContent = "+Add to card";
  pricebButton.appendChild(button);
  container.appendChild(card);

  button.addEventListener("click", function () {
    shopCart.push(product);
    pText.textContent = `shoppingCart (${shopCart.length})`;
    updateCart();
  });
});

const result = document.getElementById("result");
let shoppingCart = document.createElement("div");
result.appendChild(shoppingCart);
shoppingCart.classList.add("shopping-Cart");

let shpoppingButton = document.createElement("button");
shpoppingButton.textContent = "Clear All";
shpoppingButton.classList.add("shopping-button");
shoppingCart.appendChild(shpoppingButton);

let shoppingText = document.createElement("div");
shoppingText.classList.add("shopping-text");
shoppingCart.appendChild(shoppingText);

let spanText = document.createElement("span");
spanText.textContent = "pay price";
spanText.classList.add("span-text");
shoppingText.appendChild(spanText);

let pText = document.createElement("p");
pText.classList.add("p-text");
pText.textContent = "shopping cart (0)";
shoppingText.appendChild(pText);

let mainShoppingCart = document.createElement("div");
mainShoppingCart.classList.add("main-shopping");
result.appendChild(mainShoppingCart);

let buttonMainShopping = document.createElement("button");
buttonMainShopping.classList.add("button-main-shop");
buttonMainShopping.textContent = "\u{1F6D2}";
mainShoppingCart.appendChild(buttonMainShopping);

let textMainShopping = document.createElement("p");
textMainShopping.classList.add("text-main-shopping");
textMainShopping.textContent = "!your cart is empty.Add something you love";
mainShoppingCart.appendChild(textMainShopping);

let footMainShooping = document.createElement("div");
footMainShooping.classList.add("foot-main-shop");
result.appendChild(footMainShooping);

let textFootMain = document.createElement("p");
textFootMain.classList.add("text-foot-shop");
textFootMain.textContent = "Subtotal";
footMainShooping.appendChild(textFootMain);

let textFootMainPrice = document.createElement("p");
textFootMainPrice.classList.add("text-foot-price");
textFootMainPrice.textContent = "$0";
footMainShooping.appendChild(textFootMainPrice);

function updateCart() {
  textMainShopping.textContent = "";
  shopCart.forEach((product) => {
    textMainShopping.textContent += ` ,  ${product.description}  :   ${product.price}  `;
  });
}

shpoppingButton.addEventListener("click", () => {
  shopCart = [];
  pText.textContent = `Shopping Cart (${shopCart.length})`;
  updateCart();
});
