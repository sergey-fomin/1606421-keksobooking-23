const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].setAttribute('disabled', '');
  }
};

const disableMapFilters = () => {
  mapFilters.classList.add('map__filters--disabled');

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].setAttribute('disabled', '');
  }
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let i = 0; i < adForm.children.length; i++) {
    adForm.children[i].removeAttribute('disabled');
  }
};

const enableMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');

  for (let i = 0; i < mapFilters.children.length; i++) {
    mapFilters.children[i].removeAttribute('disabled');
  }
};

const enablePage = () => {
  enableAdForm();
  enableMapFilters();
};

// const enableForm = (form) => {
//   form.classList.remove(`${form.classList[1]}`);

//   for (let i = 0; i < form.children.length; i++) {
//     form.children[i].removeAttribute('disabled');
//   }
// };

// const enableAdForm = () => {
//   adForm.classList.remove('ad-form--disabled');

//   for (let i = 0; i < adForm.children.length; i++) {
//     adForm.children[i].removeAttribute('disabled');
//   }
// };

// const enableMapFilters = () => {
//   mapFilters.classList.remove('map__filters--disabled');

//   for (let i = 0; i < mapFilters.children.length; i++) {
//     mapFilters.children[i].removeAttribute('disabled');
//   }
// };

const disablePage = () => {
  disableAdForm();
  disableMapFilters();
};

// const enablePage = () => {
//   enableAdForm();
//   enableMapFilters();
// };

const loadInactivePage = disablePage();
// const loadActivePage = enablePage();

export { loadInactivePage, enablePage };
