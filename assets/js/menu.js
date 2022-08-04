const menu = document.querySelector('.menu-bar');

 
function toogleMenu() {
    const list = document.querySelector('.menu-list');
    const logo = document.querySelector('.logo-header');
    list.classList.toggle('active');
    logo.classList.toggle('logo-disable');
}


menu.addEventListener("click", toogleMenu);