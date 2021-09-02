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

// var toggleBefore = document.querySelector('.slider__toggle--before');
// var toggleAfter = document.querySelector('.slider__toggle--after');
// var sliderBefore = document.querySelector('.slider__item--before');
// var sliderAfter = document.querySelector('.slider__item--after');

// toggleAfter.addEventListener('click', function() {
//   if (sliderBefore.classList.contains('slider__item--current')) {
//     sliderBefore.classList.add('visually-hidden');
//     sliderAfter.classList.remove('visually-hidden');
//     sliderBefore.classList.remove('slider__item--current');
//     sliderAfter.classList.add('slider__item--current');

//     toggleBefore.classList.remove('slider__toggle--before--checked');
//     toggleAfter.classList.add('slider__toggle--after--checked');
//     toggleBefore.classList.add('slider__toggle--check');
//     toggleAfter.classList.remove('slider__toggle--check');
//   }
// });

// toggleBefore.addEventListener('click', function() {
//   if (sliderAfter.classList.contains('slider__item--current')) {
//     sliderAfter.classList.add('visually-hidden');
//     sliderBefore.classList.remove('visually-hidden');
//     sliderAfter.classList.remove('slider__item--current');
//     sliderBefore.classList.add('slider__item--current');

//     toggleAfter.classList.remove('slider__toggle--after--checked');
//     toggleBefore.classList.add('slider__toggle--before--checked');
//     toggleAfter.classList.add('slider__toggle--check');
//     toggleBefore.classList.remove('slider__toggle--check');
//   }
// });

const mediaQuery = window.matchMedia('(min-width: 768px)');
let scopeMobile = 14;
let scopeTablet = 15.3;
let widthIconMobile = 57;
let heightIconMobile = 53;
let widthIconTablet = 113;
let heightIconTablet = 106;
let iconImageOffsetXMobile = -25;
let iconImageOffsetYMobile = -45;
let iconImageOffsetXTablet = -50;
let iconImageOffsetYTablet = -60;

var scope = scopeMobile;
var widthIcon = widthIconMobile;
var heightIcon = heightIconMobile;
var iconImageOffsetX = iconImageOffsetXMobile;
var iconImageOffsetY = iconImageOffsetYMobile;

function handleTabletChange(e) {
  if (e.matches) {
    scope = scopeTablet;
    widthIcon = widthIconTablet;
    heightIcon = heightIconTablet;
    iconImageOffsetX = iconImageOffsetXTablet;
    iconImageOffsetY = iconImageOffsetYTablet;

  } else {
    scope = scopeMobile;
    widthIcon = widthIconMobile;
    heightIcon = heightIconMobile;
    iconImageOffsetX = iconImageOffsetXMobile;
    iconImageOffsetY = iconImageOffsetYMobile;
  }
}

handleTabletChange(mediaQuery)

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: scope
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Cat Energy',
          balloonContent: 'Приходите в гости :)'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/mappin.svg',
          // Размеры метки.
          iconImageSize: [widthIcon, heightIcon],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [iconImageOffsetX, iconImageOffsetY]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
