import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__contens', {
  slidesPerView: 4,
  simulateTouch: true,
  spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1920: {
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 10
    },
    1439: {
      initialSlide: 1,
      slidesPerView: 3.6,
      spaceBetween: 13
    },
    1100: {
      initialSlide: 1,
      slidesPerView: 2.7,
      spaceBetween: 7
    },
  }
});
