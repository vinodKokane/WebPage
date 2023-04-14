let manu_btn = document.querySelector(".bars");
let nav_bar = document.querySelector(".nav");
manu_btn.addEventListener("click", function () {
    nav_bar.classList.add("nav-bar");
})

let close_btn = document.querySelector(".close-btn");

close_btn.addEventListener("click", function () {
    nav_bar.classList.remove("nav-bar");
})