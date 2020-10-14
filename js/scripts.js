var navButton = document.querySelector(".title-and-nav-button span"),
    elementsToHide = document.querySelector(".content-container"),
    navPanel = document.querySelector("nav"),
    doors = document.querySelectorAll(".first-doors, .second-doors");
 

function whenXPressed() {
    navButton.className="burger"; 
    window.setTimeout(showContent,200);
    hideNav();  
    switchDoors();
}

function whenBurrgerPressed() {
    navButton.className="ximage";
    window.setTimeout(showNav,10)
    hideContent();
    switchDoors("on");
}

function showNav() {
    navPanel.className = "site-nav-on";  
}

function hideNav() {
    navPanel.className = "site-nav-off";  
}

function showContent() {
    elementsToHide.className = "content-container-on" ; 
}

function hideContent() {
    elementsToHide.className = "content-container-off" ; 
}

function switchDoors(state) {
    doors.forEach(function (door) {
        if (state ==="on") {
            door.classList.remove("doors-off");
        }
        else{
            door.classList.add("doors-off");
        }
    })
}

function resizeDoors() {
    console.log("aaa");
}

navButton.onclick = function () {
    if (navButton.className==="burger"){
        whenBurrgerPressed();
    }else{
        whenXPressed();       
    }
}

window.onresize = function () {
    if (navButton.className!=="burger"){
        resizeDoors();
    } 
}
