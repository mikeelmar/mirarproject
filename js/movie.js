// Inject YouTube API script
// credits https://codepen.io/AmrSubZero/pen/oLOYrA
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

const container = document.getElementById("iframe-container");
const iframe = document.getElementById("video");
const main = document.querySelector("main");
const playAgain = document.getElementById("movie-trailer-play-button");

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
        container.style.height = "100vh";
        iframe.style.marginTop = "0px";
        container.style.opacity = "1";
        main.style.opacity = "0";
        playAgain.style.display = "none";
        iframe.style.opacity = "1";
    }
    else if (event.data == YT.PlayerState.PAUSED){
        container.style.height = "50vh";
        iframe.style.marginTop = "-50px";
        container.style.opacity = ".5";
        main.style.opacity = "1";
        iframe.style.opacity = "1";
    }
    else if (event.data == YT.PlayerState.ENDED){
        container.style.height = "50vh";
        iframe.style.marginTop = "-50px";
        container.style.opacity = ".5";
        main.style.opacity = "1";
        playAgain.style.display = "block";
        iframe.style.opacity = ".1";
    }
}

function playTrailerAgain(){
    player.playVideo();
}

//autopause video once scrolled
const sectionThree = document.querySelector(".scroll-trigger1");

const sectionThreeOptions = {};

const sectionThreeObserver = new IntersectionObserver(function(entries, sectionThreeObserver) {
    entries.forEach(entry => {
        try {
            if(!entry.isIntersecting){
                player.pauseVideo();
            }
        } catch (error) {
            console.log("video not playing");
        }
    });
}, sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);

//tab selection
var creditsBtn = document.getElementById("credits-tab");
var reviewBtn = document.getElementById("review-tab");
var credits = document.getElementById("credits-tab-div");
var review = document.getElementById("review-tab-div");

function creditsActive(){
    creditsBtn.classList.remove("credits-tab-inactive");
    reviewBtn.classList.remove("review-tab-active");
    credits.style.gridArea="tab1";
    review.style.gridArea="tab2";
    reviewBtn.classList.add("review-tab-inactive");
}

function reviewActive(){
    reviewBtn.classList.add("review-tab-active");
    creditsBtn.classList.add("credits-tab-inactive");
    reviewBtn.classList.remove("review-tab-inactive");
    review.style.gridArea="tab1";
    credits.style.gridArea="tab2";
}