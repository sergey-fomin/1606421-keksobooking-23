
const popupTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
// const cityMap = document.querySelector('#map-canvas');
// const offersFragment = document.createDocumentFragment();
// const newCardData = generateNearbyAdverts;

const PLACE_TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const isEmpty = (data) => {
  if (data.length === 0 || undefined) {
    return true;
  }
};

const generateOfferPopup = (offerData) => {
  const newOfferPopup = popupTemplate.cloneNode(true);

  newOfferPopup.querySelector('.popup__title').textContent = offerData.offer.title;
  if (isEmpty(offerData.offer.title)) {
    newOfferPopup.querySelector('.popup__title').classList.add('hidden');
  }

  newOfferPopup.querySelector('.popup__text--address').textContent = offerData.offer.address;
  if (isEmpty(offerData.offer.address)) {
    newOfferPopup.querySelector('.popup__text--address').classList.add('hidden');
  }

  newOfferPopup.querySelector(
    '.popup__text--price',
  ).textContent = `${offerData.offer.price} ₽/ночь`;
  if (isEmpty(offerData.offer.price)) {
    newOfferPopup.querySelector('.popup__text--price').classList.add('hidden');
  }

  newOfferPopup.querySelector('.popup__type').textContent = PLACE_TYPE[offerData.offer.type];
  if (isEmpty(offerData.offer.type)) {
    newOfferPopup.querySelector('.popup__type').classList.add('hidden');
  }

  newOfferPopup.querySelector(
    '.popup__text--capacity',
  ).textContent = `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`;
  if (isEmpty(offerData.offer.guests)) {
    newOfferPopup.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  newOfferPopup.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  if (isEmpty(offerData.offer.checkin) || isEmpty(offerData.offer.checkout)) {
    newOfferPopup.querySelector('.popup__text--time').classList.add('hidden');
  }

  const cardFeaturesList = newOfferPopup.querySelector('.popup__features');
  const modifiers = offerData.offer.features.map((feature) => `popup__feature--${feature}`);
  cardFeaturesList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  if (isEmpty(offerData.offer.features)) {
    newOfferPopup.querySelector('.popup__features').classList.add('hidden');
  }

  newOfferPopup.querySelector('.popup__description').textContent = offerData.offer.description;
  if (isEmpty(offerData.offer.description)) {
    newOfferPopup.querySelector('.popup__description').classList.add('hidden');
  }

  const photosList = newOfferPopup.querySelector('.popup__photos');
  const photoItem = photosList.querySelector('.popup__photo');
  photoItem.src = offerData.offer.photos[0];
  for (let i = 1; i < offerData.offer.photos.length; i++) {
    const newphotoItem = photoItem.cloneNode(true);
    newphotoItem.src = offerData.offer.photos[i];
    photosList.appendChild(newphotoItem);
  }
  if (isEmpty(offerData.offer.photos)) {
    newOfferPopup.querySelector('.popup__photos').classList.add('hidden');
  }

  newOfferPopup.querySelector('.popup__avatar').src = offerData.author.avatar;
  if (isEmpty(offerData.author.avatar)) {
    newOfferPopup.querySelector('.popup__avatar').classList.add('hidden');
  }

  return newOfferPopup;
};

export { generateOfferPopup };
