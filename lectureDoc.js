'use strict'

function homeBtn() {
    window.location.href = 'teacher.html';
}

function onSubmitForm() {
    console.log("Form submitted");

    // Ανακτά το input element του αρχείου
    var fileInput = document.getElementById("fileInput");

    // Εάν υπάρχει επιλεγμένο αρχείο
    if (fileInput.files.length > 0) {
        var fileName = fileInput.files[0].name;

        // Προσθέτει τη νέα γραμμή στον πίνακα με το όνομα του αρχείου
        addRowToTable(fileName);
    }
}

function addRowToTable(fileName) {
    var table = document.getElementById("lecturesTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Καθορίζει τον τύπο του αρχείου βάσει της επέκτασης
    var fileType = getFileType(fileName);

    // Προσθέτει τα κελιά με τα δεδομένα
    var cellType = newRow.insertCell(0);
    cellType.innerHTML = getFileIcon(fileType);

    var cellFileName = newRow.insertCell(1);
    cellFileName.innerHTML = '<div class="lesson-link" onclick="lecture(\'lecture6\')">' + fileName + '</div>';

    var cellDownload = newRow.insertCell(2);
    cellDownload.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>';

    var cellDate = newRow.insertCell(3);
    cellDate.innerHTML = formatDate(new Date());
}
function getFileType(fileName) {
    // Επιστρέφει τον τύπο του αρχείου βάσει της επέκτασης
    var extension = fileName.split('.').pop().toLowerCase();
    if (extension === 'pdf') {
        return 'pdf';
    } else if (['mp4', 'avi', 'mkv'].includes(extension)) {
        return 'video';
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
        return 'image';
    } else if (['zip', 'rar', '7z'].includes(extension)) {
        return 'zip';
    } else if (['html', 'css', 'js'].includes(extension)) {
        return 'code';
    } else {
        return 'folder'; // Υποθέτουμε ότι είναι φάκελος αν δεν ταιριάζει σε κανέναν άλλον τύπο
    }
}

function getFileIcon(fileType) {
    // Επιστρέφει το αντίστοιχο εικονίδιο βάσει του τύπου του αρχείου
    switch (fileType) {
        case 'pdf':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">...</svg>';
        case 'video':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">...</svg>';
        case 'image':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">...</svg>';
        case 'code':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-code" viewBox="0 0 16 16">...</svg>';
        case 'zip':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-zip" viewBox="0 0 16 16">...</svg>';
        case 'folder':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">...</svg>';
        default:
            return ''; // Προσαρμόστε ανάλογα με τις ανάγκες σας
    }
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
}

// Προσθέστε αυτήν τη συνάρτηση στον κώδικά σας
function getFileIcon(fileType) {
    switch (fileType.toLowerCase()) {
        case 'folder':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16"> <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/> </svg>';
        case 'pdf':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/> </svg>';
        case 'video':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16"> <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/> </svg>';
        case 'image':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16"> <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/> <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12"/> </svg>';
        case 'code':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-code" viewBox="0 0 16 16"> <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/> </svg>';
        case 'zip':
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-zip" viewBox="0 0 16 16"> <path d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z"/> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1v1z"/> </svg>';
        // Προσθέστε άλλες περιπτώσεις ανάλογα με τους διαφορετικούς τύπους αρχείων
    }
}

function createNewFolderRow() {
    // Επιλέγουμε τον πίνακα
    var table = document.getElementById("lecturesTable");

    // Δημιουργούμε μια νέα γραμμή
    var row = table.insertRow(table.rows.length);

    // Προσθέτουμε τα κελιά
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Προσθέτουμε τα περιεχόμενα των κελιών
    cell1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>';

    // Δημιουργούμε το input field για το όνομα του φακέλου
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'folderNameInput';
    inputField.placeholder = 'Enter folder name';

    // Δημιουργούμε το κουμπί για τη δημιουργία φακέλου
    var createButton = document.createElement('button');
    createButton.textContent = 'Create Folder';
   // Εκτελεί τη συνάρτηση όταν πατηθεί το κουμπί
createButton.onclick = function () {
    // Εδώ μπορείτε να προσθέσετε τον κώδικα που θέλετε για τη δημιουργία του φακέλου
    alert('Create folder: ' + inputField.value);

    // Εξαφανίζουμε το πλαίσιο κειμένου και το κουμπί
    inputField.style.display = 'none';
    createButton.style.display = 'none';

    // Δημιουργούμε ένα νέο span για το κείμενο
    var textSpan = document.createElement('span');
    textSpan.textContent = inputField.value;
    textSpan.style.cursor = 'pointer';
    textSpan.style.textDecoration = 'underline';
    textSpan.style.color = 'blue';

    // Εμφανίζουμε το span με το κείμενο στο κελί
    cell2.innerHTML = '';
    cell2.appendChild(textSpan);
};

    // Προσθέτουμε το input field και το κουμπί στο κελί
    cell2.appendChild(inputField);
    cell2.appendChild(createButton);

    cell3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>';

    // Προσθέτουμε την ημερομηνία δημιουργίας του φακέλου
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    cell4.innerHTML = formattedDate;
}

function logOutBtn() {
    var txt;
    if (confirm("Είσαι σίγουρος ότι επιθυμείς να αποσυνδεθείς από το Λογαριασμό σου;")) {
      window.location.href = 'welcome.html';
    }
    document.getElementById("demo").innerHTML = txt;
}
