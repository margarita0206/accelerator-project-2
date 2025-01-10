import Swiper from 'swiper/bundle';
import { setCustomSlideMove, throttle } from './utils';
import { Screen } from './const';

let advSwiper = null;
let gallerySwiper = null;

export const heroSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  init: false,
  loop: true,
  simulateTouch: false,
  slidesPerView: 1,
  pagination: {
    clickable: true,
    type: 'bullets',
    el: '.swiper-pagination',
    bulletClass: 'hero__swiper-pagination-bullet',
    bulletActiveClass: 'hero__swiper-pagination-bullet--active',
    renderBullet: function (index, className) {
      return `<span class="${className} hero__swiper-pagination-bullet hero__swiper-pagination-bullet--${index}"
        aria-label="Перейти к слайду ${index + 1}."
        role="button">
        </span>`;
    },
  },
  breakpoints: {
    320: {
      pagination: {
        clickable: false,
      }
    },
    768: {
      pagination: {
        clickable: false,
      }
    },
    1440: {
      pagination: {
        clickable: true,
      }
    },
  },
});

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

export const swiperCoach = new Swiper('.swiper3', {
  direction: 'horizontal',
  init: false,
  loop: false,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },
  
  slideClass: 'coach__item',
  wrapperClass: 'coach__list',
  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: false,
      spaceBetween: 40,
      initialSlide: 2,
    },

    768: {
      slidesPerView: 3,
      initialSlide: 0,
      navigation: {
        nextEl: '.coach__swiper-button--next',
        prevEl: '.coach__swiper-button--prev',
      },
    },

    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      navigation: {
        nextEl: '.coach__swiper-button--next',
        prevEl: '.coach__swiper-button--prev',
      },
    }
  }
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
              nextEl: '.swiper-button--adv-next',
              prevEl: '.swiper-button--adv-prev',
            },
          },
        },
      });

      setCustomSlideMove(advSwiper, {
        nextEl: '.swiper-button--adv-next',
        prevEl: '.swiper-button--adv-prev',
      });
    }
  } else {
    if (advSwiper) {
      advSwiper.destroy(true, true);
      advSwiper = null;
    }
  }
};

const initGallerySwiper = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < Screen.desktop) {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.swiper6', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        keyboard: {
          enabled: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--gallery-next',
              prevEl: '.swiper-button--gallery-prev',
            },
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: false,
            slideToClickedSlide: false,
            navigation: {
              nextEl: '.swiper-button--gallery-next',
              prevEl: '.swiper-button--gallery-prev',
            },
          },
        },
      });
    }
  } else {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
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

export const handleGallerySwiper = () => {
  initGallerySwiper();
  window.addEventListener(
    'resize',
    throttle(() => initGallerySwiper(), 200)
  );
};