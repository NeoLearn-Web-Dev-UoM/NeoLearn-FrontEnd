'use strict'
let currentSlide = 1;

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

function lessonClicked(lessonTitle) {

    //για να ξερω αν πηρε σωστο ονομα μαθηματος θα το σβησω 
    alert('Lesson Clicked: ' + lessonTitle);
    var details = document.getElementById('lesson-name')
    details.textContent = lessonTitle;

}