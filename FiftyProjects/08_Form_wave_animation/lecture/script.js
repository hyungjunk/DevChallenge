const [emailInput, pwdInput] = document.querySelectorAll(".form-control input");
const [emailLabel, pwdLabel] = document.querySelectorAll(".form-control label");
const emailText = emailLabel.textContent;

[emailLabel, pwdLabel].forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 20}ms">${letter}</span>`
    )
    .join("");
});
