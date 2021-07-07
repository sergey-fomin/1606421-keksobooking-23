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
const AVATARS_COUNT = 10;

// Возвращает случайное целое число из переданного диапазона включительно

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0 || min === max || min > max) {
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

const getRandomElementNoRepeat = (someArray) => {
  const randomArrayIndex = getRandomIntInclusive(0, someArray.length - 1);
  const randomArrayElement = someArray[randomArrayIndex];
  someArray.splice(randomArrayIndex, 1);
  return randomArrayElement;
};

const author = {
  avatar: `img/avatars/user${getRandomElementNoRepeat(makeArrayWithIncreasingNumbers(AVATARS_COUNT))}.png`,
};

const location = {
  lat: getRandomFloatingPointNumber(35.65, 35.7, 5),
  lng: getRandomFloatingPointNumber(139.7, 139.8, 5),
};

console.log(location);


/*
Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

  avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.


offer, объект — содержит информацию об объявлении. Состоит из полей:

  title, строка — заголовок предложения. Придумайте самостоятельно.

  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

  price, число — стоимость. Случайное целое положительное число.

  type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

  rooms, число — количество комнат. Случайное целое положительное число.

  guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

  checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

  description, строка — описание помещения. Придумайте самостоятельно.

  photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.


location, объект — местоположение в виде географических координат. Состоит из двух полей:

  lat,
  lng,


const createAdvert = () => {
  return {
    author: {avatar: ''},
    offer: {
      title: '',
      address: '',
      price: '', // Сделать числом!
      type: '',
      rooms: '', // Случайное целое положительное число
      guests: '', // Случайное целое положительное число
      checkin: '', // одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      checkout: '', // одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      features: [], // массив случайной длины из значений. Значения не должны повторяться.
      description: '',
      photos: []
    },
    location: {
      lat,
      lng
    }
  };
};

createAdvert();

*/
