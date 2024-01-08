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
        var dataSets = [
            [
                ['Βάσεις Δεδομένων II (CSC502)', 'Υποχρεωτικό Μάθημα Κατεύθυνσης', 'Γεώργιος Ευαγγελίδης '],
                ['Γραμμική Άλγευρα (AIC102)', 'Μάθημα επιλογής', 'Άγγελος Σιφαλέρας'],
                ['Δίκτυα Υπολογιστών (AIC302)', 'Υποχρεωτικό Μάθημα Κορμoύ', 'Γεώργιος Τρακατέλης'],
                ['Δομές Δεδομένων (AIC205)', 'Υποχρεωτικό Μάθημα Κορμoύ', 'Γεωργία Κολωνιάρη']
            ],
            [
                ['Ηλεκτρονική Διακυβέρνηση (DAI143)', 'Μάθημα επιλογής', 'Ευθύμιος Ταμπούρης'],
                ['Θεωρία Παιγνίων (DAI224)', 'Υποχρεωτικό Μάθημα Κατεύθυνσης', 'Ιωάννης Ρεφανίδης'],
                ['Κρυπτογραφία (DAI233)', 'Μάθημα επιλογής', 'Δημήτριος Παπαδόπουλος'],
                ['Μηχανική Μάθηση (CSC707)', 'Υποχρεωτικό Μάθημα Κατεύθυνσης', 'Ευτύχιος Πρωτοπαπαδάκης']
            ]
        ];
        var data = dataSets[slideNumber - 1];


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

            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    addToSelectedLessons(rowData[0]);
                } else {
                    removeFromSelectedLessons(rowData[0]);
                }
            });
        });
    }

    function addToSelectedLessons(lesson) {
        var selectedLessonsList = document.getElementById('selectedLessonsList');
        var li = document.createElement('li');
        li.textContent = lesson;
        selectedLessonsList.appendChild(li);

        // Update the newLessonText element
        document.getElementById('newLessonText').textContent = lesson;
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

});