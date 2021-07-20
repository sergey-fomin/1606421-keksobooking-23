import { disableForms, enableAdForm, enableMapFilters } from './forms-control.js';
import { getData } from './api.js';
import { setFilterFormChange } from './filters.js';
import { checkAdFormValidity } from './ad-form-validation.js';
import { loadMap, refreshOffersData, createMarkersGroup } from './map.js';
import { errorPopup, showPopup } from './popup.js';


disableForms();

const loadSimilarOffers = () => {
  getData(
    (newData) => {
      refreshOffersData(newData);
      createMarkersGroup(newData);
      enableMapFilters();
      setFilterFormChange(() => createMarkersGroup(newData));
    },
    showPopup(errorPopup),
  );
};

loadMap()
  .then(loadSimilarOffers())
  .then(enableAdForm)
  .then(checkAdFormValidity)
  .catch(showPopup(errorPopup));
