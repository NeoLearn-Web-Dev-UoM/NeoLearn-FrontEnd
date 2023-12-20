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


function lecture(lecture) {
    window.location.href = 'lecture.html';
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function addTextbox(event) {
    var input = document.createElement("input");
    var hiddenButton = document.getElementById("hidden");
    input.setAttribute("type", "text");
    document.getElementById("textboxContainer").appendChild(input);
    hiddenButton.style.display = "inline-block";
}