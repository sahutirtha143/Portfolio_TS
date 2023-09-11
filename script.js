
// TOGGLE ICON NAVBAR
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections=document.querySelectorAll('selection');
let navlinks=document.querySelectorAll('header nav a');

//REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK LINK
window.onscroll=()=>{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};





