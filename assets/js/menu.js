const menu = document.querySelector('.menu-bar');

 
function toogleMenu() {
    const list = document.querySelector('.menu-list');
    list.classList.toggle('active');
}


menu.addEventListener("click", toogleMenu);