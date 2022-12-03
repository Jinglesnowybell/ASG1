/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}
  
const slideShows = document.querySelectorAll('.container');

let slideShow, slideIndex; //will be set to the current slideShow as appropriate

for (let i=0; i < slideShows.length; i++) {
  slideShow = slideShows[i];
  slideShow.setAttribute('data-slideIndex', 1); //instead of slideIndex = 1 we remember the index for each slideshow in a data attribute
  slideIndex = 1;
  showSlides(1);
}

function plusSlides(n) {
  slideShow = event.target.parentElement;
  slideIndex = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  slideShow = event.target.parentElement.parentElement.parentElement;
  slideIndex = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = slideShow.getElementsByClassName("mySlides");
  var dots = slideShow.getElementsByClassName("demo");
  var captionText = slideShow.querySelector(".caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  
  slideShow.setAttribute('data-slideIndex', slideIndex); // remember the slideIndex for this slideShow
}