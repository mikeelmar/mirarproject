var sort = document.getElementById("select-sort");

function sortList(sort){
    if(sort.value==1 || sort.value==2){
        window.alert("Oops! This function is unavailable");
        document.getElementById("default").selected = true;
    }
}