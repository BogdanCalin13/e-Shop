class Product {
  constructor(name, price, color, items) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.items = items;
  }
}

let prod1 = new Product("TV", 2500, "black", 22);
let prod2 = new Product("Laptop", 3000, "gray", 8);
let prod3 = new Product("iPhone", 8500, "silver", 55);

// ~~~~~ 3.11.2022 ~~~~~

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  deleteProduct(product) {
    let deleted = false;
    for (let i in this.products) {
      if (this.products[i].name === product.name) {
        this.products.splice(i, 1);
        deleted = true;
        break;
      }
    }
    if (deleted) {
      console.log(product.name + " has been deleted.");
    } else {
      console.log(
        product.name + " could not be deleted because it was not found."
      );
    }
  }
  renameProduct(product, rename) {
    for (let i in this.products) {
      if (this.products[i].name === product.name) {
        this.products[i].name = rename;
        console.log(
          "The product's name has been changed to " + product.name + "."
        );
      }
    }
  }

  reserveProduct(product, numberOfProductsToReserve) {
    for (let i in this.products) {
      if (
        this.products[i].name === product.name &&
        product.items > numberOfProductsToReserve
      ) {
        this.products[i].items -= numberOfProductsToReserve;
        console.log(
          "A number of " +
            numberOfProductsToReserve +
            " " +
            product.name +
            "(s)" +
            " has been reserved,"
        );
      } else {
        if (product.items < numberOfProductsToReserve) {
          console.log(
            "There is a number of just " +
              product.items +
              " " +
              product.name +
              "s" +
              " available."
          );
        }
      }
    }
  }
}

let myCart = new Cart();
// myCart.addProduct(prod1);
// myCart.addProduct(prod2);
// myCart.addProduct(prod3);
// console.log(myCart);
// myCart.deleteProduct(prod1);
// console.log(myCart);
// myCart.deleteProduct(prod1);
// console.log(myCart);
// myCart.renameProduct(prod3, "iPad");
// myCart.reserveProduct(prod2, 10);
// myCart.reserveProduct(prod3, 2);

addTV = document.querySelectorAll(".add-cart1");
addTV.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.addProduct(prod1);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});

deleteTV = document.querySelectorAll(".delete-cart1");
deleteTV.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.deleteProduct(prod1);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});

addLaptop = document.querySelectorAll(".add-cart2");
addLaptop.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.addProduct(prod2);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});

deleteLaptop = document.querySelectorAll(".delete-cart2");
deleteLaptop.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.deleteProduct(prod2);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});

addPhone = document.querySelectorAll(".add-cart3");
addPhone.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.addProduct(prod3);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});

deletePhone = document.querySelectorAll(".delete-cart3");
deletePhone.forEach((button) => {
  button.addEventListener("click", function () {
    myCart.deleteProduct(prod3);
    console.log(myCart);
    let numberOfProducts = document.querySelector("span");
    numberOfProducts.innerHTML = myCart.products.length;
  });
});
