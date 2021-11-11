import './helloworld-button.scss';

export default class HelloworldButton {

    buttonText = 'Button Text!'
    render() {
        const button = document.createElement('button');
        button.textContent = 'Hello World';
        button.classList.add('helloworld');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = this.buttonText;
            document.body.appendChild(p);
        }
        document.body.appendChild(button);
    }
}