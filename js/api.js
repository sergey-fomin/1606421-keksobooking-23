import { resetForms } from './forms-control.js';
import { resetMap } from './map.js';
const URL_FOR_METHOD = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};

const getData = (onSuccess, onFail) => {
  fetch(URL_FOR_METHOD.GET)
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
  fetch(URL_FOR_METHOD.POST, {
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

export { getData, sendData };
