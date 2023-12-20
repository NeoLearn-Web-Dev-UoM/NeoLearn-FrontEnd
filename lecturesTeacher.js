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
    window.location.href = 'lecture.html';
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
function addTextboxq(event) {
    event.preventDefault();

    var inputValue = document.getElementById("textboxContainer").querySelector("input").value;
    document.getElementById("courses-container").insertAdjacentHTML('beforebegin', '<hr class="h1changes">');

    if (inputValue.trim() !== "") {
        var newElement = document.createElement("div");
        newElement.classList.add("added-course");
        newElement.textContent = inputValue;

        var hrElement = document.createElement("hr"); // Δημιουργία ενός νέου <hr>
        hrElement.classList.add("h2changes"); // Προσθήκη κλάσης h2changes
        var coursesContainer = document.getElementById("courses-container");
        coursesContainer.appendChild(hrElement); // Προσθήκη του <hr> στο #courses-container
        coursesContainer.appendChild(newElement);

        // Καθαρίστε το περιεχόμενο του textbox μετά την προσθήκη.
        document.getElementById("textboxContainer").querySelector("input").value = "";
        var datetimeContainer = document.getElementById("datetime-container");
    datetimeContainer.style.display = "block";

    // Get current date and time
    var now = new Date();
    var datetime = now.toLocaleString();

    // Create a new element for the date of addition
    var dateElement = document.createElement("p");
    dateElement.textContent = "" + datetime;

    // Insert date element into the container
    datetimeContainer.innerHTML = '';
    datetimeContainer.appendChild(dateElement);
    }
}


  // Get current date and time
  var now = new Date();
  var datetime = now.toLocaleString();

  // Create a new element for the date of addition
  var dateElement = document.createElement("p");
  dateElement.textContent = " " + datetime;

  // Insert date element into the container
  document.getElementById("datetime-container").appendChild(dateElement);

  function showDatetime() {
    var datetimeContainer = document.getElementById("datetime-container");
    datetimeContainer.style.display = "block";

    // Get current date and time
    var now = new Date();
    var datetime = now.toLocaleString();

    // Create a new element for the date of addition
    var dateElement = document.createElement("p");
    dateElement.textContent = "Ημερομηνία προσθήκης: " + datetime;

    // Insert date element into the container
    datetimeContainer.innerHTML = '';
    datetimeContainer.appendChild(dateElement);
}