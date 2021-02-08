const cups = document.querySelectorAll(".cup-small");

const highlightCups = (cupIdx) => {
  cups.forEach((cup, idx) => {
    console.log(cup);
    if (idx <= cupIdx) {
      cup.classList.add("full");
    }
  });
};

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
