import Swiper from 'swiper/bundle';

let advSwiper = null;

export const toursSwiper = new Swiper('.swiper2', {
  direction: 'horizontal',
  init: false,
  loop: false,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      navigation: {
        nextEl: '.swiper-button--tours-next',
        prevEl: '.swiper-button--tours-prev',
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button--tours-next',
        prevEl: '.swiper-button--tours-prev',
      },
    }
  },
});

export const reviewsSwiper = new Swiper('.swiper4', {
  direction: 'horizontal',
  init: false,
  loop: false,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: false,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button--reviews-next',
        prevEl: '.swiper-button--reviews-prev',
      },
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
      navigation: {
        nextEl: '.swiper-button--reviews-next',
        prevEl: '.swiper-button--reviews-prev',
      },
    }
  },
});

const initAdvSwiper = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= Screen.desktop) {
    if (!advSwiper) {
      advSwiper = new Swiper('.swiper5', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        keyboard: {
          enabled: false,
        },
        breakpoints: {
          1440: {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--next',
              prevEl: '.swiper-button--prev',
            },
          },
        },
      });

      setCustomSlideMove(advSwiper, {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
      });
    }
  } else {
    if (advSwiper) {
      advSwiper.destroy(true, true);
      advSwiper = null;
    }
  }
};

export const handleAdvSwiper = () => {
  initAdvSwiper();
  window.addEventListener(
    'resize',
    throttle(() => initAdvSwiper(), 200)
  );
};

const swiperCoach = new Swiper('.coach__swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  initialSlide: 2,
  modules: [Navigation],
  navigation: {
    nextEl: '.coach__button-swiper--next',
    prevEl: '.coach__button-swiper--prev',
  },
  slideClass: 'coach__item',
  wrapperClass: 'coach__list',
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },

    1440: {
      slidesPerView: 4,
      initialSlide: 0,
    }
  }
});

swiperCoach.init();
