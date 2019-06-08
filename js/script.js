var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var sliders = document.querySelectorAll('.slider-list li');
var currentSlide = 0;

prevButton.onclick = function () {
  sliders[currentSlide].className = ''; 
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliders.length - 1;
  }

  sliders[currentSlide].className = 'active';
}

nextButton.onclick = function () {
  sliders[currentSlide].className = ''; 
  currentSlide++;
  if (currentSlide > sliders.length - 1) {
    currentSlide = 0;
  }

  sliders[currentSlide].className = 'active';
}