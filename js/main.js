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
const ADVERTS_COUNT = 10;

// Возвращает случайное целое число из переданного диапазона включительно

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return 'Введите два разных числа больше или равных нулю';
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloatingPointNumber = (min, max, decimals) => {
  if (min < 0 || max < 0 || min === max || min > max) {
    return 'Введите два разных числа больше или равных нулю чтобы задать диапазон значений, а также количество знаков после запятой';
  } else {
    const number = Math.random() * (max - min) + min;
    return +number.toFixed(decimals);
  }
};

// Создает массив чисел заданной длины, с каждым элементом увеличивается на 1

const makeArrayWithIncreasingNumbers = (arrayLength = 2) => {
  const newArray = new Array(arrayLength - 1).fill('');
  for (let ind = 0; ind <= arrayLength - 1; ind++) {
    if (ind < 9) {
      newArray[ind] = `0${ind + 1}`;
    } else {
      newArray[ind] = ind + 1;
    }
  }
  return newArray;
};

const getRandomElement= (someArray) => someArray[getRandomIntInclusive(0, someArray.length - 1)];

const getRandomElementNoRepeat = (someArray) => {
  const randomArrayIndex = getRandomIntInclusive(0, someArray.length - 1);
  const randomArrayElement = someArray[randomArrayIndex];
  someArray.splice(randomArrayIndex, 1);
  return randomArrayElement;
};

const getFewRandomElements = (someArray, maxElements) => {
  const counter = getRandomIntInclusive(1, maxElements);
  const newArray = new Array(counter).fill('.');
  for (let ind = 0; ind <= counter - 1; ind++) {
    newArray[ind] = getRandomElement(someArray);
  }
  return newArray;
};

const getFewRandomElementsNoRepeat = (someArray) => {
  const counter = getRandomIntInclusive(0, someArray.length);
  const newArray = new Array(counter).fill('.');
  for (let ind = 0; ind <= counter - 1; ind++) {
    newArray[ind] = getRandomElementNoRepeat(someArray);
  }
  return newArray;
};

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

generateNearbyAdverts;
