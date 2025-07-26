
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  const cartIcon = document.querySelector(".icon-cart-empty");
  let shakeInterval;

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        brand: this.dataset.brand,
        price: this.dataset.price,
        image: this.dataset.image,
        quantity: parseInt(document.querySelector('.quantity__input').value) || 1
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingIndex = cart.findIndex(item => item.id === product.id);
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += product.quantity;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      Swal.fire({
        title: 'Added to Cart!',
        text: `${product.quantity} x ${product.name} added successfully.`,
        icon: 'success',
        confirmButtonColor: '#111',
        confirmButtonText: 'OK'
      });

      document.getElementById('postAddButtons').style.display = 'block';
    });
  });

  // Show checkout reminder every 20 seconds if cart is not empty
let popupCount = 0;
const maxPopups = 5;

const reminderInterval = setInterval(() => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    Swal.fire({
      title: "Don't forget to checkout!",
      text: "Your cart has items waiting.",
      icon: "info",
      showConfirmButton: true,
      confirmButtonText: "Checkout Now",
      confirmButtonColor: "#111",
      showCancelButton: true,
      cancelButtonText: "Later",
      timer: 2600, // Auto-close after 2.6 sec
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result => {
      if (result.isConfirmed) {
        window.location.href = "../cart.html"; // Replace with actual cart page
      }
    });

    popupCount++;
    if (popupCount >= maxPopups) {
      clearInterval(reminderInterval);
    }
  }
}, 15000);// 22 seconds
}

);

