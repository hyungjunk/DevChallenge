import man from './man.jpg';

function addImage() {
  const img = document.createElement('img');
    img.src = man;
    img.alt = 'Random image';
  const body = document.querySelector('body');
  body.appendChild(img);
}
export default addImage;