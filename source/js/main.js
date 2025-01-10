// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { toursSwiper, reviewsSwiper, handleAdvSwiper, heroSwiper, swiperCoach, handleGallerySwiper } from './swiper';
import { validForm, validateLength } from './form';
import { menuToggle, navLinkToggle } from './menu';

window.addEventListener('DOMContentLoaded', () => {
  toursSwiper.init();
  reviewsSwiper.init();
  swiperCoach.init();
  heroSwiper.init();
  handleAdvSwiper();
  handleGallerySwiper();

  window.addEventListener('load', () => {
    validForm();
    validateLength();
    menuToggle();
    navLinkToggle();
  });
});