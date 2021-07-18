const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableForm = (form) => {
  form.classList.add(`${form.className}--disabled`);

  for (let i = 0; i < form.children.length; i++) {
    form.children[i].setAttribute('disabled', 'disabled');
  }
};

const pageInactive = () => {
  document.addEventListener('readystatechange', () => {
    switch (document.readyState) {
      case 'loading':
        // Страница все ещё загружается
        break;
      case 'interactive':
        // Страница уже загружена. Теперь мы можем получить доступ к DOM объектам.
        disableForm(mapFilters);
        disableForm(adForm);
        break;
      case 'complete':
        // Страница загружена вместе с дополнительными ресурсами.
        break;
    }
  });
};

const loadPage = pageInactive();

export { loadPage };
