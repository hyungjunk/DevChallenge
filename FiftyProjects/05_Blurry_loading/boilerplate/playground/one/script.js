const per = document.querySelector(".percent");
const btn = document.querySelector(".btn");
const bgImg = document.querySelector(".bg-img");
btn.addEventListener("click", () => {
  let loaded = 0;
  setInterval(() => {
    if (loaded < 100) {
      loaded++;
      per.textContent = `${loaded}%`;
      bgImg.style.filter = `blur(${20 - (loaded / 100) * 20}px)`;
    } else {
      btn.classList.add("active");
    }
  }, 10);
});
