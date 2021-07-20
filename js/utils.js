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

// Возвращает случайный элемент массива

const getRandomElement= (someArray) => someArray[getRandomIntInclusive(0, someArray.length - 1)];

// Возвращает случайный элемент массива без повторений

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

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomIntInclusive,
  getRandomFloatingPointNumber,
  makeArrayWithIncreasingNumbers,
  getRandomElement,
  getRandomElementNoRepeat,
  getFewRandomElements,
  getFewRandomElementsNoRepeat,
  debounce
};
