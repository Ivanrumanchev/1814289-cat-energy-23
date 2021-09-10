const NAV_MAIN = document.querySelector('.main-nav');
const NAV_TOGGLE = document.querySelector('.main-nav__toggle');
const LOCATION_MAP = document.querySelector('.location__map');
const MEDIA_QUERY_TABLET = window.matchMedia('(min-width: 768px)');
const MEDIA_QUERY_DESKTOP = window.matchMedia('(min-width: 1440px)');

const SCOPE_MOBILE = 14;
const SCOPE_TABLET = 15.3;
const WIDTH_ICON_MOBILE = 57;
const HEIGHT_ICON_MOBILE = 53;
const WIDTH_ICON_TABLET = 113;
const HEIGHT_ICON_TABLET = 106;
const ICON_IMAGE_OFFSET_X_MOBILE = -25;
const ICON_IMAGE_OFFSET_Y_MOBILE = -45;
const ICON_IMAGE_OFFSET_X_TABLET = -50;
const ICON_IMAGE_OFFSET_Y_TABLET = -60;

let scope = SCOPE_MOBILE;
let widthIcon = WIDTH_ICON_MOBILE;
let heightIcon = HEIGHT_ICON_MOBILE;
let iconImageOffsetX = ICON_IMAGE_OFFSET_X_MOBILE;
let iconImageOffsetY = ICON_IMAGE_OFFSET_Y_MOBILE;

LOCATION_MAP.classList.remove('location__map--nojs');
NAV_MAIN.classList.remove('main-nav--nojs');

NAV_TOGGLE.addEventListener('click', function() {
  NAV_MAIN.classList.toggle('main-nav--closed');
  NAV_MAIN.classList.toggle('main-nav--opened');
});

function handleTabletChange(e) {
  if (e.matches) {
    scope = SCOPE_TABLET;
    widthIcon = WIDTH_ICON_TABLET;
    heightIcon = HEIGHT_ICON_TABLET;
    iconImageOffsetX = ICON_IMAGE_OFFSET_X_TABLET;
    iconImageOffsetY = ICON_IMAGE_OFFSET_Y_TABLET;

  } else {
    scope = SCOPE_MOBILE;
    widthIcon = WIDTH_ICON_MOBILE;
    heightIcon = HEIGHT_ICON_MOBILE;
    iconImageOffsetX = ICON_IMAGE_OFFSET_X_MOBILE;
    iconImageOffsetY = ICON_IMAGE_OFFSET_Y_MOBILE;
  }
}

handleTabletChange(MEDIA_QUERY_TABLET)

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: scope
      }, {
          searchControlProvider: 'yandex#search'
      }),

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
