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
const isEmpty = (data) => {
  const len = data.length;
  if (len === 0) {
    return true;
  }
};

newCardData.forEach(({ author, offer }) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = offer.title;
  if (isEmpty(offer.title)) {
    newCard.querySelector('.popup__title').classList.add('hidden');
  }

  newCard.querySelector('.popup__text--address').textContent = offer.address;
  if (isEmpty(offer.address)) {
    newCard.querySelector('.popup__text--address').classList.add('hidden');
  }

  newCard.querySelector(
    '.popup__text--price',
  ).textContent = `${offer.price} ₽/ночь`;
  if (isEmpty(offer.price)) {
    newCard.querySelector('.popup__text--price').classList.add('hidden');
  }

  newCard.querySelector('.popup__type').textContent = PLACE_TYPE[offer.type];
  if (isEmpty(offer.type)) {
    newCard.querySelector('.popup__type').classList.add('hidden');
  }

  newCard.querySelector(
    '.popup__text--capacity',
  ).textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  if (isEmpty(offer.guests)) {
    newCard.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  newCard.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  if (isEmpty(offer.checkin) || isEmpty(offer.checkout)) {
    newCard.querySelector('.popup__text--time').classList.add('hidden');
  }

  const cardFeaturesList = newCard.querySelector('.popup__features');
  const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
  cardFeaturesList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  if (isEmpty(offer.features)) {
    newCard.querySelector('.popup__features').classList.add('hidden');
  }

  newCard.querySelector('.popup__description').textContent = offer.description;
  if (isEmpty(offer.description)) {
    newCard.querySelector('.popup__description').classList.add('hidden');
  }

  const photosList = newCard.querySelector('.popup__photos');
  const photoItem = photosList.querySelector('.popup__photo');
  photoItem.src = offer.photos[0];
  for (let i = 1; i < offer.photos.length; i++) {
    const newphotoItem = photoItem.cloneNode(true);
    newphotoItem.src = offer.photos[i];
    photosList.appendChild(newphotoItem);
  }
  if (isEmpty(offer.photos)) {
    newCard.querySelector('.popup__photos').classList.add('hidden');
  }

  newCard.querySelector('.popup__avatar').src = author.avatar;
  if (isEmpty(author.avatar)) {
    newCard.querySelector('.popup__avatar').classList.add('hidden');
  }

  offersFragment.appendChild(newCard);
});

const generateOffersOnMap = cityMap.appendChild(offersFragment);

export {generateOffersOnMap};
