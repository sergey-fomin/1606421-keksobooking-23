import { resetMap } from './map.js';
import {
  checkRoomsValidity,
  capacityChangeHandler,
  placeTypeChangeHandler
} from './ad-form-validation.js';
import { sendData } from './api.js';

const adForm = document.querySelector('.ad-form');
const adAddress = adForm.querySelector('#address');
const adFormResetButton = adForm.querySelector('.ad-form__reset');
const avatar = adForm.querySelector('.ad-form-header__preview');
const defaultAvatar = avatar.querySelector('img').cloneNode(true);
const photoPreview = document.querySelector('.ad-form__photo');
const mapFiltersForm = document.querySelector('.map__filters');

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].setAttribute('disabled', '');
  }
};

const disableMapFilters = () => {
  mapFiltersForm.classList.add('map__filters--disabled');

  for (let i = 0; i < mapFiltersForm.children.length; i++) {
    mapFiltersForm.children[i].setAttribute('disabled', '');
  }
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].removeAttribute('disabled');
  }
};

const enableMapFilters = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');

  for (let i = 0; i < mapFiltersForm.children.length; i++) {
    mapFiltersForm.children[i].removeAttribute('disabled');
  }
};

const disableForms = () => {
  disableAdForm();
  disableMapFilters();
};

const enableForms = () => {
  enableAdForm();
  enableMapFilters();
};

const setPinAddress = ({ lat, lng }) => {
  adAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const resetForms = () => {
  adForm.reset();
  photoPreview.textContent = '';
  avatar.textContent = '';
  avatar.append(defaultAvatar);
  mapFiltersForm.reset();
  placeTypeChangeHandler();
};

adFormResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForms();
  resetMap();
});

const adFormSubmitHandler = (sendSuccess, sendFailed) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (checkRoomsValidity()) {
      sendData(sendSuccess, sendFailed, new FormData(evt.target));
    } else {
      capacityChangeHandler();
    }
  });
};

export {
  disableForms,
  enableForms,
  setPinAddress,
  resetForms,
  enableMapFilters,
  enableAdForm,
  adFormSubmitHandler
};
