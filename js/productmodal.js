function productModal(){
  var products = JSON.parse(products_string);
// for (var i = 0; i < products.length; i++) {
//
// }var id = url.substring(url.lastIndexOf('/') + 1);
// Get the modal
var modal = document.querySelector(".modal-container");

// Get the button that opens the modal
var btn = document.querySelectorAll(".product-img, .product-info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    modal.style.display = "block";


    for (var i = 0; i < products.length; i++) {
      if (this.parentElement.id == products[i].id) {

        const description = document.querySelector(".product-description").children[0];
        description.innerHTML = products[i].description;
        if (products[i].salePrice) {
                  document.querySelector("#product-price").textContent =  "$"+products[i].salePrice;
                  document.querySelector("#product-original-price").style.display = "block";
                  document.querySelector("#product-original-price").textContent =  "$"+products[i].price;
        }else{
                            document.querySelector("#product-original-price").style.display = "none";
                  document.querySelector("#product-price").textContent =  "$"+products[i].price;
        }
        document.querySelector("#product-name").textContent =  products[i].title;

const ul = document.querySelector(".other-images").children[0]
    ul.innerHTML = '';
        for (var b = 0; b < products[i].images.length; b++) {
        const image = document.createElement('li');
        image.innerHTML = "<img class='img' src='img/"+products[i].images[b]+"' alt=''>";

        document.querySelector(".product-item-icon").id = products[i].id
        ul.appendChild(image)
        document.getElementById("myimage").src = "img/"+products[i].images[0]
        }
      }
    }

    const firstPic = document.querySelector(".other-images").children[0].children[0].children[0];

    firstPic.setAttribute("id", 'mainImage');


// image display
    var otherImages = document.querySelectorAll(".img");
    var imageDisplay = document.querySelector("#myimage")
        imageZoom("myimage", "myresult");
    var i = {};
    for (i = 0; i < otherImages.length; i++) {
      otherImages[i].addEventListener("click", function(){
          imageDisplay.src = this.src
    imageZoom("myimage", "myresult");
      })
    }

// image display zoom
    function imageZoom(imgID, resultID) {
      var img, lens, result, cx, cy;
      img = document.getElementById(imgID);
      result = document.getElementById(resultID);
      /* Create lens: */
      lens = document.createElement("DIV");
      lens.setAttribute("class", "img-zoom-lens");
      /* Insert lens: */
      img.parentElement.insertBefore(lens, img);
      /* Calculate the ratio between result DIV and lens: */
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;
      /* Set background properties for the result DIV */
      result.style.backgroundImage = "url('" + img.src + "')";
      // result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
      /* Execute a function when someone moves the cursor over the image, or the lens: */
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      /* And also for touch screens: */
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);
      function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      }
      function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
      }
    }


  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
