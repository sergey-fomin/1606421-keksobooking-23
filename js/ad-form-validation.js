const MIN_PRICE_PER_NIGHT = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};
const MAX_ROOMS_FOR_GUESTS = 3;
const MIN_GUESTS_PER_ROOM = 1;
const adForm = document.querySelector('.ad-form');
const adSelectPlaceType = adForm.type;
const adInputPrice = adForm.price;
const adSelectTimein = adForm.timein;
const adSelectTimeout = adForm.timeout;
const adSelectRooms = adForm.rooms;
const adSelectGuests = adForm.capacity;
const adInputTitle = adForm.title;
const minAdInputTitleLength = adInputTitle.getAttribute('minlength');
const maxAdInputTitleLength = adInputTitle.getAttribute('maxlength');

const maxAdPrice = Number(adInputPrice.getAttribute('max'));

const setFieldErrorMessage = (field) => {
  if (field.validity.valueMissing) {
    field.setCustomValidity('Заполните обязательное поле');
  }
};

const markInvalidFields = (evt) => {
  const field = evt.target;
  field.classList.add('invalid-field');
  setFieldErrorMessage(field);
};

const unMarkInvalidFields = () => {
  const fields = adForm.elements;
  [...fields].forEach((field) => {
    if (field.checkValidity()) {
      field.classList.remove('invalid-field');
    }
  });
};

const placeTypeChangeHandler = () => {
  const minPriceForType = MIN_PRICE_PER_NIGHT[adSelectPlaceType.value];

  adInputPrice.placeholder = minPriceForType;
  adInputPrice.min = minPriceForType;
};

const timeChangeHandler = (evt) => {
  if (evt.target === adSelectTimein) {
    adSelectTimeout.value = adSelectTimein.value;
  }
  if (evt.target === adSelectTimeout) {
    adSelectTimein.value = adSelectTimeout.value;
  }
};

const checkRoomsValidity = () => {
  const rooms = Number(adSelectRooms.value);
  const guest = Number(adSelectGuests.value);

  const isValidForGuests =
    rooms <= MAX_ROOMS_FOR_GUESTS &&
    guest >= MIN_GUESTS_PER_ROOM &&
    rooms >= guest;
  const isValidNotForGuests = rooms >= MAX_ROOMS_FOR_GUESTS && guest === '0';
  const isValid = isValidForGuests || isValidNotForGuests;

  return isValid;
};

const capacityChangeHandler = () => {
  if (checkRoomsValidity()) {
    adSelectGuests.setCustomValidity('');
  } else {
    adSelectGuests.setCustomValidity(
      'Количество гостей не соответствует количеству комнат',
    );
  }

  adSelectGuests.reportValidity();
};

const titleChangeHandler = () => {
  const valueLength = adInputTitle.value.length;
  if (valueLength < minAdInputTitleLength) {
    adInputTitle.setCustomValidity(`Введите еще ${
      minAdInputTitleLength - valueLength
    }
      симв.`);
  } else if (valueLength > maxAdInputTitleLength) {
    adInputTitle.setCustomValidity(`Удалите лишние ${
      valueLength - maxAdInputTitleLength
    }
      симв.`);
  } else {
    adInputTitle.setCustomValidity('');
  }
  adInputTitle.reportValidity() && unMarkInvalidFields();
};

const priceChangeHandler = () => {
  const minAdPrice = Number(adInputPrice.getAttribute('min'));
  const currentPrice = Number(adInputPrice.value);
  if (currentPrice > maxAdPrice) {
    adInputPrice.setCustomValidity(
      `Цена должна быть меньше ${maxAdPrice.toLocaleString()}`,
    );
  } else if (currentPrice < minAdPrice) {
    adInputPrice.setCustomValidity(
      `Цена должна быть больше ${minAdPrice.toLocaleString()}`,
    );
  } else {
    adInputPrice.setCustomValidity('');
  }
  adInputPrice.reportValidity() && unMarkInvalidFields();
};

const checkAdValidity = () => {
  adForm.addEventListener('invalid', markInvalidFields, true);
  adInputTitle.addEventListener('input', titleChangeHandler);
  adInputPrice.addEventListener('input', priceChangeHandler);
  adSelectPlaceType.addEventListener('change', placeTypeChangeHandler);
  adSelectPlaceType.addEventListener('change', priceChangeHandler);
  adSelectTimein.addEventListener('change', timeChangeHandler);
  adSelectTimeout.addEventListener('change', timeChangeHandler);
  adSelectGuests.addEventListener('change', capacityChangeHandler);
  adSelectRooms.addEventListener('change', capacityChangeHandler);
};

const checkAdFormValidity = checkAdValidity();

export {
  checkAdFormValidity,
  checkRoomsValidity,
  capacityChangeHandler,
  placeTypeChangeHandler
};
