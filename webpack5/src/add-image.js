import man from "./man.jpg";
import altText from './sampletext.txt'

export default function addDummyImageOnDocumentBody() {
    const img = document.createElement('img');
    img.alt = altText;
    img.src = man;
    document.body.appendChild(img);
}

