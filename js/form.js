const MIN_PRICE_PER_NIGHT = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};
const adForm = document.querySelector('.ad-form');
const adSelectPlaceType = adForm.querySelector('#type');
const adInputPrice = adForm.querySelector('#price');
const adSelectTimein = adForm.querySelector('#timein');
const adSelectTimeout = adForm.querySelector('#timeout');

const checkValidity = () => {
  const placeTypeChangeHandler = () => {
    adInputPrice.placeholder = `${
      MIN_PRICE_PER_NIGHT[adSelectPlaceType.value]
    }`;
    adInputPrice.min = `${MIN_PRICE_PER_NIGHT[adSelectPlaceType.value]}`;
  };

  const checkInChangeHandler = () => {
    adSelectTimeout.value = adSelectTimein.value;
  };

  const checkOutChangeHandler = () => {
    adSelectTimein.value = adSelectTimeout.value;
  };

  adSelectPlaceType.addEventListener('change', placeTypeChangeHandler);
  adSelectTimein.addEventListener('change', checkInChangeHandler);
  adSelectTimeout.addEventListener('change', checkOutChangeHandler);
};

const checkAdFormValidity = checkValidity();

export { checkAdFormValidity };
