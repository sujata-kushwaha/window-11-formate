let taskbaar = document.getElementsByClassName("taskbaar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbaar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-460px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
