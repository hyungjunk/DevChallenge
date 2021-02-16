const prevBtn = document.querySelector("button.prev.active");
const nextBtn = document.querySelector("button.next.active");

const circles = document.querySelectorAll(".circle");
const activeCircle = document.querySelector(".circle.active");

nextBtn.addEventListener("click", (e) => {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    if (circle.classList.contains("active")) {
      continue;
    } else {
      circle.classList.add("active");
      break;
    }
  }
});
