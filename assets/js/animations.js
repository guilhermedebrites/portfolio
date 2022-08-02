const header = document.querySelector(".header");
var lastScrollTop = 0;

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

animeScroll();

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach(function(e){
        if((windowTop) > e.offsetTop){
            e.classList.add(animationClass);
        }
        else{
            e.classList.remove(animationClass);
        }
    })
}

const show = document.querySelector('.showmore');
const showless = document.querySelector('.showless');

function toogleShow() {
    const shownow = document.querySelectorAll('.shownow');
    const showless = document.querySelector('.showless');
    shownow.forEach(e => {
        e.classList.toggle('show');
    });
    show.classList.toggle('disappear');
    showless.classList.toggle('activeshow');
}

show.addEventListener('click', toogleShow);
showless.addEventListener('click', toogleShow);



