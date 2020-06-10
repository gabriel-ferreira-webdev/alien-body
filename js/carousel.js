onload  = start;
var carouselSpeed = 5000;
function start(){
var checkbox = document.getElementById("pause-btn");
checkbox.checked = true;

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");

var next = document.getElementById("next");
var previous = document.getElementById("previous");

var i = 1;
document.getElementById('i'+i).checked = true;
var interval = setInterval(Move,carouselSpeed);
var paused = false;

// this restarts autoplay time when the user changes the slide using the dots
i1.addEventListener('change', function(){
  i = 1;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});
i2.addEventListener('change', function(){
  i = 2;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});
i3.addEventListener('change', function(){
  i = 3;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});
i4.addEventListener('change', function(){
  i = 4;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});
i5.addEventListener('change', function(){
  i = 5;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});
i6.addEventListener('change', function(){
  i = 6;
  if (paused) {

  }else{
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});

function Move(){
	i = (i%6)+1; // 4 is the Number of image in slider

	document.getElementById('i'+i).checked = true;
}
function MoveBack(){
  if(i<2){
    i=6;
  document.getElementById('i'+i).checked = true;
  }else{
	i = (i)-1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}

}

// CONTROLS
next.addEventListener('click', function(){
  if (paused) {
Move();
  }else{
  clearInterval(interval);
  Move();
  interval = setInterval(Move, carouselSpeed);
};

});

previous.addEventListener('click', function(){
  if (paused) {
MoveBack();
  }else{
      MoveBack();
  clearInterval(interval);
  interval = setInterval(Move, carouselSpeed);
};
});

// PAUSE BUTTOn
checkbox.addEventListener('click', function(){
  if (this.checked) {
    interval = setInterval(Move, carouselSpeed);
    paused = false;
  }else{
    clearInterval(interval);
    paused =true;
  }
});


}
