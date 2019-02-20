var buttonMenu = document.querySelector(".page-header__button-menu");
var menu = document.querySelector(".main-nav");

var sliderPhoto = document.querySelector(".slider__photo");

var after = document.querySelector(".slider__radio--after");
var before = document.querySelector(".slider__radio--before");

var scale = document.querySelector(".slider__scale");

var widthMobile = 320;
var zoomMap = 18;
var iconOnMapWidth = 113;
var iconOnMapHeight = 106;
var positionIconX = -50;
var positionIconY = -135;

buttonMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav--close");
  buttonMenu.classList.toggle("page-header__button-menu--close");
})

function check(radio) {
  radio.checked = true;
}

function uncheck(radio) {
  radio.checked = false;
}

if (before && after && sliderPhoto && scale) {
  before.addEventListener("click", function () {
      scale.classList.add("slider__scale--right");
      sliderPhoto.classList.add("slider__photo--after");
  });

  after.addEventListener("click", function () {
    scale.classList.remove("slider__scale--right");
    sliderPhoto.classList.remove("slider__photo--after");
  });

  scale.addEventListener("click", function() {
    if (!scale.classList.contains("slider__scale--right")) {
      scale.classList.add("slider__scale--right");
      sliderPhoto.classList.add("slider__photo--after");
      check(before);
      uncheck(after);
    } else {
      scale.classList.remove("slider__scale--right");
      sliderPhoto.classList.remove("slider__photo--after");
      check(after);
      uncheck(before);
    }
  });
}

ymaps.ready(init);

// if (document.querySelector(".address__map").offsetWidth == widthMobile) {
//   iconOnMapWidth = 62;
//   iconOnMapHeight = 53;
//   zoomMap = 16;
//   positionIconX = 20;
//   positionIconY = -100;
// }

function init() {
    var myMap = new ymaps.Map("address__map", {
        center: [59.938631, 30.323055],
        zoom: zoomMap,
        controls: ['geolocationControl', 'zoomControl', 'fullscreenControl']
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-pin.png',
      iconImageSize: [iconOnMapWidth, iconOnMapHeight],
      iconImageOffset: [positionIconX, positionIconY]
  });

  myMap.geoObjects.add(myPlacemark);
}
