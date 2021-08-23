var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var toggleBefore = document.querySelector('.slider__toggle-before');
var toggleAfter = document.querySelector('.slider__toggle-after');
var sliderBefore = document.querySelector('.slider__item--before');
var sliderAfter = document.querySelector('.slider__item--after');

toggleAfter.addEventListener('click', function() {
  if (sliderBefore.classList.contains('slider__item--current')) {
    sliderBefore.classList.add('visually-hidden');
    sliderAfter.classList.remove('visually-hidden');
    sliderBefore.classList.remove('slider__item--current');
    sliderAfter.classList.add('slider__item--current');

    toggleBefore.classList.remove('slider__toggle-before--checked');
    toggleAfter.classList.add('slider__toggle-after--checked');
    toggleBefore.classList.add('slider__toggle--check');
    toggleAfter.classList.remove('slider__toggle--check');
  }
});

toggleBefore.addEventListener('click', function() {
  if (sliderAfter.classList.contains('slider__item--current')) {
    sliderAfter.classList.add('visually-hidden');
    sliderBefore.classList.remove('visually-hidden');
    sliderAfter.classList.remove('slider__item--current');
    sliderBefore.classList.add('slider__item--current');

    toggleAfter.classList.remove('slider__toggle-after--checked');
    toggleBefore.classList.add('slider__toggle-before--checked');
    toggleAfter.classList.add('slider__toggle--check');
    toggleBefore.classList.remove('slider__toggle--check');
  }
});
