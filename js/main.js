const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "../auth.html";
}
//********************************Get Products********************************
async function getProducts() {
  try {
    const response = await fetch("https://bd.minimatch.uz/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error creating product");
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error.message);
  }
}

const FormElement = document.querySelector("#FormELinput");
const ProductsElement = document.querySelector(".Products");
const modal_body = document.querySelector(".modal-body");

const products = JSON.parse(localStorage.getItem("products")) || [];
FormElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  let imgEL = e.target[0].value;
  let nameEL = e.target[1].value;
  let description = e.target[2].value;
  let priceEL = Number(e.target[3].value);

  const product = {
    name: nameEL,
    images: [imgEL],
    price: priceEL,
    description,
  };

  try {
    const response = await fetch("https://bd.minimatch.uz/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Error creating product");
    }
    const res = await response.json();

    if (res) {
      alert("success added product");
    } else {
      alert("error added product");
    }
  } catch (error) {
    console.log(error);
  }
  // renderProducts(products); //! Yangi mahsulot qo'shilganda ekranga chiqarish
  FormElement.reset();
});

async function renderProducts() {
  ProductsElement.innerHTML = ""; //! HTML ni tozalash

  const data = await getProducts();

  data.forEach((productEl) => {
    const { images, name, price, _id } = productEl;

    let template = `
    <div class="products__wrapper">
      <img src="${images}" alt="${name}" />
      <div class="products__contents">
        <h1>${name}</h1>
        <hr />
        <br>
        <h4>Price: <span>${price}</span> $</h4>
        <br>
        <div class="add__btn">
        <button id="add__btn-item" onclick="totalClick(1)">
          <i class="fa-solid fa-plus"></i>
        </button>
        <span id="add__span-item">0</span>
        <button id="add__btn-item" onclick="totalClick(-1)">
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
        <hr />
        <button class="btn btn-success" onclick='addProduct("${_id}")'>
          <i class="fa-solid fa-plus"></i>
          Add basket
        </button>
        <button class="btn btn-danger" data-index="${_id}">
          <i class="fa-solid fa-trash"></i>
          Remove basket
        </button>
        <button class="btn btn-warning" data-index="${_id}">
          <i class="fa-solid fa-pen-to-square"></i>
          Edit basket
        </button>
      </div>
    </div>
    `;

    ProductsElement.innerHTML += template;
  });
}
renderProducts(products);

//? Delete Function
ProductsElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    const index = e.target.getAttribute("data-index");

    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(products);
  }
});

//? Edit Function
ProductsElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-warning")) {
    const index = e.target.getAttribute("data-index");

    const ProductImg = prompt("Enter Product Images", products[index].img);
    const ProductName = prompt("Enter product name", products[index].name);
    const ProductPrice = prompt("Enter Product Price", products[index].price);

    products[index] = {
      img: ProductImg,
      name: ProductName,
      price: ProductPrice,
    };

    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(products);
  }
});

//? add Product Element
function addProduct(id) {
  products.filter((product) => {
    if (product.id == id) {
      product.isBasket = true;
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts(products);
    }
    return product;
  });
}

addProduct();

//? counter products
function totalClick(clickCount) {
  const getBtn = document.getElementById("add__span-item");
  const getCounter = parseInt(getBtn.innerHTML) + clickCount;
  getBtn.innerHTML = getCounter;

  if (getCounter < 0) {
    getBtn.innerHTML = 0;
  }

  localStorage.setItem("products", JSON.stringify(products));
}
function logOut() {
  localStorage.removeItem("token");
  window.location.href = "../auth.html";
}

// =================================================================
