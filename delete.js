//lesson name and source title text
var urlParams = new URLSearchParams(window.location.search);
var lessonText = urlParams.get('lessonText');
var sourceTitle = urlParams.get('sourceTitle');

// Decode the URI components and set the content of the new <p> elements
document.getElementById('lessonTextOnNewPage').textContent = decodeURIComponent(lessonText);
document.getElementById('sourceTitleOnNewPage').textContent = decodeURIComponent(sourceTitle);


//------------------------------------------------------------------------------------------------------
//delete btn code

