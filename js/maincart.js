
window.onload = mainLoadCookies();
addCookies();
  var emptyMsg = document.getElementById("cart-empty");
if (cartItems.length > 0) {
  emptyMsg.style.display = "none"
}else{
    emptyMsg.style.display = "block"
}
// remove cart items
const cartClose = document.querySelectorAll('.main-cart');
cartClose.forEach(function(close){
close.addEventListener('click', function(event){

if (event.target.classList.contains("main-cart-product-remove")) {
var i
  for (i = 0; i < cartItems.length; i++) {
     if (event.target.parentElement.parentElement.querySelector(".main-cart-product-title").textContent == cartItems[i].name) {
       cartItems.splice([i], 1)
       if (cartItems.length == 0) {
           emptyMsg.style.display = "block"
       }else{
                  emptyMsg.style.display = "none"

       }

       mainShowTotals();
       saveCookies();
    }
  }

event.target.parentElement.parentElement.remove();
mainShowTotals();
saveCookies();
  }
})})

function addCookies(){
  for (var i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
    const cartItem = document.createElement('div');
    cartItem.classList.add('main-cart-product');

    cartItem.innerHTML = `


    <img src="${item.img}" alt="">



    <div class="main-cart-product-display">


        <span class="main-cart-product-title">${item.name}</span>
      <br>
      <button type="button" name="button" class="main-cart-product-remove">Remove</button>
    </div>


      <table class="main-cart-product-table">
        <tr class="product-table-head">
          <th class="price-table">Price</th>
          <th class="quantity-table">Quantity</th>
          <th class="total-table">Total</th>
        </tr>
    <tr class="product-table-values">
      <td class="price-table">$ <span class="price-value">${item.finalPrice}</span></td>
      <td class="quantity-table">           <div class="main-quantity-label">

      <input value="${item.quantity}"type="number" min="1"  class="main-cart-product-quantity-input">

                </div></td>
      <td class="total-table">$<span class="total-table-value">${item.price.toFixed(2)}</span></td>
    </tr>
      </table>
              `;
              const cart = document.querySelector('.main-cart-products');
              const total = document.querySelector('.cart-total-container');
              cart.insertBefore(cartItem,total);
              addQuantityListeners();
             mainShowTotals();

  }

}
// document.onload = mainLoadCookies();
function saveCookies()
{
  var json_str = JSON.stringify(cartItems);
myCookies["_cart"] = json_str;
//Start reusable Code
document.cookie = "";
var expiresAttrib = new Date(Date.now()+60*1000).toString();
var cookieString = "";
for (var key in myCookies)
{
  cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
  document.cookie = cookieString;
}
// End reusable code
}


function mainLoadCookies()
{
  //start reusable code
  myCookies = {};
  var kv = document.cookie.split(";");
  for (var id in kv)
  {
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  //End Reusable code
  var json_str = myCookies["_cart"];
  cartItems = JSON.parse(json_str);


      }

      function addQuantityListeners(){
        // add event listener to quantity
        quantityInputs = document.querySelectorAll('.main-cart-product-quantity-input');
         quantityButtons = document.querySelectorAll('.main-quantity-label');

      for (var i = 0; i < quantityButtons.length; i++) {


      quantityButtons[i].addEventListener("click", function(event){
        for (var i = 0; i < cartItems.length; i++) {
                                                                                                                                                                      // store these in a variable !!
        if (this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".main-cart-product-title").textContent == cartItems[i].name) {
          cartItems[i].quantity = this.parentNode.querySelector('input[type=number]').value
                     cartItems[i].price = cartItems[i].finalPrice * cartItems[i].quantity;

        }
        }
var newPrice = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".price-value").textContent * this.parentNode.querySelector('input[type=number]').value;
         this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".total-table-value").textContent = newPrice.toFixed(2);
       mainShowTotals();
        saveCookies();
        loadCookies();
      })
      }
      for (var i = 0; i < quantityInputs.length; i++) {

            quantityInputs[i].addEventListener("input", function(event){


               for (var i = 0; i < cartItems.length; i++) {
               if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".main-cart-product-title").textContent == cartItems[i].name) {
                 cartItems[i].quantity = this.parentNode.querySelector('input[type=number]').value
                     cartItems[i].price = cartItems[i].finalPrice * cartItems[i].quantity;
                     document.getElementById('subtotal-value').textContent = cartItems[i].price

               }
               }

var newPrice = this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".price-value").textContent * this.parentNode.querySelector('input[type=number]').value;
this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".total-table-value").textContent = newPrice.toFixed(2);

             mainShowTotals();
              saveCookies();
              loadCookies();
              // var updatedPrice = singlePrices[i] * this.value;
            })
      }
      }
      function mainShowTotals(){
        const total = [];

      const items = document.querySelectorAll('.total-table-value');
          document.getElementById("cart-quantity").textContent = items.length;
        items.forEach(function(item){
          total.push(parseFloat(item.textContent));

        });
        const totalMoney = total.reduce(function(total,item){
          total += item;
          return total;
        },0)
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById('subtotal-value').textContent = finalMoney;
      }
