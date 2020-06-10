addCookies();
function addCookies(){
  for (var i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-product');

    cartItem.innerHTML = `

      <div class="cart-product-close">
        <i class="close-icon">+</i>
      </div>
      <div class="cart-product-img">
    <img src="${item.img}" alt="">
      </div>
      <div class="cart-product-info">
        <div class="cart-product-title">${item.name}</div>

        <div class="cart-product-price-container">
          <div class="cart-product-price">
          <div class="cart-product-full-price">
          ${item.finalPrice}
          </div>
          $<span id="product-price-value">${item.price.toFixed(2)}</span>
          </div>
          <div class="quantity-label">

<input value="${item.quantity}"type="number" min="1"  class="cart-product-quantity-input">

          </div>

        </div>

      </div>
              `;


              const cart = document.querySelector('.cart-scroll');
              const total = document.querySelector('.cart-total-container');
              cart.insertBefore(cartItem,total);
              addQuantityListeners();
              showTotals();

  }

}
