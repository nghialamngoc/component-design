var menuBar = document.getElementById("menu-bar");
var listSubject = document.getElementsByClassName("list-subject")[0];
menuBar.addEventListener('click', menuBarClick);

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
