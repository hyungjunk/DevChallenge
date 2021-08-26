const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;
  timeEl.innerHTML = `${hour}:${minute.toString().padStart(2, "0")}${ampm}`;
}

setInterval(setTime, 1000);
