//Season selection
var select = document.getElementById("select");
// var season1 = document.getElementById("season1");

function showSeason(select){
    if(select.value==3){
        season3.style.display = "flex";
        season2.style.display = "none";
        season1.style.display = "none";
    }
    else if(select.value==2){
        season3.style.display = "none";
        season2.style.display = "flex";
        season1.style.display = "none";
    }
    else if(select.value==1){
        season3.style.display = "none";
        season2.style.display = "none";
        season1.style.display = "flex";
    }
}