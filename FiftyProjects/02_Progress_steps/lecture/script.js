// Next 누르면 active 이동

const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector("button#prev");
const nextBtn = document.querySelector("button#next");
const progressBar = document.querySelector(".progress");

let currentActive = 0;

prevBtn.addEventListener("click", () => {
  if (currentActive === 0) {
    return;
  }
  nextBtn.disabled = false;
  circles[currentActive].classList.remove("active");
  const actives = document.querySelectorAll(".active");
  progressBar.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;
  currentActive--;
  if (currentActive === 0) {
    prevBtn.disabled = "disabled";
  }
});

nextBtn.addEventListener("click", () => {
  if (currentActive === circles.length - 1) {
    return;
  }
  circles[currentActive + 1].classList.add("active");
  const actives = document.querySelectorAll(".active");
  progressBar.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;
  currentActive++;
  if (currentActive !== 0) {
    prevBtn.disabled = false;
  }
  if (currentActive === circles.length - 1) {
    nextBtn.disabled = "disabled";
  }
});
