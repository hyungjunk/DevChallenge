import addDummyImageOnDocumentBody from './add-image';
import pythonCode from './sample.py';
import giffy from './11.gif';

addDummyImageOnDocumentBody();

function addPythonCodeToBody() {
    const code = document.createElement('pre');
    code.innerText = pythonCode;
    document.body.appendChild(code);
}

function addGifToBody() {
    const gif = document.createElement('img');
    gif.src = giffy;
    document.body.appendChild(gif);
}

addPythonCodeToBody();
addGifToBody();