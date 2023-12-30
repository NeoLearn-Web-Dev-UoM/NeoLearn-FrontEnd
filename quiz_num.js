  'use strict'
  const form = document.getElementById("quiz-form");
      form.onsubmit = function() {
        const inputs = form.querySelectorAll("input[type=radio]:checked");
        const score = inputs.length;
        alert("Your score is: " + score + "/3");
      }

   const form = document.getElementById("quiz-form");
   form.onsubmit = function() {
     const inputs = form.querySelectorAll("input[type=radio]:checked");
     const score = inputs.length;
     alert("Your score is: " + score + "/3");
   }

      // Set the duration of the quiz in seconds
      const duration = 1800; // 30 minutes in seconds

      window.onload = function () {
        const form = document.getElementById("quiz-form");

        // Submit the quiz automatically after the duration has passed
        setTimeout(function() {
          form.submit();
        }, duration * 1000);

        // Update the timer every second
        setInterval(function() {
          const timer = document.getElementById("timer");
          const remainingSeconds = parseInt(timer.dataset.remainingSeconds, 10) - 1;
          if (remainingSeconds < 0) {
            timer.textContent = "00:00";
            form.submit();
          } else {
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            timer.textContent = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
            timer.dataset.remainingSeconds = remainingSeconds;
          }
        }, 1000);
      };