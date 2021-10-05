let formElement = document.querySelector('.popup__form');
let profilEdit = document.querySelector('.profil__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let nameInput = popup.querySelector('.popup__input_form_name');
let descriptionInput = popup.querySelector('.popup__input_form_description');
let profilName = document.querySelector('.profil__name');
let profilDescription = document.querySelector('.profil__description');

function showPopup(evt) {
    popup.classList.add('popup_opened');
    nameInput.value = profilName.textContent;
    descriptionInput.value = profilDescription.textContent;
};

function closePopup(evt) {
    popup.classList.remove('popup_opened');
};

profilEdit.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profilName.textContent = nameInput.value;
    profilDescription.textContent = descriptionInput.value
    closePopup(popup);
};

formElement.addEventListener('submit', formSubmitHandler);