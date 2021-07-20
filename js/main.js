import {
  adFormSubmitHandler,
  disableForms,
  enableAdForm,
  enableMapFilters
} from './forms-control.js';
import { getData } from './api.js';
import { setMapFilterChange } from './filters.js';
import { checkAdFormValidity } from './ad-form-validation.js';
import { loadMap, refreshOffersData, createMarkersGroup } from './map.js';
import { errorPopup, showPopup, successPopup } from './popup.js';

disableForms();

const loadSimilarOffers = () => {
  getData((offersList) => {
    refreshOffersData(offersList);
    createMarkersGroup(offersList);
    enableMapFilters();
    setMapFilterChange(() => createMarkersGroup(offersList));
  }, showPopup(errorPopup));
};

loadMap()
  .then(loadSimilarOffers)
  .then(enableAdForm)
  .then(checkAdFormValidity)
  .then(() => {
    adFormSubmitHandler(showPopup(successPopup), showPopup(errorPopup));
  })
  .catch(showPopup(errorPopup));
