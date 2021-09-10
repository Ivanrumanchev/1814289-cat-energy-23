var toggleBefore = document.querySelector('.slider__toggle--before');
var toggleAfter = document.querySelector('.slider__toggle--after');
var sliderBefore = document.querySelector('.slider__item--before');
var sliderAfter = document.querySelector('.slider__item--after');
var beforeImg=document.querySelector('.slider__item--before .example__cat-img');
var afterImg=document.querySelector('.slider__item--after .example__cat-img');
var rng=document.querySelector('.slider__range');

function sliderRange() {
  sliderBefore.style.left=rng.value+'%';
  beforeImg.style.transform='translateX(' + '-' + rng.value + '%' + ')';
  sliderBefore.style.width=rng.value+'%';
  sliderAfter.style.left=rng.value+'%';
  afterImg.style.transform='translateX(' + '-' + rng.value + '%' + ')';
  sliderAfter.style.width=(100 - rng.value)+'%';
  afterImg.style.margin='0 0 0 ' + (100 - (rng.value*1.5))+'px';
}

function sliderRangeTablet(value) {
  sliderBefore.style.left=value+'%';
  beforeImg.style.transform='translateX(' + '-' + value + '%' + ')';
  sliderBefore.style.width=value+'%';
  sliderAfter.style.left=value+'%';
  afterImg.style.transform='translateX(' + '-' + value + '%' + ')';
  sliderAfter.style.width=(100 - value)+'%';
  afterImg.style.margin='0 0 0 ' + (100 - (value*1.5))+'px';
}

var listenerAfterTablet = function (event) {
  rng.value = 0;
  sliderRangeTablet(rng.value);
}

var listenerBeforeTablet = function (event) {
  rng.value = 100;
  sliderRangeTablet(rng.value);
}

var listenerAfterMobile = function (event) {
  if (sliderBefore.classList.contains('slider__item--current')) {
    sliderBefore.classList.add('visually-hidden');
    sliderAfter.classList.remove('visually-hidden');
    sliderBefore.classList.remove('slider__item--current');
    sliderAfter.classList.add('slider__item--current');

    toggleBefore.classList.remove('slider__toggle--checked');
    toggleAfter.classList.add('slider__toggle--checked');
    toggleBefore.classList.add('slider__toggle--field');
    toggleAfter.classList.remove('slider__toggle--field');
  }
}

var listenerBeforeMobile = function (event) {
  if (sliderAfter.classList.contains('slider__item--current')) {
    sliderAfter.classList.add('visually-hidden');
    sliderBefore.classList.remove('visually-hidden');
    sliderAfter.classList.remove('slider__item--current');
    sliderBefore.classList.add('slider__item--current');

    toggleAfter.classList.remove('slider__toggle--checked');
    toggleBefore.classList.add('slider__toggle--checked');
    toggleAfter.classList.add('slider__toggle--field');
    toggleBefore.classList.remove('slider__toggle--field');
  }
}

function handleTabletChangeSlider(e) {
  if (e.matches) {
    if (sliderAfter.classList.contains('slider__item--current')) {
      sliderBefore.classList.remove('visually-hidden');
    };
    if (sliderBefore.classList.contains('slider__item--current')) {
      sliderAfter.classList.remove('visually-hidden');
      sliderBefore.classList.remove('slider__item--current');
      sliderAfter.classList.add('slider__item--current');

      toggleBefore.classList.remove('slider__toggle--checked');
      toggleAfter.classList.add('slider__toggle--checked');
      toggleBefore.classList.add('slider__toggle--field');
      toggleAfter.classList.remove('slider__toggle--field');
    };

    sliderRange();

    toggleAfter.removeEventListener('click', listenerAfterMobile);
    toggleAfter.addEventListener('click', listenerAfterTablet);

    toggleBefore.removeEventListener('click', listenerBeforeMobile);
    toggleBefore.addEventListener('click', listenerBeforeTablet);

  } else {
    toggleAfter.removeEventListener('click', listenerAfterTablet);
    toggleAfter.addEventListener('click', listenerAfterMobile);

    toggleBefore.removeEventListener('click', listenerBeforeTablet);
    toggleBefore.addEventListener('click', listenerBeforeMobile);

    sliderBefore.style.left=0+'%';
    beforeImg.style.transform='translateX(' + '0%' + ')';
    sliderBefore.style.width='100%';
    sliderAfter.style.left=0+'%';
    afterImg.style.transform='translateX(' + '0%' + ')';
    sliderAfter.style.width='100%';
    afterImg.style.margin='0 0 0 0';

    sliderBefore.classList.add('visually-hidden');
  }
}

mediaQuery.addListener(handleTabletChangeSlider);
handleTabletChangeSlider(mediaQuery)
