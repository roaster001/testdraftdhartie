 document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart-btn");

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
  confirmButtonColor: '#111', // black button
  confirmButtonText: 'OK'
});



      document.getElementById('postAddButtons').style.display = 'block';

    });
  });
});
