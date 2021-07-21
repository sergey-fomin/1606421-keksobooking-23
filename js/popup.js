const successPopup = document
  .querySelector('#success')
  .content.querySelector('.success');

const errorPopup = document
  .querySelector('#error')
  .content.querySelector('.error');

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closePopupHandler = (evt) => {
  const popup = document.querySelector('.active-popup');
  if (isEscKey(evt) || evt.type === 'click') {
    popup.remove();
    document.removeEventListener('keydown', closePopupHandler);
  }
};

const closePopupListener = (popup) => {
  document.addEventListener('keydown', closePopupHandler);
  popup.addEventListener('click', closePopupHandler);
};

const showPopup = (popupSample) => () => {
  const popupClone = popupSample.cloneNode(true);
  popupClone.classList.add('active-popup');
  document.body.insertAdjacentElement('beforeend', popupClone);
  closePopupListener(popupClone);
};

export { successPopup, errorPopup, showPopup };
