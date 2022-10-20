let heroSlider = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

// -----------------gallery----------------
let gallerySlider = new Swiper(".gallery__swiper-container", {
  speed: 500,
  autoHeight: false,
  watchOverflow: true,
  initialSlide: 0,

  slidesPerView: 1,
  grid: {
    fill: 'row',
    rows: 1,
  },
  spaceBetween: 30,
  pagination: {
    el: ".gallery__swiper-pagination" ,
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-btn--next",
    prevEl: ".gallery__swiper-btn--prev"
  },

  breakpoints: {

    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
})

// ---------partners----------
let partnersSlider = new Swiper(".partners__swiper", {
  speed: 500,
  direction: 'horizontal',

  slidesPerView: 1,
  spaceBetween: 34,

  breakpoints: {

    500: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },

  navigation: {
    nextEl: '.partners__swiper-btn--next',
    prevEl: '.partners__swiper-btn--prev'
  },
})
