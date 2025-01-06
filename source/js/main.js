// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { toursSwiper, reviewsSwiper, handleAdvSwiper, swiperCoach, handleGallerySwiper } from './swiper';
import { validForm, validateLength } from './form';

window.addEventListener('DOMContentLoaded', () => {
  toursSwiper.init();
  reviewsSwiper.init();
  swiperCoach.init();
  handleAdvSwiper();
  handleGallerySwiper();

  window.addEventListener('load', () => {
    validForm();
    validateLength();
  });
});