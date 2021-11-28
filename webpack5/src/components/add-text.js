import './scss/add-text.scss';

function createTextElement() {
    const text = document.createElement('h1');
    text.classList.add('title');
    text.innerText = 'Webpack--';
    return text;
}

export function addTextElementToDocumentBody() {
    document.body.appendChild(createTextElement());
}