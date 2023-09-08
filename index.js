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


//add to cart function

// Function to handle adding items to the cart
function addToCart(productName, productPrice) {
  // You can use localStorage, cookies, or a server to store cart information.
  // For this example, we'll use localStorage.
  
  // Get the current cart count from localStorage
  let cartCount = localStorage.getItem("cartCount") || 0;
  
  // Increment the cart count
  cartCount = parseInt(cartCount) + 1;
  
  // Store the updated cart count in localStorage
  localStorage.setItem("cartCount", cartCount);
  
  // Update the cart count displayed on the page
  document.getElementById("cart-count").textContent = cartCount;
  
  // You can also store product information in the cart if needed.
}

// Get all "Add to Cart" buttons and add click event listeners
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      const productPrice = button.getAttribute("data-price");
      addToCart(productName, productPrice);
  });
});

// Initialize the cart count on page load
document.getElementById("cart-count").textContent = localStorage.getItem("cartCount") || 0;






