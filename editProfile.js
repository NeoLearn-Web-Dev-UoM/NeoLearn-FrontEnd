'use strict'

function updateLesson() {
    alert("Το προφίλ ενημερώθηκε!");
    window.location.href = "viewProfile.html";
}

function returnToMainPage() {
    window.location.href = "viewProfile.html";
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

function editProfileBtn() {
    window.location.href = 'editProfile.html';
}