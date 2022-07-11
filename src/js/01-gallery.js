import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector('.gallery');
const galleryCardsArr = galleryItems
.map(
    (el) => 
    `<div class="gallery__link">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
)
.join("");


galleryList.innerHTML = galleryCardsArr;


 

galleryList.insertAdjacentHTML("afterbegin", galleryCardsArr);

var lightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionPosition: "bottom",
captionDelay: 250,
});
