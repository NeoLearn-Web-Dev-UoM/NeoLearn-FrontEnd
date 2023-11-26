'use strict'

function submitBtn() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.id === 'student') {
                window.location.href = 'student.html';
            }
            else if (checkbox.id === 'teacher') {
                window.location.href = 'teacher.html';
            }
        }
    });
}



function handleCheckboxClick(clickedCheckboxId) {
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.id !== clickedCheckboxId) {
            checkbox.checked = false;
        }
    });
}