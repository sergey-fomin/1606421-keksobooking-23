const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableForm = (form) => {
  form.classList.add(`${form.className}--disabled`);

  for (let i = 0; i < form.children.length; i++) {
    form.children[i].setAttribute('disabled', 'disabled');
  }
};

const disablePage = () => {
  disableForm(mapFilters);
  disableForm(adForm);
};

const loadInactivePage = disablePage();

export { loadInactivePage };
