const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let ro = 10;
setInterval(() => {
  const current = ro + 10;
  second.style.transform = `rotate(${current}deg)`;
  ro = current;
}, 1000);
