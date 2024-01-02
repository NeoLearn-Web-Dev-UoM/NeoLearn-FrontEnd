'use strict'

function homeBtn() {
    window.location.href = 'student.html';
}

document.addEventListener('DOMContentLoaded', function () {
    var currentPage = 1;

    function showSlide(slideNumber) {
        var slides = document.querySelectorAll('.slide');
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        var currentSlide = document.getElementById('slide' + slideNumber);
        if (currentSlide) {
            currentSlide.style.display = 'block';
        }

        showTable(slideNumber);
    }

    function showTable(slideNumber) {
        var tbody;
        if (slideNumber === 1) {
            tbody = document.querySelector('#myTable1 tbody');
        } else if (slideNumber === 2) {
            tbody = document.querySelector('#myTable2 tbody');
        }

        tbody.innerHTML = ''; // Clear existing content

        // Sample data for the table
        var data = [
            ['Data 1', 'Data 2'],
            ['Data 3', 'Data 4'],
            ['Data 5', 'Data 6'],
            ['Data 7', 'Data 8'],
            ['Data 9', 'Data 10']
        ];

        // Loop through the data and create table rows
        data.forEach(function (rowData) {
            var tr = document.createElement('tr');

            // Create checkbox in the first column
            var checkboxCell = document.createElement('td');
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);
            tr.appendChild(checkboxCell);

            // Create other columns
            rowData.forEach(function (cellData) {
                var td = document.createElement('td');
                td.textContent = cellData;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
    }

    showSlide(currentPage);

    document.getElementById('nextButton1').addEventListener('click', function () {
        currentPage++;
        showSlide(currentPage);
    });

    document.getElementById('prevButton2').addEventListener('click', function () {
        currentPage--;
        showSlide(currentPage);
    });

    document.getElementById('nextButton2').addEventListener('click', function () {
        currentPage++;
        showSlide(currentPage);
    });
});