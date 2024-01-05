'use strict'

function signUpBtn() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.id === 'student') {
                window.location.href = 'student.html';
                /*fetch('http://localhost/neolearn-backend/index.php/students')
                    .then(response => {
                        if (!response.ok) {
                        throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Work with the data
                        console.log(data);
                    })
                    .catch(error => {
                        // Handle errors
                        console.error('There was a problem with the fetch operation:', error);
                    });*/

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



/*'use strict';

function signUpBtn() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            const userDetails = getUserDetails();

            if (checkbox.id === 'student') {
                // Assuming 'createStudent' is your API endpoint for creating students
                signUp(userDetails, 'http://localhost/neolearn-backend/index.php/students');
            } else if (checkbox.id === 'teacher') {
                // Assuming 'createInstructor' is your API endpoint for creating teachers
                signUp(userDetails, 'http://localhost/neolearn-backend/index.php/instructors');
            }
        }
    });
}

function getUserDetails() {
    const firstName = document.getElementById('firstname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    return {
        firstName: firstName,
        username: username,
        password: password,
    };
}

async function signUp(userDetails, endpoint) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        });

        if (response.ok) {
            // Handle success, e.g., redirect to a success page
            console.log('User created successfully!');
        } else {
            // Handle error response
            console.error('Failed to create user:', response.status, response.statusText);
        }
    } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
    }
}

function handleCheckboxClick(clickedCheckboxId) {
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.id !== clickedCheckboxId) {
            checkbox.checked = false;
        }
    });
}*/