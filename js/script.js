var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var sliders = document.querySelectorAll('.slider-list li');
var dots = document.querySelectorAll('.dot');
var perforatorSlide = document.querySelector('.perforators-dot');
var drillsSlide = document.querySelector('.drills-dot');
var currentSlide = 0;

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