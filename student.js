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


function openNewPage(lessonTextId, sourceTitleId) {
    var lessonText = document.getElementById(lessonTextId).textContent;
    var sourceTitle = document.getElementById(sourceTitleId).textContent;

    // Use unique identifiers for each link
    var keyPrefix = 'lessonDescription_';  // Unique prefix
    localStorage.setItem(keyPrefix + 'lessonText', lessonText);
    localStorage.setItem(keyPrefix + 'sourceTitle', sourceTitle);

    // Navigate to the new_page.html
    window.location.href = 'lessonDescription.html';
}

