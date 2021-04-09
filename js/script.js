//Darkmode
function dark () {
    var element = document.body;
    element.classList.toggle('darkmode');
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

function showSlides(n) {
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