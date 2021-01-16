const lists = document.querySelectorAll("ul li");

window.addEventListener("scroll", () => {
  showLI();
});

const showLI = () => {
  const viewable = window.innerHeight;
  lists.forEach((li) => {
    if (li.getBoundingClientRect().top < viewable) {
      li.classList.add("show");
    }
  });
};

const initLI = () => {
  const viewable = window.innerHeight;
  for (let li = 0; li < lists.length; li++) {
    setTimeout(() => {
      console.log("a");
      if (lists[li].getBoundingClientRect().top < viewable) {
        lists[li].classList.add("show");
      }
    }, li * 30);
  }
};

initLI();
