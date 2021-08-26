const bg = document.querySelector(".bg");
const per = document.querySelector(".loading-text");
let load = 0;

const blurring = () => {
  load++;
  per.textContent = `${load}%`;
  per.style.opacity = 1 - (load * 1) / 100;
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
  if (load > 99) {
    clearInterval(int);
  }
};

let int = setInterval(blurring, 30);

if (load === 100) {
  clearInterval(int);
}
