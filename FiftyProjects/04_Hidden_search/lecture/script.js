const div = document.querySelector("div.search");
const inp = document.querySelector("input.input");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  div.classList.toggle("active");
  inp.focus();
});
