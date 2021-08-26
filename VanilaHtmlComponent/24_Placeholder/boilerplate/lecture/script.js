const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImage = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
    header.innerHTML = `
        <picture>
            <img src="https://source.unsplash.com/random/400x350" alt="">
        </picture>
    `;
    title.innerHTML = `
        Lorem ipsum dolor sit amet. 
    `
    excerpt.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum!
    `
    profileImage.innerHTML = `
        <picture>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile image">
        </picture>
    `
    name.innerHTML = `
            John Doe
    `
    date.innerHTML = `
        Oct 08, 2020
    `
    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))
}

setTimeout(getData, 2500)
