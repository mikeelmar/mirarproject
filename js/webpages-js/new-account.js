var hrule = document.getElementsByClassName("phase-progress")[0];
var billingText = document.getElementById("billing-text");
var content1 = document.getElementById("personal-info-container");
var content2 = document.getElementById("billing-info-container");

var nextPage1 = document.getElementById("next-page1");

nextPage1.onclick = function() {
    hrule.style.background =  "linear-gradient(90deg, var(--mustard), var(--mustard), transparent)";
    billingText.classList.add("active");

    content1.style.gridArea = "content2";
    content1.style.visibility = "hidden";

    content2.style.gridArea = "content1";
    content2.style.visibility = "visible";
}

document.getElementById("prev-page1").onclick = function(){
    hrule.style.background =  "linear-gradient(90deg, var(--mustard), transparent, transparent)";
    billingText.classList.remove("active");

    content1.style.gridArea = "content1";
    content1.style.visibility = "visible";

    content2.style.gridArea = "content2";
    content2.style.visibility = "hidden";
}

document.getElementById("next-page2").onclick = function(){
    window.alert("Service Unavailable");
}