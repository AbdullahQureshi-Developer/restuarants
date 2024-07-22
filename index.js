// script.js

const Hamburger = document.querySelector('.Hamburger');
const nav = document.querySelector('.nav-links');

Hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});
