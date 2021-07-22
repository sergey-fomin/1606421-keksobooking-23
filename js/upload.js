const adForm = document.querySelector('.ad-form');
const avatarChooser = adForm.querySelector('#avatar');
const avatarPreview = adForm.querySelector('.ad-form-header__preview');
const imagePreviewTemplate = avatarPreview.querySelector('img');
const photosContainer = adForm.querySelector('ad-form__photo-container');
const photosChooser = adForm.querySelector('#images');
const photoPreview = adForm.querySelector('.ad-form__photo');
const TARGET = {
  avatar: {
    target: avatarChooser,
    preview: avatarPreview,
    fileTypes: ['webp', 'jpg', 'jpeg', 'png', 'svg', 'gif'],
  },
  photos: {
    target: photosChooser,
    preview: photoPreview,
    fileTypes: ['webp', 'jpg', 'jpeg', 'png'],
    container: photosContainer,
  },
};

const uploadImage = (evt) => {
  const fileChooser = evt.target;
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const imageSample = imagePreviewTemplate.cloneNode(true);
  let acceptableTypes = [];
  let preview;

  switch (fileChooser) {
    case TARGET.avatar.target:
      acceptableTypes = TARGET.avatar.fileTypes;
      preview = TARGET.avatar.preview;
      break;
    case TARGET.photos.target:
      acceptableTypes = TARGET.photos.fileTypes;
      preview = TARGET.photos.preview;
      preview.style.display = 'flex';
      preview.style.justifyContent = 'center';
      preview.style.alignItems = 'center';
      break;
  }

  const typeMatches = acceptableTypes.some((type) => fileName.endsWith(type));

  if (typeMatches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imageSample.src = reader.result;
      switch (fileChooser) {
        case TARGET.avatar.target:
          preview.textContent = '';
          preview.append(imageSample);
          break;
        case TARGET.photos.target:
          preview.appendChild(imageSample);
          break;
      }
    });

    reader.readAsDataURL(file);
  }
};

export { uploadImage };
