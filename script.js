onload = function() {
    document.getElementsByClassName("slide")[9].style.display = "block";
    this.document.getElementById("menu-btn-up").style.display = "none";
    if (this.window.innerWidth > 1600) {
        openNav();
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
}

function openNav() {
    document.getElementById("main-nav").style.display = "block";
    document.getElementById("menu-btn-up").style.display = "block";
    document.getElementById("menu-btn-down").style.display = "none";
}

function closeNav() {
    document.getElementById("main-nav").style.display = "none";
    document.getElementById("menu-btn-up").style.display = "none";
    document.getElementById("menu-btn-down").style.display = "block";
}

function scrollToElement(ID) {
    document.getElementById(ID).scrollIntoView({behavior: "smooth"});
}