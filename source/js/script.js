var buttonMenu = document.querySelector(".page-header__button-menu");
var menu = document.querySelector(".main-nav");

var sliderPhoto = document.querySelector(".slider__photo");

var after = document.querySelector(".slider__radio--after");
var before = document.querySelector(".slider__radio--before");

var scale = document.querySelector(".slider__scale");

buttonMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav--hiddden");
  buttonMenu.classList.toggle("page-header__button-menu--close");
})


function check(radio) {
  radio.checked = true;
}

function uncheck(radio) {
  radio.checked = false;
}

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
