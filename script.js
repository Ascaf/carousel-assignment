var currentSlide = 0;
var slides = document.querySelectorAll("#slides .slide");
var controls = document.querySelectorAll(".controls");
var next = document.getElementById("next");
var previous = document.getElementById("previous");

for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = "inline-block";
}

function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide showing";
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};