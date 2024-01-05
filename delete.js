'use strict'

function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLesson.html';
}


function removeLesson(lessonId) {
    alert("Το μάθημα διαγράφτηκε με επιτυχία!");
    //δεν ξερω γιατι δεν δουλευει

    var lessonElement = document.getElementById(lessonId);
    if (lessonElement) {
        lessonElement.parentNode.parentNode.remove();
    }
    window.location.href = 'student.html';
}

function logOutBtn() {
    var txt;
    if (confirm("Είσαι σίγουρος ότι επιθυμείς να αποσυνδεθείς από το Λογαριασμό σου;")) {
        window.location.href = 'welcome.html';
    }
    document.getElementById("demo").innerHTML = txt;
}

function homeBtn() {
    window.location.href = 'student.html';
}