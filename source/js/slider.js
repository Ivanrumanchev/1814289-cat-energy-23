const TOGGLE_BEFORE = document.querySelector('.slider__toggle--before');
const TOGGLE_AFTER = document.querySelector('.slider__toggle--after');
const SLIDER_BEFORE = document.querySelector('.slider__item--before');
const SLIDER_AFTER = document.querySelector('.slider__item--after');
const BEFORE_IMG=document.querySelector('.slider__item--before .example__cat-img');
const AFTER_IMG=document.querySelector('.slider__item--after .example__cat-img');
const RANGE=document.querySelector('.slider__range');
const GRADIENT=document.querySelector('.example__background');

function gradient() {
  GRADIENT.style.background='linear-gradient(to right, #f2f2f2 calc(' + (48+RANGE.value*4/100) + '% + ' + (RANGE.value/100 * 650) + 'px), #eaeaea calc(' + (48+RANGE.value/100*4) + '% + ' + (RANGE.value/100 * 650) + 'px))';
}

function sliderRange() {
  SLIDER_BEFORE.style.left=RANGE.value+'%';
  BEFORE_IMG.style.transform='translateX(' + '-' + RANGE.value + '%' + ')';
  SLIDER_BEFORE.style.width=RANGE.value+'%';
  SLIDER_AFTER.style.left=RANGE.value+'%';
  AFTER_IMG.style.transform='translateX(' + '-' + RANGE.value + '%' + ')';
  SLIDER_AFTER.style.width=(100 - RANGE.value)+'%';
  AFTER_IMG.style.margin='0 0 0 ' + (100 - (RANGE.value*1.5))+'px';

  if (MEDIA_QUERY_DESKTOP.matches) {
    gradient()
  } else {
    GRADIENT.style.background='#eaeaea';
  }
}

function sliderRangeTablet(value) {
  SLIDER_BEFORE.style.left=value+'%';
  BEFORE_IMG.style.transform='translateX(' + '-' + value + '%' + ')';
  SLIDER_BEFORE.style.width=value+'%';
  SLIDER_AFTER.style.left=value+'%';
  AFTER_IMG.style.transform='translateX(' + '-' + value + '%' + ')';
  SLIDER_AFTER.style.width=(100 - value)+'%';
  AFTER_IMG.style.margin='0 0 0 ' + (100 - (value*1.5))+'px';

  if (MEDIA_QUERY_DESKTOP.matches) {
    gradient()
  } else {
    GRADIENT.style.background='#eaeaea';
  }
}

let listenerAfterTablet = function (event) {
  RANGE.value = 0;
  sliderRangeTablet(RANGE.value);
}

let listenerBeforeTablet = function (event) {
  RANGE.value = 100;
  sliderRangeTablet(RANGE.value);
}

let listenerAfterMobile = function (event) {
  if (SLIDER_BEFORE.classList.contains('slider__item--current')) {
    SLIDER_BEFORE.classList.add('visually-hidden');
    SLIDER_AFTER.classList.remove('visually-hidden');
    SLIDER_BEFORE.classList.remove('slider__item--current');
    SLIDER_AFTER.classList.add('slider__item--current');

    TOGGLE_BEFORE.classList.remove('slider__toggle--checked');
    TOGGLE_AFTER.classList.add('slider__toggle--checked');
    TOGGLE_BEFORE.classList.add('slider__toggle--field');
    TOGGLE_AFTER.classList.remove('slider__toggle--field');
  }
}

let listenerBeforeMobile = function (event) {
  if (SLIDER_AFTER.classList.contains('slider__item--current')) {
    SLIDER_AFTER.classList.add('visually-hidden');
    SLIDER_BEFORE.classList.remove('visually-hidden');
    SLIDER_AFTER.classList.remove('slider__item--current');
    SLIDER_BEFORE.classList.add('slider__item--current');

    TOGGLE_AFTER.classList.remove('slider__toggle--checked');
    TOGGLE_BEFORE.classList.add('slider__toggle--checked');
    TOGGLE_AFTER.classList.add('slider__toggle--field');
    TOGGLE_BEFORE.classList.remove('slider__toggle--field');
  }
}

function handleTabletChangeSlider(e) {
  if (e.matches) {
    if (SLIDER_AFTER.classList.contains('slider__item--current')) {
      SLIDER_BEFORE.classList.remove('visually-hidden');
    };
    if (SLIDER_BEFORE.classList.contains('slider__item--current')) {
      SLIDER_AFTER.classList.remove('visually-hidden');
      SLIDER_BEFORE.classList.remove('slider__item--current');
      SLIDER_AFTER.classList.add('slider__item--current');

      TOGGLE_BEFORE.classList.remove('slider__toggle--checked');
      TOGGLE_AFTER.classList.add('slider__toggle--checked');
      TOGGLE_BEFORE.classList.add('slider__toggle--field');
      TOGGLE_AFTER.classList.remove('slider__toggle--field');
    };

    sliderRange();

    TOGGLE_AFTER.removeEventListener('click', listenerAfterMobile);
    TOGGLE_AFTER.addEventListener('click', listenerAfterTablet);

    TOGGLE_BEFORE.removeEventListener('click', listenerBeforeMobile);
    TOGGLE_BEFORE.addEventListener('click', listenerBeforeTablet);

  } else {
    TOGGLE_AFTER.removeEventListener('click', listenerAfterTablet);
    TOGGLE_AFTER.addEventListener('click', listenerAfterMobile);

    TOGGLE_BEFORE.removeEventListener('click', listenerBeforeTablet);
    TOGGLE_BEFORE.addEventListener('click', listenerBeforeMobile);

    SLIDER_BEFORE.style.left=0+'%';
    BEFORE_IMG.style.transform='translateX(' + '0%' + ')';
    SLIDER_BEFORE.style.width='100%';
    SLIDER_AFTER.style.left=0+'%';
    AFTER_IMG.style.transform='translateX(' + '0%' + ')';
    SLIDER_AFTER.style.width='100%';
    AFTER_IMG.style.margin='0 0 0 0';

    SLIDER_BEFORE.classList.add('visually-hidden');
  }
}

MEDIA_QUERY_TABLET.addListener(handleTabletChangeSlider);
handleTabletChangeSlider(MEDIA_QUERY_TABLET)

function handleDesktopChangeSlider(e) {
  if (e.matches) {
    gradient()
  } else {
    GRADIENT.style.background='#eaeaea';
  }
}

MEDIA_QUERY_DESKTOP.addListener(handleDesktopChangeSlider);
handleDesktopChangeSlider(MEDIA_QUERY_DESKTOP)
