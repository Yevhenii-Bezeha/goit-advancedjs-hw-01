import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
 
const list = document.querySelector('.gallery');

const galleryImages = galleryItems
.map(image => {
  const galleryItem = `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
    <img class="gallery__image"
    src="${image.preview}" 
    loading="lazy"
    alt="${image.description}"/>
   </a>
</li>`;
  return galleryItem;
})
.join('');

list.insertAdjacentHTML('afterbegin', galleryImages);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});