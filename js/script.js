var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var sliders = document.querySelectorAll('.slider-list li');
var dots = document.querySelectorAll('.dot');
var perforatorSlide = document.querySelector('.perforators-dot');
var drillsSlide = document.querySelector('.drills-dot');
var currentSlide = 0;
var deliveryButton = document.querySelector('.delivery-button');
var deliverySlide = document.querySelector('.slide-delivery');
var warrantButton = document.querySelector('.warrant-button');
var warrantSlide = document.querySelector('.slide-warrant');
var creditButton = document.querySelector('.credit-button');
var creditSlide = document.querySelector('.slide-credit');
var serviceList = document.querySelectorAll('.servise-slides li');
var serviceButtons = document.querySelectorAll('.services-button');
var feedback = document.querySelector('.contacts-button');
var modalFeedback = document.querySelector('.modal-feedback');
var close = document.querySelector('.close-button');
var user = document.querySelector('.user');
var map = document.querySelector('.map');
var modalMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.modal-map .close-button');

console.log(map);

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  user.focus();
});

close.addEventListener("click", function (evt) {
  modalFeedback.classList.remove("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  modalMap.classList.remove("modal-show");
});

deliveryButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < serviceList.length; i++) {
    serviceList[i].classList.remove('current-slide');
    serviceButtons[i].classList.remove('button-current');
  };
  deliverySlide.classList.add('current-slide');
  deliveryButton.classList.add('button-current');
  deliveryButton.blur();
});

warrantButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < serviceList.length; i++) {
    serviceList[i].classList.remove('current-slide');
    serviceButtons[i].classList.remove('button-current');
  };
  warrantSlide.classList.add('current-slide');
  warrantButton.classList.add('button-current');
  warrantButton.blur();
});

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < serviceList.length; i++) {
    serviceList[i].classList.remove('current-slide');
    serviceButtons[i].classList.remove('button-current');
  };
  creditSlide.classList.add('current-slide');
  creditButton.classList.add('button-current');
  creditButton.blur();
});

prevButton.onclick = function () {
  sliders[currentSlide].className = '';
  dots[currentSlide].classList.remove('current-dot'); 
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliders.length - 1;
  }
  
  sliders[currentSlide].className = 'active';
  dots[currentSlide].classList.add('current-dot');
}

nextButton.onclick = function () {
  sliders[currentSlide].className = '';
  dots[currentSlide].classList.remove('current-dot');  
  currentSlide++;
  if (currentSlide > sliders.length - 1) {
    currentSlide = 0;
  }

  sliders[currentSlide].className = 'active';
  dots[currentSlide].classList.add('current-dot');
}

drillsSlide.onclick = function () {
  currentSlide = 0;
  for (var i = 0; i < sliders.length; i++) {
    dots[i].classList.remove('current-dot');
    sliders[i].className = '';
  };
  dots[currentSlide].classList.add('current-dot');
  sliders[currentSlide].className = 'active';
}

perforatorSlide.onclick = function () {
  currentSlide = 1;
  for (var i = 0; i < sliders.length; i++) {
    dots[i].classList.remove('current-dot');
    sliders[i].className = '';
  };
  dots[currentSlide].classList.add('current-dot');
  sliders[currentSlide].className = 'active';
}

