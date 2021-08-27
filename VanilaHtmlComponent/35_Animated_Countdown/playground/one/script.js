const numbers = document.querySelectorAll('span.num');
const starter = document.querySelector('.starter')
console.log(starter)
numbers.forEach(el => el.addEventListener('animationend', e=> {
    el.classList.remove('in');
    el.classList.add('out')
    console.log(e.animationName)
    if (e.animationName === 'goOut') {
        if (el.nextElementSibling != null) {
            el.nextElementSibling.classList.add('in')
        } else {
            starter.classList.remove('hide')
            starter.classList.add('show')
        }
    }
}))