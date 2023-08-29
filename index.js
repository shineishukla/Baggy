$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});


// Function to add a product to the cart
function addToCart(productName, quantity, price) {
  const product = {
      name: productName,
      qty: quantity,
      price: price
  };

  cart.push(product);
  updateCartDisplay();
  updateCartCount(); // Call the function to update cart count
}

// Function to update the cart count
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
}

// Call the updateCartDisplay and updateCartCount functions to initialize the cart display and count
updateCartDisplay();
updateCartCount();






