const txtarea = document.getElementById("textarea");
const tags = document.getElementById("tags");

txtarea.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "Enter") {
    let spans = tags.querySelectorAll("span");
    let loop = 30;
    for (let i = 0; i < loop; i++) {
      let duration = 100;
      highlight(spans, i, duration);
    }
  } else {
    const txt = e.target.value;
    let arr = txt.split(",");
    arr = arr.filter((item) => item.trim() !== "").map((item) => item.trim());
    tags.innerHTML = "";
    arr.forEach((txt) => {
      let span = document.createElement("span");
      span.classList.add("tag");
      span.innerText = txt;
      tags.appendChild(span);
    });
  }
});

const highlight = (spans, i, duration) => {
  setTimeout(() => {
    spans[i % 4].classList.add("highlight");
    setTimeout(() => {
      spans[i % 4].classList.remove("highlight");
    }, duration);
  }, duration * i);
};
