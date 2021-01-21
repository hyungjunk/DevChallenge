const input = document.querySelector("#input");
const span = document.querySelector("span");
const tbody = document.querySelector("#tbody");
input.addEventListener("keydown", (e) => {
  span.innerText = `${e.code}`;
  const trs = tbody.querySelectorAll("tr");
  console.log(trs);
  trs.forEach(tr=> {
    const [first, ...rest] = tr.innerText.split('');
    if (first !== 'A') {
      tr.classList.add('inactive')
    }
  })
});
