export function addImage() {
    const image = document.createElement('img');
    image.src = 'https://source.unsplash.com/random/400x200';
    document.body.appendChild(image);
}