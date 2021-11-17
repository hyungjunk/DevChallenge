//add local image to body
import localImage from '../static/image.jpg';

export function addLocalImage() {
  var img = document.createElement('img');
  img.src = localImage;
  document.body.appendChild(img);
}