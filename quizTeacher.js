'use strict'

function viewLessonLink() {
    window.location.href = "lecturesTeacher.html";
}

let currentSlide = 1;
function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    const currentSlideElement = document.getElementById(`slide${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.style.display = 'block';
        currentSlide = slideNumber;
    }
}
function changeSlide(nextSlide) {
    showSlide(nextSlide);
}
// Show the initial slide
showSlide(currentSlide);


function quiz(quiz) {
    window.location.href = 'quiz_num.html';
}

function emptyquiz(quiz) {
    console.log('Clicked! Lecture:', lecture);
    try {
        window.location.href = 'quiz_num.html';
    } catch (error) {
        console.error('Error in emptylecture:', error);
    }
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function addTextbox(event) {
    var input = document.createElement("input");
    var hiddenButton = document.getElementById("hidden");
    input.setAttribute("type", "text");
    document.getElementById("textboxContainer").appendChild(input);
    hiddenButton.style.display = "inline-block";
}
// ... υπόλοιπος κώδικας ...
function addTextboxq(event) {
    event.preventDefault();

    var inputValue = document.getElementById("textboxContainer").querySelector("input").value;

    if (inputValue.trim() !== "") {
        var coursesContainer = document.getElementById("courses-container");
        var newElement = document.createElement("div");
        newElement.classList.add("added-course");
        newElement.textContent = inputValue;
        coursesContainer.appendChild(newElement);

        // Get current date
        var now = new Date();
        var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        var date = now.toLocaleDateString(undefined, options);

        // Create a new row (tr)
        var newRow = document.createElement("tr");

        // Create a new cell for the course text
        var courseCell = document.createElement("td");
        courseCell.innerHTML = inputValue;
        courseCell.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg>' + inputValue;

        courseCell.style.textDecoration = 'underline';
        courseCell.style.cursor = 'pointer';
        courseCell.style.color = 'rgb(0, 96, 100)';

        // Create a new cell for the date
        var dateCell = document.createElement("td");
        dateCell.textContent = date;

        // Append cells to the new row
        newRow.appendChild(courseCell);
        newRow.appendChild(dateCell);

        // Append the new row to the table
        var tableBody = document.querySelector("#middle-container table tbody");
        tableBody.appendChild(newRow);

        newRow.addEventListener('click', function() {
            // Μεταφορά του χρήστη στη σελίδα "lectureDoc.html"
            window.location.href = 'quiz_num.html';
        });

        var datetimeContainer = document.getElementById("datetime-container");
        datetimeContainer.style.display = "block";

        // Get current date and time
        var now = new Date();
        var datetime = now.toLocaleString();

        // Create a new element for the date of addition with styles
        var dateElement = document.createElement("p");
        dateElement.innerHTML = "<span style='text-decoration: underline; color: red;'>" + datetime + "</span>";
        
        // Insert date element into the container
        datetimeContainer.appendChild(dateElement);

    }
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
