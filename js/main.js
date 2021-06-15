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

getRandomIntInclusive();

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloatingPointNumber = (min, max, decimals) => {
  if (min < 0 || max < 0 || min === max || min > max) {
    return 'Введите два разных числа больше или равных нулю чтобы задать диапазон значений, а также количество знаков после запятой';
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    const number = Math.random() * (max - min + 1) + min;
    return +number.toFixed(decimals);
  }
};

getRandomFloatingPointNumber();
