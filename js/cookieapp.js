var myCookies = {};
var cartItems = [];
// if (myCookies === "") {
// function noItems(){
//   return
// }
// noItems()
// }
window.onload = loadCookies();
if (cartItems.length > 0) {
  document.getElementById('no-cart-items').style.display = "none";
}

// document.onload = loadCookies();
function saveCookies()
{
  var json_str = JSON.stringify(cartItems);
myCookies["_cart"] = json_str;
//Start reusable Code
document.cookie = ";sameSite=Lax;";
var expiresAttrib = new Date(Date.now()+60*1000).toString();
var cookieString = "";
cookieString = "_cart="+myCookies["_cart"]+";"+expiresAttrib+";sameSite=Lax;";
document.cookie = cookieString;

}


function loadCookies()
{
  //start reusable code
  myCookies = {};
  if (myCookies !== "undefined") {
    var kv = document.cookie.split(";");
    for (var id in kv)
    {
      var cookie = kv[id].split("=");
      myCookies[cookie[0].trim()] = cookie[1];
    }
    //End Reusable code
    var json_str = myCookies["_cart"];
    console.log(json_str);
    cartItems = JSON.parse(json_str);
  }


      }
