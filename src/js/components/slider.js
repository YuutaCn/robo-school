import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__contens', {
  // slidesPerView: 4,
  simulateTouch: true,
  // spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1920: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 10
    },
    1439: {
      initialSlide: 0,
      slidesPerView: 3.6,
      spaceBetween: 13
    },
    1100: {
      initialSlide: 0,
      slidesPerView: 2.7,
      spaceBetween: 7
    },

    320: {
      initialSlide: 0,
      slidesPerView: 1.4,
      spaceBetween: 0
    },

    480: {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 0
    },
    730: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 0
    },
    960: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 0
    },
    2300: {
      initialSlide: 0,
      slidesPerView: 5,
      spaceBetween: 0
    },
  }
});
