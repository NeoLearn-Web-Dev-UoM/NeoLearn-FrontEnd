'use strict'

//οταν παταει απεγγραφη στο παραθυρο με τη περιγραφη του μαθηματος
function deleteLessonLink(event) {
    event.preventDefault();
    window.location.href = 'deleteLesson.html';
}