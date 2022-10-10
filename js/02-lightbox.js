import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerElementsGallery = document.querySelector(".gallery");
const imageMarkup = createItemOfGallery(galleryItems);

containerElementsGallery.insertAdjacentHTML("beforeend",imageMarkup);


function createItemOfGallery(){
    return galleryItems.map(({preview,original,description}) =>  {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
}).join('');
    
}
console.log(createItemOfGallery());

document.querySelector(".gallery");

containerElementsGallery.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event){
event.preventDefault();
const isItemGallery = event.target.classList.contains("gallery__image");
if (!isItemGallery){
    return;
}
console.log(event.target.dataset.source);

let lightboxGallery = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
};

// lightboxGallery.on('show.simplelightbox', function (event) {
// 	console.log(galleryItems);
// });


// console.log(galleryItems);

