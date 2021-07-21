const popupTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const defaultAvatar = './img/avatars/default.png';
const FEATURES_CLASSES = {
  featureClass: 'popup__feature',
  featureModifier: 'popup__feature--',
};
const PLACE_TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const isNotEmpty = (value, element) => value || element.remove();

const createPhotosList = (currentOffer, photosList) => {
  const currentOfferPhotos = currentOffer.offer.photos || [];
  const photoSample = photosList.querySelector('.popup__photo');
  photosList.textContent = '';
  currentOfferPhotos.forEach((path) => {
    const photo = photoSample.cloneNode(true);
    photo.src = path;
    photosList.append(photo);
  });

  return photosList;
};

const createFeaturesList = (currentOffer, featuresList) => {
  const adFeatures = currentOffer.offer.features || [];
  featuresList.textContent = '';
  adFeatures.forEach((feature) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add(
      FEATURES_CLASSES.featureClass,
      `${FEATURES_CLASSES.featureModifier}${feature}`,
    );
    featuresList.append(featureElement);
  });

  return featuresList;
};

const generateOfferPopup = (currentOffer) => {
  const popupElement = popupTemplate.cloneNode(true);
  const offerPrice = popupElement.querySelector('.popup__text--price');
  const offerPriceCurrency = offerPrice.querySelector('span');
  const offerDescription = popupElement.querySelector('.popup__description');
  const offerTitle = popupElement.querySelector('.popup__title');
  const offerAddress = popupElement.querySelector('.popup__text--address');
  const offerFeatures = popupElement.querySelector('.popup__features');
  const offerPhotos = popupElement.querySelector('.popup__photos');
  const offerPlaceType = popupElement.querySelector('.popup__type ');
  const offerCapacity = popupElement.querySelector('.popup__text--capacity');
  const offerTime = popupElement.querySelector('.popup__text--time');
  const offerAvatar = popupElement.querySelector('.popup__avatar');

  offerAvatar.src = currentOffer.author.avatar || defaultAvatar;
  offerTitle.textContent = isNotEmpty(currentOffer.offer.title, offerTitle);
  offerAddress.textContent = isNotEmpty(
    currentOffer.offer.address,
    offerAddress,
  );

  offerPrice.textContent = `${isNotEmpty(
    currentOffer.offer.price,
    offerPrice,
  )} `;
  if (offerPrice.textContent) {
    offerPrice.append(offerPriceCurrency);
  }

  offerPlaceType.textContent = PLACE_TYPE[currentOffer.offer.type];
  offerCapacity.textContent = `${currentOffer.offer.rooms} комнаты для ${currentOffer.offer.guests} гостей`;

  offerTime.textContent = `Заезд после ${currentOffer.offer.checkin}, выезд до ${currentOffer.offer.checkout}`;

  const offerFeaturesList = createFeaturesList(currentOffer, offerFeatures);
  if (offerFeaturesList.children.length) {
    popupElement.replaceChild(offerFeaturesList, offerFeatures);
  } else {
    offerFeatures.remove();
  }

  offerDescription.textContent = isNotEmpty(
    currentOffer.offer.description,
    offerDescription,
  );

  const offerPhotosList = createPhotosList(currentOffer, offerPhotos);
  if (offerPhotosList.children.length) {
    popupElement.replaceChild(offerPhotosList, offerPhotos);
  } else {
    offerPhotos.remove();
  }

  return popupElement;
};

export { generateOfferPopup };
