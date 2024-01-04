'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function generateCalendar() {
        const calendarBody = document.getElementById('calendar-body');
        const monthYearElement = document.getElementById('month-year');
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Clear previous content
        calendarBody.innerHTML = '';

        // Set month and year in the header
        monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

        // Create header row
        const headerRow = document.createElement('tr');
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        });
        calendarBody.appendChild(headerRow);

        // Calculate the starting day of the month
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();

        // Create rows for the calendar
        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    // Empty cells before the first day of the month
                    cell.textContent = '';
                } else if (date <= daysInMonth) {
                    cell.textContent = date;
                if (date === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                    // Highlight the current day with red color
                    cell.classList.add('current-date');
                }
                date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function getMonthName(month) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[month];
    }

    function updateCalendar() {
        generateCalendar();
    }

    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        updateCalendar();
    }

    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        updateCalendar();
    }

    // Initial generation
    generateCalendar();

    // Event listeners for next and previous buttons
    document.getElementById('next-btn').addEventListener('click', nextMonth);
    document.getElementById('prev-btn').addEventListener('click', prevMonth);
});