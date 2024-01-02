'use strict'

function tryQuiz(event) {
    event.preventDefault();
    window.location.href = 'quizLesson.html';
}


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
function homeBtn() {
    window.location.href = 'student.html';
}
