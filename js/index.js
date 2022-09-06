// js for nav-bar style change
const trailer = document.querySelector(".trailer-container");
const main = document.querySelector("main");
var vid = document.getElementById("trailer");
const navbar = document.querySelector("nav");


// js for main div opacity

window.addEventListener('scroll', function() {
    trailer.style.opacity = 1 - this.scrollY/350;
    main.style.opacity = 0 + this.scrollY/250;
    
    //volume fades out as the user scrolls 
    // then pause when it hits 0 volume
    try {
        vid.volume = 1 - this.scrollY/350;
        vid.play();
    } catch (error) {
        vid.pause();
    } 
});

// Highlight trailer controls js
var vid = document.getElementById("trailer");
var btn1 = document.getElementById("mute-video-button");
var btn2 = document.getElementById("unmute-video-button");
var btn3 = document.getElementById("controls-play");

function playAgain(){
    vid.src="https://drive.google.com/uc?export=download&id=1ZrnAgL3NHZ8PzVCGQ-wu1iV7sTA4mP88";  
    btn3.style.display = "none";
    vid.play();
}

function enableMute() {
    vid.muted = true;
    btn1.style.display = "block";
    btn2.style.display = "none";
}

function disableMute() {
    vid.muted = false;
    btn1.style.display = "none";
    btn2.style.display = "block";
}

vid.addEventListener('ended',function(){
    btn3.style.display = "block";
    vid.src="";
});


// horizontal scroll js
const buttonRight1 = document.getElementById("right-scroll1");
const buttonLeft1 = document.getElementById("left-scroll1");

buttonRight1.onclick = function() {
    document.getElementById("scroll-container1").scrollLeft += 900;
}

buttonLeft1.onclick = function() {
    document.getElementById("scroll-container1").scrollLeft -= 900;
}

const buttonRight2 = document.getElementById("right-scroll2");
const buttonLeft2 = document.getElementById("left-scroll2");

buttonRight2.onclick = function() {
    document.getElementById("scroll-container2").scrollLeft += 500;
}

buttonLeft2.onclick = function() {
    document.getElementById("scroll-container2").scrollLeft -= 500;
}

const buttonRight3 = document.getElementById("right-scroll3");
const buttonLeft3 = document.getElementById("left-scroll3");

buttonRight3.onclick = function() {
    document.getElementById("scroll-container3").scrollLeft += 500;
}

buttonLeft3.onclick = function() {
    document.getElementById("scroll-container3").scrollLeft -= 500;
}