import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';


// Change code below this line

const containerElementsGallery = document.querySelector(".gallery");
const imageMarkup = createItemOfGallery(galleryItems);

containerElementsGallery.insertAdjacentHTML("beforeend",imageMarkup);


function createItemOfGallery(){
    return galleryItems.map(({preview,original,description}) =>  {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
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

const modalWindowOriginal = basicLightbox.create(`
<img src="${event.target.dataset.source}">
`);
window.addEventListener('keydown', onEscapePress);
modalWindowOriginal.show();


function onEscapePress(event){ 
if (event.code === "Escape"||event == "mousedown"){
    modalWindowOriginal.close();
    window.removeEventListener('keydown', onEscapePress);
}
console.log(event.code);
}
};

function silent() {window.removeEventListener('keydown', onEscapePress)};



// modalWindowOriginal.close(() => console.log('lightbox not visible anymore'))
// };
// if (event.button === "click"){
//     window.removeEventListener('keydown', onEscapePress);




// onClose: (modalWindowOriginal) => {
//     window.removeEventListener('keydown', onEscapePress);
// }

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// window.addEventListener('keydown', onEscapePress);
// window.removeEventListener('keydown', onEscapePress)




// document.querySelector(".change-color");
// changeColorButton.addEventListener("click",  () =>  
// { 
//   colorBodyEl.style.backgroundColor = getRandomHexColor();
// console.log(getRandomHexColor());
//   // let colorId = getRandomHexColor();

// const colorId = getRandomHexColor();

// const htmlColorEl = document.querySelector(".color");
// htmlColorEl.innerHTML = colorId;
// });

// const imageEl = images.map((image) =>`<li><img src = ${image.url} alt = ${image.alt}></img></li>`);

// elementsGallery.insertAdjacentHTML("afterend",imageEl.join(''));

// console.log(galleryItems);
