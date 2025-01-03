// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { toursSwiper, reviewsSwiper, handleAdvSwiper } from './swiper';

window.addEventListener('DOMContentLoaded', () => {
  toursSwiper.init();
  reviewsSwiper.init();
  handleAdvSwiper();
}
);