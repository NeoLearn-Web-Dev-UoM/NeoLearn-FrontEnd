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
    window.location.href = 'lessonDescriptionTeacher.html';
}

function homeBtn() {
    window.location.href = 'teacher.html';
}

function logOutBtn() {
    var txt;
    if (confirm("Είσαι σίγουρος ότι επιθυμείς να αποσυνδεθείς από το Λογαριασμό σου;")) {
        window.location.href = 'welcome.html';
    }
    document.getElementById("demo").innerHTML = txt;
}


document.getElementById('searchInput').addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();
    var lessonsContainer = document.getElementById('courses-frame');
    var lessonLinks = lessonsContainer.getElementsByClassName('lesson-link');

    for (var i = 0; i < lessonLinks.length; i++) {
        var lessonText = lessonLinks[i].querySelector('.blockquote p').textContent.toLowerCase();
        if (lessonText.includes(searchValue)) {
            lessonLinks[i].style.display = 'block';
        } else {
            lessonLinks[i].style.display = 'none';
        }
    }
});