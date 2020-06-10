var searchbar = document.querySelector('#searchbar');
function searchwidth(){
searchbar.style.width = "100%";
};


function srch(ele){

  if (event.key === 'Enter') {
event.preventDefault();
    var searchQuery =  ele.value
    localStorage.setItem("searchQuery", searchQuery);


location.href = "search.html"
}
}
