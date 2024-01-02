'use strict'

//οταν παταει απεγγραφη στο παραθυρο με τη περιγραφη του μαθηματος
function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLessonTeacher.html';
}

function showAlert() {
    alert("Το μάθημα διαγράφτηκε με επιτυχία!");
    //εδω θυελω οταν παταω οκ στο αλερτ να νμε οηγαινει στην αρχικη σελιδα με τα μαθηματα χωωρις το μαθηα 
    // που μολις διεγραψα 
    window.location.href = 'teacher.html';
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


