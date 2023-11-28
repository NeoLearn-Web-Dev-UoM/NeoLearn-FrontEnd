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
    //Εδω απο τη βαση θα γεμιζω κι το πλαισιο για την περιγραφη του μαθήματος 


    // Get the text content of the specified <p> and <cite> elements
    var lessonText = document.getElementById(lessonTextId).textContent;
    var sourceTitle = document.getElementById(sourceTitleId).textContent;

    // Encode the values as URI components and pass them as query parameters
    var encodedLessonText = encodeURIComponent(lessonText);
    var encodedSourceTitle = encodeURIComponent(sourceTitle);

    // Navigate to the new_page.html with the lessonText as a query parameter
    window.location.href = 'lessonDescription.html?lessonText=' + encodedLessonText + '&sourceTitle=' + encodedSourceTitle;;
}