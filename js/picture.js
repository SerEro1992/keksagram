import { showBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.children[0];
//const pictureTemplate = pictureTemplateContainer.querySelector('.picture');
//const pictureTemplate = pictureTemplateContainer.children[0];
const container =  document.querySelector('.pictures');


// создаем шабкон картинки
const createPicture = (data) =>{
  const{ url,description, likes, comments } = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;


  picture.addEventListener('click', () => {
    showBigPicture(data);
  });

  return picture;
};

//  визуализация изображения
const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  container.append(fragment);
};

export { renderPictures };
