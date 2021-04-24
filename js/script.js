//Darkmode
function dark () {
    var element = document.body; //Sets the variable element equal to the HTML body
    element.classList.toggle('darkmode');//This allows darkmode to be toggled on and off
}

//Slideshow
var slideNumber = 1;
showSlides(slideNumber);

function changeSlide(n) {
    showSlides(slideNumber += n);
}

function currentSlide(n) {
    showSlides(slideNumber = n);
}

function showSlides(n) { //This is used to change the image being shown in the slideshow. It hides the old image and displays a new one when the arrow is pressed. 
    var i = 0;
    var slides = document.getElementsByClassName('overview');
    if (n > slides.length) {
        slideNumber = 1;
    }
    if (n < 1) {
        slideNumber = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideNumber-1].style.display = 'block';
}