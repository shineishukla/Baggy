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
});


