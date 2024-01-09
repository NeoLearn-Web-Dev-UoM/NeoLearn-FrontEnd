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
        var svgCell = document.createElement("td");
        svgCell.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder-x" viewBox="0 0 16 16" style="cursor:pointer;" onclick="deleteRow(this, event)">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707"/>
                                <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293l-1.146-1.147z"/>
                            </svg>`;
        // Append cells to the new row
        newRow.appendChild(courseCell);
        newRow.appendChild(dateCell);
        newRow.appendChild(svgCell);

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

function deleteRow(element, event) {
    var row = element.closest('tr');
    row.remove();

    // Σταματήστε το γεγονός κλικ να φτάσει στα επίπεδα που θα προκαλέσουν τη μετάβαση στην άλλη σελίδα
    event.stopPropagation();
}
