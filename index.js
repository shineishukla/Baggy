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


// JavaScript to handle the "Buy Now" button click
const buyNowButton = document.querySelector('.buy-now-button');

buyNowButton.addEventListener('click', () => {
    // Redirect to the checkout page when the button is clicked
    window.location.href = 'checkout.html';
});






