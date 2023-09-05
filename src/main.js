AOS.init({
    duration: 1000,
});

curentSlideID = 1;

sliderElement = document.getElementById("slider");

totalSlides = 4;
console.log(totalSlides);

function next() {
  if (curentSlideID < totalSlides) {
    curentSlideID++;
    showSlide();
  }
}

function prev() {
  if (curentSlideID > 1) {
    curentSlideID--;
    showSlide();
  }
}

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (curentSlideID === index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}