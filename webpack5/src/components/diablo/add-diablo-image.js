//add local image to body
import localImage from './image.jpg';
import './diablo.scss';

export function addDiabloImage() {
  var img = document.createElement('img');
  img.classList.add('diablo-image')
  img.src = localImage;
  document.body.appendChild(img);
}