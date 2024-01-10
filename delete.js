'use strict'

function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLesson.html';
}


function removeLesson(lessonTextElementId) {
    //den douleyei
    // var lessonElement = document.getElementById(lessonTextElementId);
    // if (lessonElement) {
    //     lessonElement.parentElement.remove();
    //     alert("Το μάθημα διαγράφτηκε με επιτυχία!");
    //     window.location.href = 'student.html';
    // } else {
    //     console.error("Lesson element not found with ID: " + lessonTextElementId);
    // }

    alert("Το μάθημα διαγράφτηκε με επιτυχία!");
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
