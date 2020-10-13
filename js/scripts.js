var navButton = document.querySelector(".nav-button"),
    elementsToHide = document.querySelectorAll(".container p, .container h2"),
    navPanel = document.querySelector(".site-nav");

function whenXPressed() {
    navButton.classList.remove("ximage");
    navButton.classList.add("burger"); 
    showPandH();
    navPanel.classList.add("display-off");
}

function whenBurrgerPressed() {
    navButton.classList.remove("burger");
    navButton.classList.add("ximage");  
    hidePandH();  
    navPanel.classList.remove("display-off");
}

function hidePandH() {
    elementsToHide.forEach(function(element) {
        element.classList.add("display-off");
    });
}

function showPandH() {
    elementsToHide.forEach(function(element) {
        element.classList.remove("display-off");
    });   
}

navButton.onclick = function () {
    if (navButton.classList.value.includes("burger")){
        whenBurrgerPressed();
    }else{
        whenXPressed();       
    }
}