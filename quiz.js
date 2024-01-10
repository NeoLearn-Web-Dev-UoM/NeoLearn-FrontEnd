'use strict'

document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Αποτρέπει την προεπιλεγμένη συμπεριφορά της φόρμας (αποστολή και ανανέωση της σελίδας)
    calculateScore();
});

function calculateScore() {
    event.preventDefault();

    const correctAnswers = ["c", "c", "b", "b", "b", "c", "b", "b", "a", "c"];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            if (userAnswer === correctAnswers[i - 1]) {
                score++;
            }
        }
    }

    alert(`Σκορ: ${score}/10`);
}

let duration = 30 * 60;

// Επιλέγουμε το στοιχείο του χρονομέτρου
const timerElement = document.getElementById("timer");

// Ορίζουμε μια συνάρτηση για την ενημέρωση του χρονομέτρου
function updateTimer() {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    // Εμφανίζουμε τον χρόνο στο στοιχείο του χρονομέτρου
    timerElement.textContent = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    // Μειώνουμε τον χρόνο κατά ένα δευτερόλεπτο
    duration--;

    // Εάν ο χρόνος έχει λήξει, μπορείτε να προσθέσετε κώδικα εδώ για επιπλέον λειτουργίες

    // Εάν ο χρόνος δεν έχει λήξει, ορίζουμε την επόμενη κλήση της συνάρτησης μετά από ένα δευτερόλεπτο
    if (duration >= 0) {
        setTimeout(updateTimer, 1000);
    }
}

// Καλούμε τη συνάρτηση για πρώτη φορά για να ξεκινήσει το χρονόμετρο
updateTimer();

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

function quizLessonLink(event) {
    event.preventDefault();
    window.location.href = "quizTeacher.html";
}
