var menuBar = document.getElementById("menu-bar");
var listSubject = document.getElementsByClassName("list-subject")[0];

menuBar.addEventListener('click', menuBarClick);

window.onscroll = function() {scrollFunction()};

window.addEventListener('resize', function(event){
  if(window.innerWidth > 991)
    listSubject.style.display = "block";
  else
  listSubject.style.display = "none";
});

function menuBarClick(){  
  if (getComputedStyle(listSubject).display === "none"){
    menuBar.className = "fas fa-times"
    listSubject.style.display = "block";
  }    
  else{
    listSubject.style.display = "none";
    menuBar.className = "fas fa-bars";
  }
    
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {    
    document.getElementsByClassName("up_to_top")[0].style.display = "block";
  } else {    
    document.getElementsByClassName("up_to_top")[0].style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
