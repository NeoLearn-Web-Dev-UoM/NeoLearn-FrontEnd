'use strict'

function viewLessonLink() {
    window.location.href = "lecturesTeacher.html";
}

function homeBtn() {
    window.location.href = 'teacher.html';
}


function profileBtn() {
    window.location.href = 'viewProfile.html';
}

function calendarBtn() {
    window.location.href = 'calendar.html';
}

function logOutBtn() {
    var txt;
    if (confirm("Είσαι σίγουρος ότι επιθυμείς να αποσυνδεθείς από το Λογαριασμό σου;")) {
      window.location.href = 'welcome.html';
    }
    document.getElementById("demo").innerHTML = txt;
}
function newLessonBtn() {
    window.location.href = 'createLesson.html';
}

function editProfileBtn() {
    window.location.href = 'editProfile.html';
}