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



$(document).ready(function() {
  let cartCount = 0;

  function updateCartCount() {
      $('#cart-count').text(cartCount);
  }

  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    cartCount++;

    updateCartCount();

    const productName = $(this).data('product');
    const productPrice = $(this).data('price');

    alert(`Added ${productName} to cart. Price: $${productPrice}`);
  });
  
  $(".cart-icon").click(function() {
    // Redirect to the cart page (replace "cart.html" with your actual cart page URL)
    window.location.href = "cart.html";
  });
});

// JavaScript (cart.js)
document.addEventListener("DOMContentLoaded", function() {
  const addToCartButton = document.getElementById("addToCartButton");
  const cartButton = document.getElementById("cartButton");
  const closeCartButton = document.getElementById("closeCartButton");
  const cartContainer = document.querySelector(".cart-container");
  const cartItemsList = document.getElementById("cart-items");

  // Initialize cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to save the cart to localStorage
  function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Function to add a product to the cart
  addToCartButton.addEventListener("click", function() {
      const product = "Product Name"; // Replace with actual product name
      const price = 20.99; // Replace with actual product price
      
      // Add the product to the cart array
      cart.push({ product, price });

      // Update the cart items displayed in the cart container
      updateCartDisplay();
      saveCart(); // Save the updated cart to localStorage
  });

  // Function to update the cart display
  function updateCartDisplay() {
      // Clear the current cart items
      cartItemsList.innerHTML = "";

      // Iterate through cart items and display them
      cart.forEach(function(item) {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
          cartItemsList.appendChild(listItem);
      });

      // Show the cart container
      cartContainer.style.display = "block";
  }

  // Function to close the cart container
  closeCartButton.addEventListener("click", function() {
      cartContainer.style.display = "none";
  });

  // Function to open the cart container when the "Cart" button is clicked
  cartButton.addEventListener("click", function() {
      updateCartDisplay();
      cartContainer.style.display = "block";
  });

  // Initialize cart display
  updateCartDisplay();
});



