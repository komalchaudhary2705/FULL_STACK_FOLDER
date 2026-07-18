
const products = [
  {
    id: 1,
    name: "Bread",
    Price: 200,
  },
  {
    id: 2,
    name: "Milk",
    Price: 800,
  },
  {
    id: 3,
    name: "Eggs",
    Price: 400,
  },
  {
    id: 4,
    name: "Sugar",
    Price: 500,
  },
  {
    id: 5,
    name: "Salt",
    Price: 200,
  },
];

let cart = [];
const productList = document.getElementById("prod-list");
const totalAmount = document.getElementById("totalAmount");
const cartCount = document.getElementById("cartCount");

function renderProducts() {
  productList.innerHTML = ""
  products.forEach((p, index) => {
    productList.innerHTML += ` <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.Price}</td>
            <td> <button onclick="addToCart(${p.id})">Cart +</button></td>
          </tr>`;
  });
}

// ===================
// cart


function addToCart(id) {
  const product = products.find((item) => {
    return item.id === id;
  });

  if (product) {
    cart.push(product);
  }

  alert("add to cart btn");
  console.log(product);
  updateCartDetail();
}

// ====================
function updateCartDetail() {
  cartCount.innerHTML = `Cart (${cart.length})`;
  let total = cart.reduce((totalBill,item)=>{
   return totalBill + item.Price
  },0)
  totalAmount.innerText = `Total Bill : RS ${total}`
}

// ==================

renderProducts();
