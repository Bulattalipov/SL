
let menuBtn = document.querySelector(".header__menu-btn");
let navbar = document.querySelector(".navbar");

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle("header__menu-btn--active");
  navbar.classList.toggle("navbar__active");
});