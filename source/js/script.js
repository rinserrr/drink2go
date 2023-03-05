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


/* Swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


/* Map */

const resetButton = document.querySelector('#reset');

const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);
/*
   .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);
  */

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/* Pin */
const mainPinIcon = L.icon({
  iconUrl: '../img/map/map-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    /* Pin */
    icon: mainPinIcon,
  },
);

marker.addTo(map);
