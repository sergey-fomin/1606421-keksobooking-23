import { resetForms } from './forms-control.js';
import { resetMap } from './map.js';
// const URL = {
//   GET: 'https://23.javascript.pages.academy/keksobooking/data',
//   POST: 'https://23.javascript.pages.academy/keksobooking/data',
// }

const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки');
    })
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetForms();
        resetMap();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};

export {getData, sendData};
