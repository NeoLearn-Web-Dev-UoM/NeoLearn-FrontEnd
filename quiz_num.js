'use strict'

const correctAnswers = {
  q1: 'c',
  q2: 'c',
  q3: 'b',
  q4: 'b',
  q5: 'b',
  q6: 'c',
  q7: 'b',
  q8: 'b',
  q9: 'a',
  q10: 'c'
};

const form = document.getElementById("quiz-form");
form.onsubmit = function(event) {
  event.preventDefault();

  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const questionName = 'q' + i;
    const userAnswer = form.querySelector('input[name="' + questionName + '"]:checked');

    if (userAnswer && userAnswer.value === correctAnswers[questionName]) {
      score++;
    }
  }

  alert("Your score is: " + score + "/10");
  window.location.href = 'quizTeacher.html';
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
