import { debounce } from './utils.js';

const mapFiltersForm = document.querySelector('.map__filters');
const featuresInput = mapFiltersForm.querySelectorAll('[type="checkbox"]');

const SIMILAR_OFFERS_MAX = 10;
const DEFAULT_RANGE = 'any';
const PRICE_RANGE = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50000,
    MAX: Infinity,
  },
};
const FILTERS = {
  TYPE: mapFiltersForm['housing-type'],
  PRICE: mapFiltersForm['housing-price'],
  ROOMS: mapFiltersForm['housing-rooms'],
  GUESTS: mapFiltersForm['housing-guests'],
};

const featuresFilter = (offersList) => {
  const selectedFeatures = [...featuresInput].filter((input) => input.checked);
  const filtered = offersList
    .slice()
    .filter((currentOffer) =>
      selectedFeatures.every(
        (feature) =>
          currentOffer.offer.features &&
          currentOffer.offer.features.includes(feature.value),
      ),
    );
  return filtered;
};

const adFilter = (offersList) => {
  const filtersValue = {
    type: FILTERS.TYPE.value,
    price: FILTERS.PRICE.value.toUpperCase(),
    rooms: Number(FILTERS.ROOMS.value) || FILTERS.ROOMS.value.toLowerCase(),
    guests: Number(FILTERS.GUESTS.value) || FILTERS.GUESTS.value.toLowerCase(),
  };
  const filterKeys = Object.keys(filtersValue);
  const filteredOffers = offersList.slice().filter((currentOffer) =>
    filterKeys.every((key) => {
      if (key === 'price') {
        if (
          Object.prototype.hasOwnProperty.call(PRICE_RANGE, filtersValue[key])
        ) {
          const min = PRICE_RANGE[filtersValue[key]].MIN;
          const max = PRICE_RANGE[filtersValue[key]].MAX;
          return (
            currentOffer.offer[key] >= min && currentOffer.offer[key] <= max
          );
        }
        return true;
      }
      return (
        currentOffer.offer[key] === filtersValue[key] ||
        filtersValue[key] === DEFAULT_RANGE
      );
    }),
  );
  return filteredOffers;
};

const mapFilter = (data) => {
  const similarOffers = data.slice();
  const filteredFeatures = featuresFilter(similarOffers);
  const filteredOffers = adFilter(filteredFeatures).slice(
    0,
    SIMILAR_OFFERS_MAX,
  );
  return filteredOffers;
};

const setMapFilterChange = (callbackFn) => {
  mapFiltersForm.addEventListener('change', debounce(callbackFn));
};

const showFilterError = () => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = 100;
  errorContainer.style.padding = '10px';
  errorContainer.style.fontSize = '20px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'red';
  errorContainer.textContent =
    'Увы, по вашему запросу ничего не найдено ;-( Попробуйте изменить параметры поиска';

  mapFiltersForm.insertAdjacentElement('afterend', errorContainer);

  mapFiltersForm.addEventListener('change', () => errorContainer.remove());
};

export { mapFilter, setMapFilterChange, showFilterError };
