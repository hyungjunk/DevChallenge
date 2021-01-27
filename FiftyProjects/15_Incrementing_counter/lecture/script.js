const counters = document.querySelectorAll(".counter");
console.log(counters);

counters.forEach((counter) => {
  console.log(counter.getAttribute("data-target"));
});

// const interval = setInterval(() => {
//   // console.log(twtCount.innerHTML);
//   // twtCount.innerHTML++;
//   twtCount.innerHTML = +twtCount.innerHTML + 10;
//   if (twtCount.innerText === "3000") {
//     clearInterval(interval);
//   }
// }, 10);
