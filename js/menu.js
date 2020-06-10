var checkbox = document.getElementById('myInput');
var cartCheckbox = document.getElementById("cart-checkbox");

var icon = document.querySelector( '#menuIconCell' );
var icontext = document.querySelector( '#menuicon i' );
var searchbar = document.querySelector( '.searchbar');
var fade = document.querySelector('.fade')

var listener = function( e ) {
     checkbox.checked = false;
  cartCheckbox.checked = false;
  };

  fade.addEventListener( 'click', listener );
  var links = document.querySelectorAll(".menu-link");
  var images = ["menubg.gif", "stars.gif"]
  var loadedImages = [];
checkbox.addEventListener('change', function(){
  if (this.checked) {
      for (var i = 0; i < links.length; i++) {
          loadedImages.push(new Image());
          loadedImages[i].src = "img/"+images[i];
          if (i == 1) {
            loadedImages[1].onload = function(){
            links[0].style.backgroundImage = "url(img/"+images[0]+")"
            links[1].style.backgroundImage = "url(img/"+images[1]+")"
        }
          }

      }




}})
