
(function(){


  const cartClose = Array.prototype.slice.call(document.querySelectorAll('.cart'), 0);
  cartClose.forEach(function(close){
close.addEventListener('click', function(event){

  if (event.target.classList.contains("close-icon")) {
var i
    for (i = 0; i < cartItems.length; i++) {
       if (event.target.parentElement.parentNode.querySelector(".cart-product-title").textContent == cartItems[i].name) {
         cartItems.splice([i],1)
         if (cartItems.length == 0) {
           document.getElementById('no-cart-items').style.display = "inline-block";
         }
      }
    }
  event.target.parentElement.parentElement.remove();
  showTotals();
  saveCookies();
    }
})})
  const cartBtn = Array.prototype.slice.call(document.querySelectorAll('.product-item-icon-click'), 0);
  cartBtn.forEach(function(btn){
btn.addEventListener('click', function(event){

  if(event.target.parentElement.classList.contains('product-item-icon')){
  var products = JSON.parse(products_string);
        var product;
        var id = this.parentElement.id
    for (var i = 0; i < products.length; i++) {
    if (id === products[i].id) {
    product = products[i]
    }
    }
        const item = {};
        // MINIMIZE THE SIZE OF THE PICTURES AND ADD THE PATH HERE!!!
        item.img = "img/" + product.thumb;
        let quantity = document.querySelector("#quantity").value
        item.quantity = quantity;

        let name = product.title;
        item.name = name;

        for (var i = 0; i < cartItems.length; i++) {
          if (item.name === cartItems[i].name) {
            alert("Item already in cart!")
            return;
          }
        }
          let price;
    if (product.salePrice) {
      price = product.salePrice;
    }else{price = product.price;}
        let finalPrice = price;

        item.finalPrice = finalPrice;
        item.price = finalPrice * quantity;
        item.id = product.id;
        cartItems.push(item);
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-product');

    cartItem.innerHTML = "<div class='cart-product-close'>        <i class='close-icon'>+</i>      </div>      <div class='cart-product-img'>    <img src='"+item.img+"' alt='' >      </div>      <div class='cart-product-info'>      <div class='cart-product-title'>"+item.name+"</div>      <div class='cart-product-price-container'>    <div class='cart-product-price'>    <div class='cart-product-full-price'>    "+item.finalPrice+"    </div>    $<span id='product-price-value'>"+item.price.toFixed(2)+"</span>      </div>      <div class='quantity-label'>        <input value='"+item.quantity+"'type='number' min='1'  class='cart-product-quantity-input'>       </div>        </div>  </div>";




//select cart


           document.getElementById('no-cart-items').style.display = "none";
const cart = document.querySelector('.cart-scroll');
const total = document.querySelector('.cart-total-container');
cart.insertBefore(cartItem,total);

showTotals();
saveCookies();

var added = document.querySelector('.added-product');
added.style.display = "inline-block";
added.style.opacity = 1;
setTimeout(function(){

  added.style.display = "none";
}, 1500)


addQuantityListeners();

  }

});
  });


})();
