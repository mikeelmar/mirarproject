//Season selection
var select = document.getElementById("select");
// var season1 = document.getElementById("season1");

function showSeason(select){
    if(select.value==1){
        season1.style.display = "flex";
        season2.style.display = "none";
    }
    else if(select.value==2){
        season1.style.display = "none";
        season2.style.display = "flex";
    }
}