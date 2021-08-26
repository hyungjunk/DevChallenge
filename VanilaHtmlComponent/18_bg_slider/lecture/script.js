const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let activeSlide = 0;

setBgToBody();

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  container.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}
