'use strict'

      const form = document.getElementById("quiz-form");
      form.onsubmit = function() {
        const inputs = form.querySelectorAll("input[type=radio]:checked");
        const score = inputs.length;
        alert("Your score is: " + score + "/10");
        event.preventDefault();
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
