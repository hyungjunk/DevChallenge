const buttons = document.querySelectorAll(".ripple");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const { x, y } = e;
    console.log({ x, y });
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    console.log({ buttonTop, buttonLeft });

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log({ xInside, yInside });

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    console.log(this);
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 2000);
  });
});
