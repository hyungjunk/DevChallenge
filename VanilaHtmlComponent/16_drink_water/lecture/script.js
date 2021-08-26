const smallCups = document.querySelectorAll(".cup-small");
const percentage = document.querySelector("#percentage");
const liters = document.querySelector("#liters");
const remained = document.querySelector("#remained");
const MEASURE = 0.25;

const highlightCups = (cupIdx) => {
  if (
    smallCups[cupIdx].classList.contains("full") &&
    !smallCups[cupIdx].nextElementSibling?.classList.contains("full")
  ) {
    cupIdx--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= cupIdx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    liters.innerText = 2 - MEASURE * fullCups + "L";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = ((2 * fullCups) / 16) * 100 + "%";
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = 2 - MEASURE * fullCups + "L";
  }
};

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});
