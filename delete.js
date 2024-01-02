'use strict'

function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLesson.html';
}


function removeLesson(lessonId) {
    alert("Το μάθημα διαγράφτηκε με επιτυχία!");

    var lessonElement = document.getElementById(lessonId);
    if (lessonElement) {
        lessonElement.parentNode.parentNode.remove();
    }
    window.location.href = 'student.html';
}