'use strict'

//οταν παταει απεγγραφη στο παραθυρο με τη περιγραφη του μαθηματος
function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLesson.html';
}

function showAlert() {
    alert("Το μάθημα διαγράφτηκε με επιτυχία!");
    //εδω θυελω οταν παταω οκ στο αλερτ να νμε οηγαινει στην αρχικη σελιδα με τα μαθηματα χωωρις το μαθηα 
    // που μολις διεγραψα 
    window.location.href = 'student.html';
}