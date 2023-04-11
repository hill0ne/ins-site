const body = document.querySelector('body');
const ins = document.querySelector('.ins');
const br_pc = document.querySelector('.br-pc');
const btn_footer = document.querySelector('.footer__button');
const list_footer = document.querySelector('.footer__list');
const btn_hamburger = document.querySelector('.menu-mo__button');
const btn_close = document.querySelector('.menu-mo__close');
const menu_mobile = document.querySelector('.menu-mo');

let state = false;

btn_footer.addEventListener('click', toggle);

function toggle() {
  if (!state) {
    btn_footer.classList.add('is-active');
    list_footer.classList.add('is-active');
    state = true;
  } else {
    btn_footer.classList.remove('is-active');
    list_footer.classList.remove('is-active');
    state = false;
  }
}

btn_hamburger.addEventListener('click', openMenu);
btn_close.addEventListener('click', closeMenu);

function openMenu() {
  ins.classList.add('is-active');
}

function closeMenu() {
  ins.classList.remove('is-active');
}

var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
