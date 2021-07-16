import { generateNearbyAdverts } from './data.js';

const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const cityMap = document.querySelector('#map-canvas');
const offersFragment = document.createDocumentFragment();
const newCardData = generateNearbyAdverts;
const PLACE_TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

console.log(newCardData);

newCardData.forEach(({ author, offer }) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector('.popup__text--address').textContent = offer.address;
  newCard.querySelector(
    '.popup__text--price',
  ).textContent = `${offer.price} ₽/ночь`;
  newCard.querySelector('.popup__type').textContent = PLACE_TYPE[offer.type];
  newCard.querySelector(
    '.popup__text--capacity',
  ).textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  newCard.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const features = offer.features;
  const cardFeaturesList = newCard.querySelector('.popup__features');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);

  cardFeaturesList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  newCard.querySelector('.popup__description').textContent = offer.description;

// PHOTOS!!!!!!!!!!!!

  const photos = offer.photos;
  const cardPhotosList = newCard.querySelector('.popup__photos');
  const cardPhotoTemplate = cardPhotosList.children[0];

  cardPhotosList.children[0].remove();

  console.log(cardPhotoTemplate);

  for (let i = 0; i < photos.length; i++) {
    console.log(i);
    cardPhotoTemplate.src = photos[i];
    cardPhotosList.appendChild(cardPhotoTemplate);
    console.log(cardPhotosList);
  }


  // PHOTOS DONE

  newCard.querySelector('.popup__avatar').src = author.avatar;

  offersFragment.appendChild(newCard);
});

cityMap.appendChild(offersFragment);

export { cardTemplate };


// В блок .popup__photos выведите все фотографии из списка offer.photos.
//   Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
//
// Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.

// Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.

// Подключите модуль в проект.
