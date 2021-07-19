const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.js-gallery');

galleryItems.forEach(({ preview, original, description }) => {
  gallery.insertAdjacentHTML('beforeend', `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
});

const lightBox = document.querySelector('.js-lightbox');
const lightBoxImg = lightBox.querySelector('.lightbox__image');


gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG")
  return;
  setLiteBoxImgAttributes(
    event.target.dataset.source,
    event.target.getAttribute('alt')
  );
  lightBox.classList.add('is-open');

});

const setLiteBoxImgAttributes = (src, alt) => {
  lightBoxImg.setAttribute('src', src);
  lightBoxImg.setAttribute('alt', alt);
};

const closeLightBox = () => {
  lightBox.classList.remove('is-open');
  setLiteBoxImgAttributes('', '');
};

const closeButton = document.querySelector('button[data-action="close-lightbox"]');
closeButton.addEventListener('click', closeLightBox);

const closeOverlay = document.querySelector('.lightbox__overlay');
closeOverlay.addEventListener('click', closeLightBox);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightBox();
});

window.addEventListener('keydown', e => {
  const currentSrc = lightBoxImg.getAttribute('src');
  const curSrcIndex = galleryItems.findIndex(item => item.original === currentSrc);

  if (e.key === 'ArrowRight') {
    let nextSrcIndex = curSrcIndex + 1;
    if (nextSrcIndex >= galleryItems.length) {
      nextSrcIndex = 0;
    }
    setLiteBoxImgAttributes(
      galleryItems[nextSrcIndex].original, 
      galleryItems[nextSrcIndex].description
    );
  }

  if (e.key === 'ArrowLeft') {
    let prevSrcIndex = curSrcIndex - 1;
    if (prevSrcIndex < 0) {
      prevSrcIndex = galleryItems.length - 1;
    }
    setLiteBoxImgAttributes(
      galleryItems[prevSrcIndex].original, 
      galleryItems[prevSrcIndex].description
    );
  }
});








