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
const adSelectPlaceType = adForm.querySelector('#type');
const adInputPrice = adForm.querySelector('#price');
const adSelectTimein = adForm.querySelector('#timein');
const adSelectTimeout = adForm.querySelector('#timeout');
const adSelectRooms = adForm.querySelector('#room_number');
const adSelectGuests = adForm.querySelector('#capacity');

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

  const checkRoomsValidity = () => {
    const rooms = adSelectRooms.value;
    const guest = adSelectGuests.value;

    const isValidForGuests = rooms <= MAX_ROOMS_FOR_GUESTS && guest >= MIN_GUESTS_PER_ROOM && rooms >= guest;
    const isValidNotForGuests = rooms >= MAX_ROOMS_FOR_GUESTS &&  guest === '0';
    const isValid = isValidForGuests || isValidNotForGuests;

    return isValid;
  };

  const capacityChangeHandler = () => {
    if (checkRoomsValidity()) {
      adSelectGuests.setCustomValidity('');
    } else {
      adSelectGuests.setCustomValidity('Количество гостей не соответствует количеству комнат');
    }

    adSelectGuests.reportValidity();
  };


  adSelectPlaceType.addEventListener('change', placeTypeChangeHandler);
  adSelectTimein.addEventListener('change', checkInChangeHandler);
  adSelectTimeout.addEventListener('change', checkOutChangeHandler);
  adSelectGuests.addEventListener('change', capacityChangeHandler);
  adSelectRooms.addEventListener('change', capacityChangeHandler);
};

const checkAdFormValidity = checkValidity();

export { checkAdFormValidity };
