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
  // Initialize cart count
  let cartCount = 0;

  // Function to update the cart count displayed in the HTML
  function updateCartCount() {
      $('#cart-count').text(cartCount);
  }

  // Function to handle the "Add to Cart" button click
  $('.add-to-cart').click(function(event) {
    event.preventDefault();

    // Increment the cart count
    cartCount++;

    // Update the cart count displayed in the HTML
    updateCartCount();

    // Get the product information from data attributes
    const productName = $(this).data('product');
    const productPrice = $(this).data('price');

    // Here, you can add more complex logic to manage the cart.
    // For now, we're just displaying an alert.
    alert(`Added ${productName} to cart. Price: $${productPrice}`);
  });
  });



