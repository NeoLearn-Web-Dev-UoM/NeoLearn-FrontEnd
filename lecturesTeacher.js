'use strict'

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


function lecture(lecture) {
    window.location.href = 'lectureDoc.html';
}

function emptylecture(lecture) {
    console.log('Clicked! Lecture:', lecture);
    try {
        window.location.href = 'lecture.html';
    } catch (error) {
        console.error('Error in emptylecture:', error);
    }
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
        courseCell.textContent = inputValue;
        
        courseCell.style.textDecoration = 'underline';
        courseCell.style.cursor = 'pointer';
        courseCell.style.color = 'rgb(0, 96, 100)';

        // Create a new cell for the date
        var dateCell = document.createElement("td");
        dateCell.textContent = date;

        // Append cells to the new row
        newRow.appendChild(courseCell);
        newRow.appendChild(dateCell);

        newRow.addEventListener('click', function() {
            // Μεταφορά του χρήστη στη σελίδα "lectureDoc.html"
            window.location.href = 'lectureDoc.html';
        });

        // Append the new row to the table
        var tableBody = document.querySelector("#middle-container table tbody");
        tableBody.appendChild(newRow);

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
