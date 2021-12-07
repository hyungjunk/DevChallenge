import logoSvg from '../static/logo.svg'

export function addLogo() {
    // create image element
    const logo = document.createElement('img')
    logo.src = logoSvg;
    logo.classList.add('logo')
    document.body.appendChild(logo);
}
