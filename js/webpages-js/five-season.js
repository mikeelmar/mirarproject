//Season selection
var select = document.getElementById("select");
// var season1 = document.getElementById("season1");

function showSeason(select){
    if(select.value==5){
        season5.style.display = "flex";
        season4.style.display = "none";
        season3.style.display = "none";
        season2.style.display = "none";
        season1.style.display = "none";
    }
    else if(select.value==4){
        season5.style.display = "none";
        season4.style.display = "flex";
        season3.style.display = "none";
        season2.style.display = "none";
        season1.style.display = "none";
    }
    else if(select.value==3){
        season5.style.display = "none";
        season4.style.display = "none";
        season3.style.display = "flex";
        season2.style.display = "none";
        season1.style.display = "none";
    }
    else if(select.value==2){
        season5.style.display = "none";
        season4.style.display = "none";
        season3.style.display = "none";
        season2.style.display = "flex";
        season1.style.display = "none";
    }
    else if(select.value==1){
        season5.style.display = "none";
        season4.style.display = "none";
        season3.style.display = "none";
        season2.style.display = "none";
        season1.style.display = "flex";
    }
    else{
        season5.style.display = "none";
        season4.style.display = "none";
        season3.style.display = "none";
        season2.style.display = "none";
        season1.style.display = "none";
    }
}