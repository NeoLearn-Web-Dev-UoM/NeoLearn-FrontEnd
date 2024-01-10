'use strict'

document.getElementById("quiz-form").addEventListener("submit", function(event) {
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
