let menu = document.querySelector(".app-header-menu");
let xmark = document.querySelector(".app-header-xmarkIcon");
let burger = document.querySelector(".app-header-burgerIcon");

burger.addEventListener('click', () => {
    menu.classList.add("show")
    xmark.style.display = "block";
    burger.style.display = "none";
});

xmark.addEventListener('click', () => {
    menu.classList.remove("show")
    xmark.style.display = "none";
    burger.style.display = "inline-block";
});