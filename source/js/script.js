/* Toggle Menu */

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--no-js');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
  }
});
