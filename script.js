/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

var indexes = {
  firstsliderindex: 1,
  secondsliderindex: 2,
};
showSlides(indexes.firstsliderindex, 'first', 'firstsliderindex');
// Next/previous controls
function plusSlides(n, id, index) { // n - number of slide, id - container id, index - current slide number in slider
  showSlides(indexes[index] += n, id, index);
}
// Thumbnail image controls
function currentSlide(n, id, index) {
  showSlides(indexes[index] = n, id, index);
}

function showSlides(n, id, index) {
  var i;
  var slides = document.querySelectorAll(`#${id} .mySlides`);
  var dots = document.querySelectorAll(`#${id} .dot`);
  if (n > slides.length) {
      indexes[index] = 1;
  }
  if (n < 1) {indexes[index] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[indexes[index]-1].style.display = "block";
  dots[indexes[index]-1].className += " active";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");


  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1000); // Change image every 1seconds
}
