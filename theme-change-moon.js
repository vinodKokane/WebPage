let icon = document.querySelector(".fa-moon");
icon.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon")
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon")
    }
})