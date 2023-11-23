'use strict'
function deleteLesson(button) {
    // Get the parent element (lesson container) and remove it
    var lessonContainer = button.closest('.first-lesson, .second-lesson');
    lessonContainer.parentNode.removeChild(lessonContainer);

    // Check if there's only one lesson left
    var lessons = document.querySelectorAll('.first-lesson, .second-lesson');
    if (lessons.length === 1) {
        // If only one lesson left, append it to the container
        var coursesFrame = document.getElementById('courses-frame');
        coursesFrame.innerHTML = ''; // Clear the container
        coursesFrame.appendChild(lessons[0].cloneNode(true)); // Append the remaining lesson
    }
} 