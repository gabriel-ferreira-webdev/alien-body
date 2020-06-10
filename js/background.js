var bgDiv = document.querySelector("#bg-div");
var mainBgs = ["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif"]
 var randomNumber = Math.floor(Math.random()*mainBgs.length);


function preloadImage()
{
    var img=new Image();
    img.src="img/backgrounds/"+mainBgs[randomNumber];

    img.onload = function(){
          bgCheck.checked = true;
    bgDiv.style.backgroundImage = "url('img/backgrounds/"+mainBgs[randomNumber]
    bgDiv.style.backgroundSize = "cover"
    bgDiv.style.backgroundPosition ="center"
    }
}
preloadImage()
var bgLabel = document.querySelector("#disable-gif");
var bgCheck = document.querySelector("#bg-check");
bgLabel.addEventListener("click", function(){
  if (bgCheck.checked == true) {
    bgCheck.checked = false;
  bgDiv.style.background = "none";
  }else{
    bgCheck.checked = true;
    bgDiv.style.backgroundImage = "url('img/backgrounds/"+mainBgs[randomNumber]
    bgDiv.style.backgroundSize = "cover"
    bgDiv.style.backgroundPosition ="center"
  }
})
