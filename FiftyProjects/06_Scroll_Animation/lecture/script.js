const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showbox);

function showbox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    if (box.getBoundingClientRect().top < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
