const counter = document.querySelector('div.counter')
const els = document.querySelectorAll('.nums span')
const final = document.querySelector('.final')

function runAnimation() {
    els.forEach((el, idx) => el.addEventListener('animationend', e=> {
        const nextToLast = els.length-1;
        if (e.animationName === 'goIn' && idx!== nextToLast) {
            el.classList.remove('in');
            el.classList.add('out')
        } else if (e.animationName === 'goOut' && el.nextElementSibling) {
            el.classList.remove('out')
            el.nextElementSibling.classList.add('in')
        }
        if (!el.nextElementSibling) {
            counter.classList.add('hide')
            setTimeout(()=> {
                final.classList.add("show")
            }, 500)

        }
    }))
}

runAnimation();