'use strict'
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.visibility = "visible";
    document.getElementsByClassName("open-btn")[0].style.display = 'none';
    document.getElementsByClassName("close-btn")[0].style.display = 'block';
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.visibility = "hidden";
    document.getElementsByClassName("open-btn")[0].style.display = 'block';
    document.getElementsByClassName("close-btn")[0].style.display = 'none';
}