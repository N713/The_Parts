'use strict';

const TABLET_RESOLUTION = 1023;
const burger = document.body.querySelector(`.burger`);
const nav = document.body.querySelector(`.header__nav-list`);
const isTablet = window.matchMedia(`(max-width: ${TABLET_RESOLUTION}px)`).matches;

if (burger && isTablet) {
  nav.classList.add(`visually-hidden`);

  burger.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    nav.classList.toggle(`visually-hidden`);
  });
}
