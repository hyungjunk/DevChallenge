import './scss/add-text.scss';
import _ from 'lodash';

function createTextElement(additionalTexts) {
    const text = document.createElement('h1');
    text.classList.add('title');
    text.innerText = 'Webpack Test. \n' + _.upperFirst(additionalTexts.join(' '));
    return text;
}

export function addTextElementToDocumentBody() {
    const someAdditionalTexts = [
        'copilot',
        'makes',
        'your',
        'life',
        'easier',
    ]
    document.body.appendChild(createTextElement(someAdditionalTexts));
}