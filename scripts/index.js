const formElement = document.querySelector('.popup__form');
const formAddElement = document.querySelector('.popup-add__form');
const popupProfilShow = document.querySelector('.profil__edit');
const popupCardAddShow = document.querySelector('.profil__add');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');
const popupProfilClose = document.querySelector('.popup__close');
const popupCardAddClose = document.querySelector('.popup-add__close');
const nameInput = popup.querySelector('.popup__input_form_name');
const descriptionInput = popup.querySelector('.popup__input_form_description');
const placeInput = document.querySelector('.popup-add__input_form_place');
const linkInput = document.querySelector('.popup-add__input_form_link');
const profilName = document.querySelector('.profil__name');
const profilDescription = document.querySelector('.profil__description');
const template = document.querySelector('#template');
const sectionPageTemplate = document.querySelector('.page__template');
const popupImgClose = document.querySelector('.popup-img__close');

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


const createTaskDomNode = (item) => {
  const templateElement = template.content.querySelector('.template__card').cloneNode(true);

  const nameOpen = templateElement.querySelector('.template__title');
  const image = templateElement.querySelector('.template__photo');
  nameOpen.textContent = item.name;
  image.src = item.link;
  


  //открытие фотографии
  image.addEventListener('click', ()=> {
    popupImg.classList.add('popup-img_opened');
    popupOpenTitle.textContent = nameOpen.textContent;
    popupOpenImg.src = image.src;
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
  closePopupAddCard();
}


formAddElement.addEventListener('submit', formAddSubmitHandler);

sectionPageTemplate.append(...result);


//функция открытия Popup - редактор профиля 
function showPopupProfil() {
  popup.classList.add('popup_opened');
  nameInput.value = profilName.textContent;
  descriptionInput.value = profilDescription.textContent;
};

//функция закрытия Popup - редактор профиля 
function closePopupProfil() {
  popup.classList.remove('popup_opened');
};

//функция открытия Popup - добавления карточки 
function showPopupAddCard() {
  popupAdd.classList.add('popup-add_opened');
};

//функция закрытия Popup - добавления карточки 
function closePopupAddCard() {
  popupAdd.classList.remove('popup-add_opened');
};

function closeImgPopup () {
  popupImg.classList.remove('popup-img_opened');
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

formElement.addEventListener('submit', formSubmitHandler);