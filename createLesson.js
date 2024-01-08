'use strict'

function returnToMainPage() {
    window.location.href = 'lessonDescriptionTeacher.html';
}

function createLess() {
    alert("Το μάθημα δημιουργήθηκε με επιτυχία!");
    //εδω θυελω οταν παταω οκ στο αλερτ να νμε οηγαινει στην αρχικη σελιδα με τα μαθηματα χωωρις το μαθηα 
    // που μολις διεγραψα 
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