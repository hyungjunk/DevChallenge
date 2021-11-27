import './scss/add-text.scss';

function createTextElement() {
    const text = document.createElement('h1');
    text.classList.add('title');
    text.innerText = 'Hello World';
    return text;
}

export function addTextElementToDocumentBody() {
    document.body.appendChild(createTextElement());
}