import {getRandomIntInclusive,
  getRandomFloatingPointNumber,
  makeArrayWithIncreasingNumbers,
  getRandomElement,
  getRandomElementNoRepeat,
  getFewRandomElements,
  getFewRandomElementsNoRepeat
} from './utils.js';

const PLACE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const PLACE_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PLACE_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const AVATARS_COUNT = 10;
const MIN_PLACE_PRICE = 5000;
const MAX_PLACE_PRICE = 20000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 20;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const MAX_PLACE_PHOTOS = 10;
const ADVERTS_COUNT = 1;

const createAuthor = {
  avatar: `img/avatars/user${getRandomElementNoRepeat(makeArrayWithIncreasingNumbers(AVATARS_COUNT))}.png`,
};

const createLocation = {
  lat: getRandomFloatingPointNumber(35.65, 35.7, 5),
  lng: getRandomFloatingPointNumber(139.7, 139.8, 5),
};

const createOffer = {
  title: 'Лучшее предложение для солидных котов',
  address: `${createLocation.lat}, ${createLocation.lng}`,
  price: getRandomIntInclusive(MIN_PLACE_PRICE, MAX_PLACE_PRICE),
  type: getRandomElement(PLACE_TYPE),
  rooms: getRandomIntInclusive(MIN_ROOMS, MAX_ROOMS),
  guests: getRandomIntInclusive(MIN_GUESTS, MAX_GUESTS),
  checkin: getRandomElement(TIMES),
  checkout: getRandomElement(TIMES),
  features: getFewRandomElementsNoRepeat(PLACE_FEATURES),
  description: 'Уголок романтики в огромном городе',
  photos: getFewRandomElements(PLACE_PHOTOS, MAX_PLACE_PHOTOS),
};

const createAdvert = () => ({
  author: createAuthor,
  offer: createOffer,
  location: createLocation,
});

const generateNearbyAdverts = new Array(ADVERTS_COUNT).fill('.').map(() => createAdvert());

export {generateNearbyAdverts};
