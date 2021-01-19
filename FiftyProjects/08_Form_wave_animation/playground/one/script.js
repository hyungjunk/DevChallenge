const txt = document.querySelector("p.invisible");

txt.innerHTML = txt.innerText
  .split("")
  .map((s, idx) => {
    return `<span class="active" style="transition-delay:${idx * 40}ms">${s}</span>`;
  })
  .join("");
