const formProfileEdit = document.querySelector('.popup-profile__form');
const formAddElement = document.querySelector('.popup-add__form');
const popupProfilShow = document.querySelector('.profil__edit');
const popupCardAddShow = document.querySelector('.profil__add');
const popupProfile = document.querySelector('.popup-profile');
const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');
const popupProfilClose = document.querySelector('.popup-profile__close');
const popupCardAddClose = document.querySelector('.popup-add__close');
const popupImgClose = document.querySelector('.popup-img__close');
const nameInput = document.querySelector('.popup-profile__input_form_name');
const descriptionInput = document.querySelector('.popup-profile__input_form_description');
const placeInput = document.querySelector('.popup-add__input_form_place');
const linkInput = document.querySelector('.popup-add__input_form_link');
const profilName = document.querySelector('.profil__name');
const profilDescription = document.querySelector('.profil__description');
const template = document.querySelector('#template');
const sectionPageTemplate = document.querySelector('.page__template');
const saveButtonCards = document.querySelector('.popup__button-save');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupOpenImg = document.querySelector('.popup-img__photo');
const popupOpenTitle = document.querySelector('.popup-img__title');
const popupOpenAlt = document.querySelector('.popup-img__photo');

const createTaskDomNode = (item) => {
  const templateElement = template.content.querySelector('.template__card').cloneNode(true);

  const nameOpen = templateElement.querySelector('.template__title');
  const image = templateElement.querySelector('.template__photo');
  const imageAlt = templateElement.querySelector('.template__photo');
  nameOpen.textContent = item.name;
  image.src = item.link;
  imageAlt.alt = item.name;


  //открытие фотографии
  image.addEventListener('click', ()=> {
    openPopup(popupImg);
    popupOpenTitle.textContent = nameOpen.textContent;
    popupOpenImg.src = image.src;
    popupOpenAlt.alt = imageAlt.alt;
  });

  //кнопка удаления
  const buttonDeleteCard = templateElement.querySelector('.template__delete');

  buttonDeleteCard.addEventListener('click', () => {
    templateElement.remove();
  });
  
  //кнопка like
  const buttonLike = templateElement.querySelector('.template__like');
  
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('template__like_actived');
  });

  return templateElement;  
};

const result = initialCards.map((item) => {
  return createTaskDomNode(item);
});



const formAddSubmitHandler = (evt) => {
  evt.preventDefault();

  const inputValuePlace = placeInput.value;
  const inputValueLink = linkInput.value;
  
  const taskName = createTaskDomNode({ name: inputValuePlace, link: inputValueLink });
  sectionPageTemplate.prepend(taskName);

  placeInput.value = '';
  linkInput.value = '';

  closePopupAddCard();
}


formAddElement.addEventListener('submit', formAddSubmitHandler);

sectionPageTemplate.append(...result);

// функция открытия для всех Popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscape);
  document.addEventListener('mousedown', clickOverlay);
};

// функция закрытия для всех Popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
  document.removeEventListener('mousedown', clickOverlay);
}

function pressEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function clickOverlay (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  };
};

//функция открытия Popup - редактор профиля 
function showPopupProfil() {
  openPopup(popupProfile);
  nameInput.value = profilName.textContent;
  descriptionInput.value = profilDescription.textContent;
};

//функция закрытия Popup - редактор профиля 
function closePopupProfil() {
  closePopup(popupProfile);
};

//функция открытия Popup - добавления карточки 
function showPopupAddCard() {
  openPopup(popupAdd);
};

//функция закрытия Popup - добавления карточки 
function closePopupAddCard() {
  closePopup(popupAdd);
};

//функция закрытия Popup - просмотр фотографии
function closeImgPopup () {
  closePopup(popupImg);  
};

popupProfilShow.addEventListener('click', showPopupProfil);
popupProfilClose.addEventListener('click', closePopupProfil);
popupCardAddShow.addEventListener('click', showPopupAddCard);
popupCardAddClose.addEventListener('click', closePopupAddCard);
popupImgClose.addEventListener('click', closeImgPopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profilName.textContent = nameInput.value;
  profilDescription.textContent = descriptionInput.value;
  closePopupProfil();
};

formProfileEdit.addEventListener('submit', formSubmitHandler);