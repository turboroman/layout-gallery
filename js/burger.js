const burgerButton = document.querySelector('.burger-button');
const burgerOverlay = document.querySelector('.burger-overlay');
const backgroundOverlay = document.querySelector('.background-overlay');

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    burgerOverlay.classList.toggle('open');
    backgroundOverlay.classList.toggle('bg-overlay');
});

const searchButton = document.querySelector('.header-top__search-btn');
const searchOverlay = document.querySelector('.header-top__search');
const searchClose = document.querySelector('.header-top__search-close');

searchButton.addEventListener('click', function() {
  searchButton.classList.toggle('active');
  searchOverlay.classList.toggle('open');
});

searchClose.addEventListener('click', function() {
  searchOverlay.classList.remove('open');
});
