'use strict'

let currentSlide = 1;

function showMessage(action) {
    alert('Toolbar button clicked: ' + action);
}
function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    const currentSlideElement = document.getElementById(`slide${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.style.display = 'block';
        currentSlide = slideNumber;
    }
}

function changeSlide(nextSlide) {
    showSlide(nextSlide);
}

// Show the initial slide
showSlide(currentSlide);