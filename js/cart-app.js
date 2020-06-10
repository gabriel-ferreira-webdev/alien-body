

var quantityInputs =[]
var  quantityButtons =[]

//add items to cart

function addCookies(){

  for (var i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-product');

    cartItem.innerHTML = "<div class='cart-product-close'><i class='close-icon'>+</i></div><div class='cart-product-img'><img src='"+item.img+"' alt=''></div><div class='cart-product-info'><div class='cart-product-title'>"+item.name+"</div><div class='cart-product-price-container'><div class='cart-product-price'><div class='cart-product-full-price'>"+item.finalPrice+"</div>$<span id='product-price-value'>"+item.price.toFixed(2)+"</span></div><div class='quantity-label'><input value='"+item.quantity+"'type='number' min='1'  class='cart-product-quantity-input'></div></div></div>";


              const cart = document.querySelector('.cart-scroll');
              const total = document.querySelector('.cart-total-container');
              cart.insertBefore(cartItem,total);
              addQuantityListeners();
              showTotals();

  }

}

function cartApp(){
    var products = JSON.parse(products_string);

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




  const cartBtn = Array.prototype.slice.call(document.querySelectorAll('.store-item-icon'), 0);
  cartBtn.forEach(function(btn){
btn.addEventListener('click', function(event){


  if(event.target.parentElement.classList.contains('store-item-icon')){
    var product;
    var id = this.parentElement.id
    console.log(id);
for (var i = 0; i < products.length; i++) {
if (id === products[i].id) {
      console.log(id);
product = products[i]
}
}

    const item = {};
    // MINIMIZE THE SIZE OF THE PICTURES AND ADD THE PATH HERE!!!
    item.img = "img/" + product.thumb;
    let quantity = event.target.parentElement.nextElementSibling.children[0].value;
    item.quantity = quantity;

    let name = product.title;
    item.name = name;

    for (var i = 0; i < cartItems.length; i++) {
      if (item.name == cartItems[i].name) {
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

    cartItem.innerHTML = "<div class='cart-product-close'><i class='close-icon'>+</i></div><div class='cart-product-img'><img src='"+item.img+"' alt='' ></div><div class='cart-product-info'><div class='cart-product-title'>"+item.name+"</div><div class='cart-product-price-container'><div class='cart-product-price'><div class='cart-product-full-price'>"+item.finalPrice+"</div>$<span id='product-price-value'>"+item.price.toFixed(2)+"</span></div><div class='quantity-label'><input value='"+item.quantity+"'type='number' min='1'  class='cart-product-quantity-input'></div></div></div>";





//select cart



const cart = document.querySelector('.cart-scroll');
const total = document.querySelector('.cart-total-container');
cart.insertBefore(cartItem,total);

showTotals();
saveCookies();

addQuantityListeners();
           document.getElementById('no-cart-items').style.display = "none";
           var itemAdded = document.createElement('div');
           itemAdded.classList.add('item-added');
           itemAdded.innerHTML = "Item added!"
event.target.parentElement.parentElement.appendChild(itemAdded)
setTimeout(function(){
  var itemAddedDiv = document.querySelector(".item-added");
itemAddedDiv.remove();
}, 1500)
           }

});
  });


//show totals





}

function addQuantityListeners(){
  // add event listener to quantity
  quantityInputs = document.querySelectorAll('.cart-product-quantity-input');
   quantityButtons = document.querySelectorAll('.quantity-label');
for (var i = 0; i < quantityButtons.length; i++) {


quantityButtons[i].addEventListener("click", function(event){
  for (var i = 0; i < cartItems.length; i++) {
  if (this.parentNode.parentNode.parentNode.querySelector(".cart-product-title").textContent == cartItems[i].name) {
    cartItems[i].quantity = this.parentNode.querySelector('input[type=number]').value
               cartItems[i].price = cartItems[i].finalPrice * cartItems[i].quantity;
  }
  }
  var priceChanged = this.parentNode.children[0].children[0].textContent * this.parentNode.querySelector('input[type=number]').value;
   this.parentNode.children[0].children[1].textContent = priceChanged.toFixed(2);
  showTotals();
  saveCookies();
})
}
for (var i = 0; i < quantityInputs.length; i++) {

      quantityInputs[i].addEventListener("input", function(event){
         for (var i = 0; i < cartItems.length; i++) {
         if (this.parentNode.parentNode.parentNode.querySelector(".cart-product-title").textContent == cartItems[i].name) {
           cartItems[i].quantity = this.parentNode.querySelector('input[type=number]').value
               cartItems[i].price = cartItems[i].finalPrice * cartItems[i].quantity;
         }
         }
         var priceChanged = this.parentNode.children[0].children[0].textContent * this.parentNode.querySelector('input[type=number]').value;
          this.parentNode.children[0].children[1].textContent = priceChanged.toFixed(2);
        showTotals();
        saveCookies();
        // var updatedPrice = singlePrices[i] * this.value;
      })
}
}
function showTotals(){
  const total = [];

const items = Array.prototype.slice.call(document.querySelectorAll('#product-price-value'), 0);


  items.forEach(function(item){

    total.push(parseFloat(item.textContent));

  });
  const totalMoney = total.reduce(function(total,item){
    total += item;
    return total;
  },0)
  const finalMoney = totalMoney.toFixed(2);
  document.getElementById('subtotal-value-span').textContent = finalMoney;
  document.getElementById('cart-quantity').textContent = total.length;
}
