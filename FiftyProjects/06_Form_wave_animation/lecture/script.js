const [emailInput, pwdInput] = document.querySelectorAll('.form-control input');
const [emailLabel, pwdLabel] = document.querySelectorAll('.form-control label');
const emailText = emailLabel.textContent;

for (let i = 0; i < emailText.length; i++) {
    const element = emailText[i];
    console.log(element);
    emailInput.insertAdjacentHTML('beforebegin', 'hello\n')
}
