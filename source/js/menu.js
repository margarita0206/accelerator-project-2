const navMain = document.querySelector('.header__container');
const navToggle = document.querySelector('.header__button-burger');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('.header-nav__link');
const isEscapeKey = (evt) => evt.key === 'Escape';

const menuToggle = () => {
  navToggle.onclick = function () {
    navMain.classList.toggle('header__container--opened');
    body.classList.toggle('page-body--no-scroll');
  };

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      navMain.classList.remove('header__container--opened');
      body.classList.remove('page-body--no-scroll');
    }
  });
};

const navLinkToggle = () => {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      navMain.classList.remove('header__container--opened');
      body.classList.remove('page-body--no-scroll');
    });
  }
};

export { menuToggle, navLinkToggle }