var navbar = document.querySelector(".navbar")
var toggle = document.querySelector(".toggle")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("navbar_show")
  toggle.classList.toggle("showClose")
}
    
toggle.addEventListener("click", toggleHamburger)

function hide() {
  var x = document.getElementById("hoofd");
  var y = document.getElementById("head")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.height === "715px") {
    y.style.height = "auto";
  } else {
    y.style.height = "715px";
  }
}
