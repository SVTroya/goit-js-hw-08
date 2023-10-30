import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('ul.gallery'),
}

fillGallery(galleryItems)

new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', captionDelay: 250, showCounter: false});

function fillGallery(galleryItems) {
  const markup = galleryItems.reduce((markup, item) => {
    markup +=
      `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
          </a>
      </li>`
    return markup
  }, '')

  refs.gallery.insertAdjacentHTML('afterbegin', markup)
}

console.log(galleryItems)
