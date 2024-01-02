'use strict'

function homeBtn() {
    window.location.href = 'teacher.html';
}


function editLessonLink() {
    window.location.href = "editLesson.html";
}

function updateLesson() {
    alert("Το μάθημα ενημερώθηκε!");
    window.location.href = "lessonDescriptionTeacher.html";
}

function returnToMainPage() {
    window.location.href = "lessonDescriptionTeacher.html";
}

function logOutBtn() {
    var txt;
    if (confirm("Είσαι σίγουρος ότι επιθυμείς να αποσυνδεθείς από το Λογαριασμό σου;")) {
      window.location.href = 'welcome.html';
    }
    document.getElementById("demo").innerHTML = txt;
}