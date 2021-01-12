const panels = document.querySelectorAll("div.panel");

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
