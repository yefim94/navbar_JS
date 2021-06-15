const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', (e) => {
  menuLinks.classList.toggle('active');
});